import { Typography } from '@mui/material';
import type { Story, ComponentMeta } from '@storybook/react';
import Breadcrumbs from 'src/components/molecules/Breadcrumbs/Breadcrumbs';
import { ChevronRightIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import type { PageHeaderProps } from './PageHeader';
import PageHeader from './PageHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Page Header',
  component: PageHeader
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof PageHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const WithAvatar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAvatar.args = {
  slots: {
    avatarAndTextProps: {
      avatarProps: {
        children: <> HR</>,
        sx: { width: 56, height: 56 }
      },
      title: 'Olivia Rhye',
      subtitle: 'olivia@rhye.com',
      titleTypography: {
        variant: 'displaySmSemibold'
      },
      subtitleTypography: {
        variant: 'textMdRegular'
      }
    }
  }
} as const;
export const WithTitleAndSubtitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithTitleAndSubtitle.args = {
  slots: {
    breadcrumbProps: {
      breadcrumbs: [
        { label: 'Middle', href: '/' },
        {
          label: 'End',
          href: '/',
          sx: {
            backgroundColor: (theme: any) => theme.palette.grey[50],
            borderRadius: 0,
            padding: (theme: any) => theme.spacing(0.5, 1)
          }
        }
      ]
    },
    avatarAndTextProps: {
      title: 'Team Members',
      subtitle: 'Manager your team members and their account permissions here.',
      titleTypography: {
        variant: 'displaySmSemibold'
      },
      subtitleTypography: {
        variant: 'textMdRegular'
      }
    }
  }
};
export const WithBreadcrumbsAndButtons = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithBreadcrumbsAndButtons.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Team Members',
      subtitle: (
        <Breadcrumbs
          breadcrumbs={[
            {
              label: '',
              href: '/',
              children: <Typography>Collection</Typography>
            },
            { label: 'Middle', href: '/' },
            {
              label: 'End',
              href: '/',
              sx: {
                backgroundColor: (theme: any) => theme.palette.grey[50],
                borderRadius: 0,
                padding: (theme: any) => theme.spacing(0.5, 1)
              }
            }
          ]}
          separator={<ChevronRightIcon color={'secondary'} />}
        />
      ),
      titleTypography: {
        variant: 'displaySmSemibold'
      },
      subtitleTypography: {
        component: 'span'
      } as any
    },
    buttonListProps: {
      buttons: [
        {
          label: 'Login',
          color: 'secondary',
          variant: 'text'
        },
        {
          label: 'Other',
          color: 'secondary',
          variant: 'contained'
        },
        {
          label: 'Signup',
          color: 'primary',
          variant: 'contained'
        }
      ]
    }
  }
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  slots: {
    avatarAndTextProps: {
      avatarProps: {
        children: <> HR</>,
        sx: { width: 56, height: 56 }
      },
      title: 'Team Members',
      subtitle: (
        <Breadcrumbs
          breadcrumbs={[
            { label: '', href: '/' },
            { label: 'Middle', href: '/' },
            {
              label: 'End',
              href: '/',
              sx: {
                backgroundColor: (theme: any) => theme.palette.grey[50],
                borderRadius: 0,
                padding: (theme: any) => theme.spacing(0.5, 1)
              }
            }
          ]}
          separator={<ChevronRightIcon color={'secondary'} />}
        />
      ),
      titleTypography: {
        variant: 'displaySmSemibold'
      },
      subtitleTypography: {
        component: 'span'
      } as any
    },
    buttonListProps: {
      buttons: [
        {
          label: 'Login',
          color: 'secondary',
          variant: 'text'
        },
        {
          label: 'Other',
          color: 'secondary',
          variant: 'contained'
        },
        {
          label: 'Signup',
          color: 'primary',
          variant: 'contained'
        }
      ]
    }
  }
};
