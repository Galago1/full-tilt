import { Grid } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import DragDropLine from './DragDropLine';

/**
 * DragDropLine is a utility component that provides a standardized drop line indicator
 * for drag-and-drop operations across the application. It ensures visual consistency
 * between different draggable components like SideNav and KanbanColumn.
 *
 * It renders as a horizontal line that appears above or below a component when
 * an item is being dragged over it, indicating where the dragged item will be dropped.
 */
const meta = {
  title: 'Utilities/DragDropLine',
  component: DragDropLine,
  parameters: {
    layout: 'centered'
  }
} as Meta<typeof DragDropLine>;

export default meta;
type Story = StoryObj<typeof DragDropLine>;

/**
 * Basic usage of DragDropLine at the top position
 */
export const TopPosition: Story = {
  args: {
    show: true,
    position: 'top',
    timeout: 200
  }
};

/**
 * DragDropLine shown at the bottom position
 */
export const BottomPosition: Story = {
  args: {
    show: true,
    position: 'bottom',
    timeout: 200
  }
};

/**
 * This story demonstrates how the DragDropLine component is meant to be used
 * in a real drag-and-drop scenario with multiple items
 */
export const InListContext: Story = {
  args: {
    show: false,
    position: 'top'
  },
  parameters: {
    docs: {
      description: {
        story:
          'This example shows how DragDropLines appear in a vertical list context.'
      }
    }
  },
  decorators: [
    (Story) => {
      const items = [
        { id: '1', label: 'Item 1', highlight: false, dropLine: null },
        { id: '2', label: 'Item 2', highlight: true, dropLine: 'top' },
        { id: '3', label: 'Item 3', highlight: false, dropLine: null },
        { id: '4', label: 'Item 4', highlight: false, dropLine: null }
      ];

      return (
        <Grid container flexDirection="column" gap={1} sx={{ width: 300 }}>
          {items.map((item) => (
            <Grid
              key={item.id}
              item
              sx={{
                position: 'relative',
                p: 2,
                border: item.highlight
                  ? '2px solid #1976d2'
                  : '1px solid #e0e0e0',
                borderRadius: 1,
                backgroundColor: item.highlight
                  ? 'rgba(25, 118, 210, 0.08)'
                  : 'white'
              }}
            >
              <DragDropLine show={item.dropLine === 'top'} position="top" />
              {item.label}
              <DragDropLine
                show={item.dropLine === 'bottom'}
                position="bottom"
              />
            </Grid>
          ))}
        </Grid>
      );
    }
  ]
};
