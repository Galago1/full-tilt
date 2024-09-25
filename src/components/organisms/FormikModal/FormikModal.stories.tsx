import type { ComponentMeta, Story } from '@storybook/react';
import { Field } from 'formik';
import { useModal } from 'mui-modal-provider';
import Button from 'src/components/atoms/Button/Button';
import TextInput from 'src/components/molecules/Inputs/TextInput';
import yup from 'src/lib/yupLocal';
import FormikModal, { FormikModalProps } from './FormikModal';
import { Grid } from '@mui/material';
import { PhoneInput, TextAreaInput } from 'src/components/molecules';

interface FieldCompProps {
  formik?: any;
}
const FieldComp = ({ formik }: FieldCompProps) => {
  return (
    <Grid container flexDirection={'column'} gap={2}>
      <Grid item>
        <Field
          component={TextInput}
          name="name"
          label="Name"
          fullWidth
          required
        />
      </Grid>
      <Grid item>
        <Field
          component={TextAreaInput}
          name="description"
          label="Description"
          fullWidth
        />
      </Grid>
      <Grid item>
        <Field component={PhoneInput} name="phone" label="Phone" fullWidth />
      </Grid>
    </Grid>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/FormikModal',
  component: FormikModal
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof FormikModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<FormikModalProps> = (args) => {
  const { showModal } = useModal();
  const onShowModal = () => {
    const modal: any = showModal(FormikModal, {
      ...args,

      onClose: () => {
        modal.hide();
      },
      formikProps: {
        initialValues: { name: '' },
        onSubmit: () => modal.hide()
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
  slots: {
    modalHeaderProps: {
      slots: {
        avatarAndTextProps: {
          title: 'Create New Project',
          subtitle: 'Create a new project to get started'
        }
      }
    }
  },
  formikProps: {
    initialValues: { name: '' },
    onSubmit: () => {},
    validationSchema: yup.object().shape({ name: yup.string().required() })
  },
  children: <FieldComp />
};
