import { Grid, Typography, useTheme } from '@mui/material';
import { XYCoord, useDragLayer } from 'react-dnd';
import { DRAG_TYPE } from './dragTypes';

// Styles for the custom drag layer
const layerStyles: React.CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 9999,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};

// Get the item's current position based on mouse movement
function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform
  };
}

// A component to display a custom preview for sections
const SectionDragPreview = ({ text }: { text: string }) => {
  const theme = useTheme();

  return (
    <Grid
      sx={{
        height: '40px',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.primary.main}`,
        boxShadow: theme.shadows[2],
        borderRadius: theme.shape.borderRadius,
        opacity: 0.9,
        maxWidth: '280px',
        overflow: 'hidden'
      }}
    >
      <Typography variant="body1" noWrap>
        {text}
      </Typography>
    </Grid>
  );
};

// A component to display a custom preview for list items
const ItemDragPreview = ({ text }: { text: string }) => {
  const theme = useTheme();

  return (
    <Grid
      sx={{
        height: '40px',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[1],
        borderRadius: theme.shape.borderRadius,
        opacity: 0.9,
        maxWidth: '280px',
        overflow: 'hidden'
      }}
    >
      <Typography variant="body2" noWrap>
        {text}
      </Typography>
    </Grid>
  );
};

// The main CustomDragLayer component
const CustomDragLayer = () => {
  // Get information about the current drag operation
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getClientOffset(),
      isDragging: monitor.isDragging()
    }));

  // Don't render anything if not dragging
  if (!isDragging) {
    return null;
  }

  // Get the display text from the item
  const getItemText = () => {
    // Try to extract text from listItemTextProps if available
    if (item.listItemTextProps?.primary) {
      return item.listItemTextProps.primary;
    }

    // Fallback text based on item type
    return item.type === DRAG_TYPE.SECTION
      ? `Section ${item.index + 1}`
      : `Item ${item.index + 1}`;
  };

  // Render the appropriate preview based on item type
  const renderItem = () => {
    switch (itemType) {
      case DRAG_TYPE.SECTION:
        return <SectionDragPreview text={getItemText()} />;
      case DRAG_TYPE.ITEM:
        return <ItemDragPreview text={getItemText()} />;
      default:
        return null;
    }
  };

  return (
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {renderItem()}
      </div>
    </div>
  );
};

export default CustomDragLayer;
