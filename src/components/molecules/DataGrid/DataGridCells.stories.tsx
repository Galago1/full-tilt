import { Box } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { DataGrid } from 'src/components/organisms';
import { DataGridProps } from 'src/components/organisms/DataGrid/DataGrid';
import { Edit05Icon } from 'src/components/particles/theme/icons/General/edit-05';
import { Trash01Icon } from 'src/components/particles/theme/icons/General/trash-01';
import renderAvatarGroupCell from 'src/renderFunctions/renderAvatarGroupCell';
import renderButtonListCell from 'src/renderFunctions/renderButtonListCell';
import renderCheckboxCell from 'src/renderFunctions/renderCheckboxCell';
import renderChipListCell from 'src/renderFunctions/renderChipListCell';
import renderProgressCell from 'src/renderFunctions/renderProgressCell';
import renderRadioCell from 'src/renderFunctions/renderRadioCell';
import renderRatingCell from 'src/renderFunctions/renderRatingCell';
import renderSwitchCell from 'src/renderFunctions/renderSwitchCell';
import renderTextCell from 'src/renderFunctions/renderTextCell';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/DataGrid/DataGrid Cells',
  component: DataGrid
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DataGrid>;
// const rows = [{ id: 1, col1: 'Text', col2: 'Main Text' }];
const Template: Story<DataGridProps> = (args) => {
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        {...args}
        rows={args.rows}
        columns={args.columns}
        rowHeight={56}
      />
    </Box>
  );
};

export const Initial = Template.bind({});
Initial.args = {
  rows: [{ id: 1, col1: 'Text', col2: 'Main Text' }],
  columns: [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', ...renderTextCell() }
  ]
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  rows: [
    { id: 1, col1: 'Text', col2: 'Main Text' },
    { id: 2, col1: 'Olivia Rhye', col2: 'olivia@untitledui.com' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    {
      field: 'col2',
      headerName: 'Column 2',
      ...renderTextCell({ cellOptions: { subtitlePath: 'col2' } })
    }
  ]
};

export const WithChipList = Template.bind({});
WithChipList.args = {
  rows: [
    { id: 1, col1: 'Text', col2: 'Main Text', col3: 'Sub Text' },
    { id: 2, col1: 'Olivia Rhye', col2: 'olivia@untitledui.com', col3: 'HR' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1' },
    {
      field: 'col2',
      headerName: 'Column 2',
      width: 550,
      ...renderChipListCell({ cellOptions: { subtitlePath: ['col3'] } })
    }
  ]
};

export const WithChipListColored = Template.bind({});
WithChipListColored.args = {
  rows: [
    { id: 1, col1: 'Text', col2: 'Main Text', col3: 'Sub Text' },
    { id: 2, col1: 'Olivia Rhye', col2: 'olivia@untitledui.com', col3: 'HR' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1' },
    {
      field: 'col2',
      headerName: 'Column 2',
      width: 550,
      ...renderChipListCell({
        cellOptions: { subtitlePath: ['col3'], chipColors: ['success'] }
      })
    }
  ]
};

export const WithCheckbox = Template.bind({});
WithCheckbox.args = {
  rows: [
    { id: 1, col1: 'Text', col2: 'Main Text', col3: 'Sub Text' },
    { id: 2, col1: 'Olivia Rhye', col2: 'olivia@untitledui.com', col3: 'HR' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1' },
    {
      field: 'col2',
      headerName: 'Column 2',
      width: 550,
      ...renderCheckboxCell({
        cellOptions: {
          formikProps: { initialValues: { col2: true }, onSubmit: () => {} },
          fieldAttributes: { name: 'col2', value: true }
        }
      })
    }
  ]
};

export const WithCheckboxChecked = Template.bind({});
WithCheckboxChecked.args = {
  rows: [
    { id: 1, col1: 'Text', col2: 'Main Text', col3: 'Sub Text' },
    { id: 2, col1: 'Olivia Rhye', col2: 'olivia@untitledui.com', col3: 'HR' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1' },
    {
      field: 'col2',
      headerName: 'Column 2',
      width: 550,
      ...renderCheckboxCell({
        cellOptions: {
          formikProps: { initialValues: { col2: true }, onSubmit: () => {} },
          fieldAttributes: { name: 'col2', value: true, checked: true }
        }
      })
    }
  ]
};

export const WithSwitch = Template.bind({});
WithSwitch.args = {
  rows: [
    { id: 1, col1: 'Text', col2: 'Main Text', col3: 'Sub Text' },
    { id: 2, col1: 'Olivia Rhye', col2: 'olivia@untitledui.com', col3: 'HR' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1' },
    {
      field: 'col2',
      headerName: 'Column 2',
      width: 550,
      ...renderSwitchCell({
        cellOptions: {
          formikProps: { initialValues: { col2: true }, onSubmit: () => {} },
          fieldAttributes: { name: 'col2', value: true }
        }
      })
    }
  ]
};

export const WithSwitchChecked = Template.bind({});
WithSwitchChecked.args = {
  rows: [
    { id: 1, col1: 'Text', col2: 'Main Text', col3: 'Sub Text' },
    { id: 2, col1: 'Olivia Rhye', col2: 'olivia@untitledui.com', col3: 'HR' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1' },
    {
      field: 'col2',
      headerName: 'Column 2',
      width: 550,
      ...renderSwitchCell({
        cellOptions: {
          formikProps: { initialValues: { col2: true }, onSubmit: () => {} },
          fieldAttributes: { name: 'col2', value: true, checked: true }
        }
      })
    }
  ]
};

export const WithRadio = Template.bind({});
WithRadio.args = {
  rows: [
    { id: 1, col1: 'Text', col2: 'Main Text', col3: 'Sub Text' },
    { id: 2, col1: 'Olivia Rhye', col2: 'olivia@untitlediu.com', col3: 'HR' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1' },
    {
      field: 'col2',
      headerName: 'Column 2',
      width: 550,
      ...renderRadioCell({
        cellOptions: {
          formikProps: { initialValues: { col2: true }, onSubmit: () => {} },
          fieldAttributes: { name: 'col2', value: true }
        }
      })
    }
  ]
};

export const WithRadioChecked = Template.bind({});
WithRadioChecked.args = {
  rows: [
    { id: 1, col1: 'Text', col2: 'Main Text', col3: 'Sub Text' },
    { id: 2, col1: 'Olivia Rhye', col2: 'olivia@untitledui.com', col3: 'HR' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1' },
    {
      field: 'col2',
      headerName: 'Column 2',
      width: 550,
      ...renderRadioCell({
        cellOptions: {
          formikProps: { initialValues: { col2: true }, onSubmit: () => {} },
          fieldAttributes: { name: 'col2', value: true, checked: true }
        }
      })
    }
  ]
};

export const WithProgress = Template.bind({});
WithProgress.args = {
  rows: [
    { id: 1, col1: 'Text', col2: 50, col3: 'Sub Text' },
    { id: 2, col1: 'Olivia Rhye', col2: 25, col3: 'HR' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1' },
    {
      field: 'col2',
      headerName: 'Column 2',
      width: 550,
      ...renderProgressCell({
        cellOptions: {}
      })
    }
  ]
};

export const WithRating = Template.bind({});
WithRating.args = {
  rows: [
    { id: 1, col1: 'Text', col2: 50, col3: 'Sub Text' },
    { id: 2, col1: 'Olivia Rhye', col2: 25, col3: 'HR' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1' },
    {
      field: 'col2',
      headerName: 'Column 2',
      width: 550,
      ...renderRatingCell({
        cellOptions: {}
      })
    }
  ]
};
export const WithButtonList = Template.bind({});
WithButtonList.args = {
  rows: [
    { id: 1, col1: 'Text', col2: 50, col3: 'Sub Text' },
    { id: 2, col1: 'Olivia Rhye', col2: 25, col3: 'HR' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1' },
    {
      field: 'col2',
      headerName: 'Column 2',
      width: 550,
      ...renderButtonListCell({
        cellOptions: {
          buttonListProps: {
            buttons: [
              { label: 'Button', color: 'primary', variant: 'contained' },
              { label: 'Button', color: 'secondary', variant: 'outlined' }
            ]
          }
        }
      })
    }
  ]
};

export const WithButtonIconList = Template.bind({});
WithButtonIconList.args = {
  rows: [
    { id: 1, col1: 'Text', col2: 50, col3: 'Sub Text' },
    { id: 2, col1: 'Olivia Rhye', col2: 25, col3: 'HR' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1' },
    {
      field: 'col2',
      headerName: 'Column 2',
      width: 550,
      ...renderButtonListCell({
        cellOptions: {
          buttonListProps: {
            buttons: [
              { label: <Trash01Icon />, color: 'primary', variant: 'text' },
              { label: <Edit05Icon />, color: 'secondary', variant: 'text' }
            ]
          }
        }
      })
    }
  ]
};

export const WithAvatarList = Template.bind({});
WithAvatarList.args = {
  rows: [
    { id: 1, col1: 'Text', col2: ['User One', 'User twoq'], col3: 'Sub Text' },
    { id: 2, col1: 'Olivia Rhye', col2: ['25'], col3: 'HR' }
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1' },
    {
      field: 'col2',
      headerName: 'Column 2',
      width: 550,
      ...renderAvatarGroupCell({
        cellOptions: { avatarGroupProps: { max: 3 } }
      })
    }
  ]
};
