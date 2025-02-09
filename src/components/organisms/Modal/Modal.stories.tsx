import { Grid } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { Field, Formik } from 'formik';
import { useModal } from 'mui-modal-provider';
import Button from 'src/components/atoms/Button/Button';
import { Dual } from 'src/components/atoms/FeaturedIcon/FeaturedIcon.stories';
import { TextInput } from 'src/components/molecules';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import { SearchLgIcon } from 'src/components/particles/theme/icons/General/search-lg';
import type { ModalProps } from './Modal';
import Modal from './Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Modal',
  component: Modal
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ModalProps> = (args) => {
  const { showModal } = useModal();
  const onShowModal = () => {
    const modal = showModal(Modal, {
      ...args,

      onClose: () => {
        modal.hide();
      }
    });
  };

  return (
    <Button
      variant="contained"
      onClick={onShowModal}
      color="primary"
      label={'simple dialog'}
      data-testid="open-modal"
    />
  );
};

export const NoHeaderModal = Template.bind({});
NoHeaderModal.args = {
  children: (
    <>
      <EmptyState
        {...{
          alignItems: 'center',
          featuredIconProps: {
            ...(Dual.args as any),
            children: <SearchLgIcon />,
            color: 'secondary'
          },
          avatarAndTextProps: {
            title: 'No projects found',
            textSx: { justifyContent: 'center', textAlign: 'center' },

            subtitle:
              'Your search "Landing page design" did not match any projects. Please try again.'
          }
        }}
      />
    </>
  )
};

export const WithHeaderModal = Template.bind({});
WithHeaderModal.args = {
  slots: {
    modalHeaderProps: {
      slots: {
        avatarAndTextProps: {
          title: 'Modal Header',
          subtitle: 'Subtitle'
        }
      },
      showDivider: true
    },
    modalActionsProps: {
      showDivider: true
    }
  },
  children: (
    <>
      <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
        <Grid container flexDirection={'column'}>
          <Grid item>
            <Field
              component={TextInput}
              name={'name'}
              label={'Name'}
              fullWidth
            />
          </Grid>
        </Grid>
      </Formik>
    </>
  )
};

export const HideClose = Template.bind({});
HideClose.args = {
  BackdropProps: {
    invisible: true
  },
  showClose: false,
  children: (
    <>
      <EmptyState
        {...{
          alignItems: 'center',
          avatarAndTextProps: {
            title: 'No projects found',
            textSx: { justifyContent: 'center', textAlign: 'center' },
            subtitle:
              'Your search "Landing page design" did not match any projects. Please try again.'
          }
        }}
      />
    </>
  )
};
export const Confirmation = Template.bind({});
Confirmation.args = {
  BackdropProps: {
    invisible: true
  },
  slots: {
    modalActionsProps: {
      slots: {
        saveButtonLabel: 'Confirm'
      }
    }
  },
  showClose: false,
  children: (
    <>
      <EmptyState
        {...{
          alignItems: 'flex-start',
          avatarAndTextProps: {
            title: 'No projects found',
            textSx: { justifyContent: 'flex-start', textAlign: 'flex-start' },
            subtitle:
              'This blog post has been published. Team members will be albe to eit this post and republish changes.'
          }
        }}
      />
    </>
  )
};

export const HideActions = Template.bind({});
HideActions.args = {
  BackdropProps: {
    invisible: true
  },
  showActions: false,
  children: (
    <>
      <EmptyState
        {...{
          alignItems: 'flex-start',
          avatarAndTextProps: {
            title: 'Blog Post Published',
            textSx: { justifyContent: 'flex-start', textAlign: 'flex-start' },
            subtitle:
              'Your search "Landing page design" did not match any projects. Please try again.'
          }
        }}
      />
    </>
  )
};
