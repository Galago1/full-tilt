import type { Story, ComponentMeta } from '@storybook/react';
import type { AttachmentContainerProps } from './AttachmentContainer';
import AttachmentContainer from './AttachmentContainer';
import { FileUploadBaseTemplate } from '../FileUploadBase/FileUploadBase.stories';
import { FileUploadBaseProps } from '../FileUploadBase/FileUploadBase';
import { Theme } from '@mui/material';
import LinearProgressIndicator from 'src/components/molecules/LinearProgressIndicator';
import { DisplayValueTop } from 'src/components/molecules/LinearProgressIndicator/LinearProgressIndicator.stories';
import { File04Icon } from 'src/components/particles/theme/icons/Files/file-04';
import { Trash01Icon } from 'src/components/particles/theme/icons/General/trash-01';
import { UploadCloud02Icon } from 'src/components/particles/theme/icons/General/upload-cloud-02';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Attachment Container',
  component: AttachmentContainer
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof AttachmentContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<AttachmentContainerProps> = (args) => (
  <AttachmentContainer {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  sx: {
    border: (theme: Theme) => `1px solid ${theme.palette.grey[300]}`,
    p: (theme: Theme) => theme.spacing(1.25)
  },
  fileUploadBaseProps: {
    ...(FileUploadBaseTemplate.args as FileUploadBaseProps),
    boxSx: {
      backgroundColor: 'unset',
      borderRadius: 'unset',
      border: 'unset',
      borderColor: 'unset',
      padding: 'unset',
      '&:hover': {}
    },
    clickText: 'Browse files',
    acceptedText: '',
    showTitleIcon: false,
    avatarAndTextProps: {
      featuredIconProps: {
        children: <UploadCloud02Icon />
      },
      featuredIconItemSx: {
        // pt: '0 !important'
        pt: 0
      },
      my: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      textSx: {
        textAlign: 'center'
      },
      titleTypography: {
        // @ts-ignore
        component: 'span',
        color: 'primary'
      },
      subtitleTypography: {
        // @ts-ignore
        component: 'span'
      },
      tertiaryTitleTypography: {
        // @ts-ignore
        component: 'span'
      }
    }
  }
};

export const Finished = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Finished.args = {
  sx: {
    border: (theme: Theme) => `1px solid ${theme.palette.grey[300]}`,
    p: (theme: Theme) => theme.spacing(1.25)
  },
  finishedStateProps: {
    containerProps: {
      sx: { flexWrap: 'nowrap' }
    },
    avatarAndTextProps: {
      sx: { my: 'auto' },
      title: 'Organization Requirements.pdf',
      titleTypography: {
        variant: 'textSmRegular'
      }
    },
    buttonListProps: {
      buttons: [
        {
          label: 'View',
          color: 'primary',
          variant: 'text'
        }
      ]
    }
  }
};
export const IconLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconLeft.args = {
  sx: {
    border: (theme: Theme) => `1px solid ${theme.palette.grey[300]}`,
    p: (theme: Theme) => theme.spacing(1.25)
  },
  finishedStateProps: {
    containerProps: {
      alignItems: 'flex-start'
    },
    avatarAndTextProps: {
      sx: { my: 'auto' },
      textSx: { flexGrow: 1 },
      title: 'Organization Requirements.pdf',
      titleTypography: {
        variant: 'textSmRegular'
      },
      tertiaryTitle: '3200KB',
      tertiaryTitleTypography: {
        variant: 'textSmRegular',
        color: 'secondary'
      },
      subtitle: (
        <LinearProgressIndicator
          {...DisplayValueTop.args}
          linearProgressBarProps={{ sx: { height: 8, borderRadius: '4px' } }}
        />
      ),
      featuredIconProps: {
        children: <File04Icon />,
        dual: true
      },
      featuredIconItemSx: {
        pt: 0,
        alignSelf: 'flex-start'
      }
    },
    buttonListProps: {
      buttons: [
        {
          endIcon: <Trash01Icon />,
          color: 'primary',
          variant: 'text'
        }
      ]
    }
  }
};

// export const Loading = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Loading.args = {
//   sx: {
//     border: (theme: Theme) => `1px solid ${theme.palette.grey[300]}`,
//     p: (theme: Theme) => theme.spacing(1.25),
//     height: (theme: Theme) => theme.spacing(5.5),
//     my: 'auto'
//   },
//   linearProgressIndicatorProps: Percent75.args
// };
