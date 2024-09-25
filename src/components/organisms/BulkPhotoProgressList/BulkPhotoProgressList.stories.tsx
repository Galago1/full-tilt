/* eslint-disable react/no-children-prop */
import { Theme } from '@mui/material';
import type { Story, ComponentMeta } from '@storybook/react';
import {
  Completed,
  Default as PropgressBlockDefault
} from '../../molecules/ProgressBlock/ProgressBlock.stories';
import { XCloseIcon } from '../../particles/theme/overrides/CustomIcons';
import type { BulkPhotoProgressListProps } from './BulkPhotoProgressList';
import BulkPhotoProgressList from './BulkPhotoProgressList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Bulk Photo Progress List',
  component: BulkPhotoProgressList
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof BulkPhotoProgressList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<BulkPhotoProgressListProps> = (args) => (
  <BulkPhotoProgressList {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  avatarAndTextProps: {
    title: 'Image upload progress',
    subtitle: 'Lorem ipsum dolor sit amet',
    titleTypography: { variant: 'textXlSemibold' },
    subtitleTypography: { variant: 'textSmRegular' },
    buttonProps: {
      gridProps: {
        position: 'absolute',
        top: 0,
        right: (theme: Theme) => theme.spacing(2.5)
      },
      variant: 'text',
      color: 'secondary',
      startIcon: <XCloseIcon color={'secondary'} />,
      onClick: () => {}
    }
  },
  progressBlockProps: [{ ...Completed.args }, { ...PropgressBlockDefault.args }]
};
