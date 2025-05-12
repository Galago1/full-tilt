import { ListItemTextProps } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import {
  useDrag,
  useDragDropManager,
  useDrop,
  DropTargetMonitor
} from 'react-dnd';
import {
  DRAG_TYPE,
  DragItemType,
  DragTypeValue
} from 'src/components/organisms/SideNav/dragTypes';
import { SideNavListItemProps } from '../SideNavListItem/SideNavListItem';

// Define the structure of the draggable item
interface DragItemStructure {
  id: string;
  type: DragItemType;
  index: number;
  sectionIndex?: number;
  groupId?: string;
  listItemTextProps?: ListItemTextProps;
  // Store the initial index to maintain consistent source reference
  initialIndex?: number;
}

export interface UseDraggableSideNavListItemProps extends SideNavListItemProps {
  /**
   * The index of the item in the list
   */
  index: number;
  /**
   * The index of the section that contains this item (only for ITEM type)
   */
  sectionIndex?: number;
  /**
   * The ID of the group this item belongs to
   */
  groupId?: string;
  /**
   * The type of draggable item
   */
  type: DragItemType;
  /**
   * Function to move a section
   */
  moveSection?: (
    groupId: string,
    dragIndex: number,
    hoverIndex: number
  ) => void;
  /**
   * Function to move an item within a section
   */
  moveItem?: (
    sectionIndex: number | string,
    dragIndex: number,
    hoverIndex: number
  ) => void;
  /**
   * ID of the item (used for drag identification)
   */
  id: string;
  /**
   * Whether to show drop indicators
   */
  showDropLine?: boolean;
  /**
   * Props to pass to the list item text
   */
  listItemTextProps?: ListItemTextProps;
}

export const useDraggableSideNavListItem = ({
  index,
  sectionIndex,
  groupId,
  type,
  moveSection,
  moveItem,
  id,
  showDropLine = true,
  listItemTextProps
}: UseDraggableSideNavListItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOver, setIsOver] = useState(false);
  const [dropPosition, setDropPosition] =
    useState<'top' | 'bottom' | null>(null);
  const dragDropManager = useDragDropManager();

  // Track the original index when drag starts
  const initialDragIndexRef = useRef<number>(-1);

  // Reset drop indicator when drag ends
  useEffect(() => {
    const handleStateChange = () => {
      const monitor = dragDropManager.getMonitor();
      const isDragging = monitor.isDragging();

      if (!isDragging) {
        setIsOver(false);
        setDropPosition(null);
        initialDragIndexRef.current = -1;
      } else {
        // Get current dragged item and clear indicators if this is the source
        const draggedItem = monitor.getItem();
        if (draggedItem && draggedItem.id === id) {
          setIsOver(false);
          setDropPosition(null);
        }
      }
    };

    const unsubscribe = dragDropManager
      .getMonitor()
      .subscribeToStateChange(handleStateChange);

    return () => unsubscribe();
  }, [dragDropManager, id]);

  const [{ handlerId, canDrop, isOverCurrent }, drop] = useDrop<
    DragItemStructure,
    void,
    {
      handlerId: string | symbol | null;
      isOver: boolean;
      isOverCurrent: boolean;
      canDrop: boolean;
    }
  >({
    accept: DRAG_TYPE[type] as DragTypeValue,
    canDrop: (item) => {
      // Don't allow dropping on self or items of different groups
      if (item.id === id) return false;
      if (type === DragItemType.ITEM && item.groupId !== groupId) return false;
      return true;
    },
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop()
      };
    },
    hover(item: DragItemStructure, monitor: DropTargetMonitor) {
      if (!ref.current) return;

      // Prevent hover processing if the item being dragged is this component
      if (item.id === id) {
        setIsOver(false);
        setDropPosition(null);
        return;
      }

      // Only proceed if we're truly hovering and can drop here
      const isCurrentlyOver = monitor.isOver({ shallow: true });
      const canCurrentlyDrop = monitor.canDrop();

      if (!isCurrentlyOver || !canCurrentlyDrop) {
        setIsOver(false);
        setDropPosition(null);
        return;
      }

      setIsOver(isCurrentlyOver);

      // Use initial index if available, otherwise use current index
      const dragIndex =
        item.initialIndex !== undefined ? item.initialIndex : item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex && item.groupId === groupId) {
        setDropPosition(null);
        return;
      }

      // For items, only allow drops within the same group
      if (type === DragItemType.ITEM && item.groupId !== groupId) {
        setDropPosition(null);
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      if (!clientOffset) {
        setDropPosition(null);
        return;
      }

      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Set drop line position
      if (hoverClientY < hoverMiddleY) {
        // When dragging downwards, only show top line if we're above the middle
        // and the drag source is at a higher position
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY / 2) {
          setDropPosition(null);
          return;
        }
        setDropPosition('top');
      } else {
        // When dragging upwards, only show bottom line if we're below the middle
        // and the drag source is at a lower position
        if (
          dragIndex > hoverIndex &&
          hoverClientY > hoverMiddleY + hoverMiddleY / 2
        ) {
          setDropPosition(null);
          return;
        }
        setDropPosition('bottom');
      }

      // Update item index for continuous dragging
      // This maintains the visual flow of dragging without changing state
      item.index = hoverIndex;
    },
    drop(item: DragItemStructure, monitor) {
      if (!monitor.didDrop()) {
        // Get the initial drag index (source) and current index (destination)
        const dragIndex =
          item.initialIndex !== undefined ? item.initialIndex : item.index;
        const hoverIndex = index;

        // Only execute the move if indices are different
        if (dragIndex !== hoverIndex) {
          // Only now do we make the actual state change
          if (type === DragItemType.SECTION && moveSection) {
            moveSection(groupId ?? '', dragIndex, hoverIndex);
          }

          if (type === DragItemType.ITEM && moveItem) {
            if (groupId) {
              moveItem(groupId, dragIndex, hoverIndex);
            } else if (sectionIndex !== undefined) {
              moveItem(sectionIndex, dragIndex, hoverIndex);
            }
          }
        }
      }

      // Always clean up visual states on drop
      setIsOver(false);
      setDropPosition(null);
    }
  });

  // Using a single useDrag hook with preview function
  const [{ isDragging }, drag, preview] = useDrag({
    type: DRAG_TYPE[type] as DragTypeValue,
    item: () => {
      // Store the initial index when drag begins
      initialDragIndexRef.current = index;

      return {
        id,
        type,
        index,
        initialIndex: index, // Add initial index to item
        sectionIndex,
        groupId,
        listItemTextProps: listItemTextProps
      };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    end: (item, monitor) => {
      // Clean up visual states
      setIsOver(false);
      setDropPosition(null);
      initialDragIndexRef.current = -1;
    }
  });

  // Use the empty image as the drag preview
  useEffect(() => {
    // Only create the empty image in browser environments
    if (typeof window !== 'undefined') {
      const emptyImage = new Image();
      emptyImage.src =
        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
      preview(emptyImage);
    }
  }, [preview]);

  // Connect the drag source and drop target
  drop(drag(ref));

  // Determine if we should highlight the item
  // Only highlight if we're over current, can drop, and not the dragged item itself
  const isHighlighted = isOver && canDrop && !isDragging && showDropLine;
  const backgroundColor = isHighlighted
    ? 'rgba(25, 118, 210, 0.08)'
    : 'transparent';

  // We consider an item a valid drop target if:
  // 1. It's specifically being hovered over (isOverCurrent)
  // 2. It can accept the current drop (canDrop)
  // 3. It's not the item being dragged (not isDragging)
  const isValidDropTarget = isOverCurrent && canDrop && !isDragging;

  return {
    ref,
    handlerId,
    isDragging,
    backgroundColor,
    isOver: isValidDropTarget, // Only return true if it's a valid target
    showDropLine,
    dropPosition,
    canDrop
  };
};
