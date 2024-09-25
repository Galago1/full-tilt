import type { ComponentMeta, Story } from '@storybook/react';
import Reply, { ReplyProps } from './Reply';
import { Formik } from 'formik';
import TextAreaInput from 'src/components/molecules/Inputs/TextAreaInput/TextAreaInput';
import SwitchInput from 'src/components/molecules/Inputs/SwitchInput';

export default {
  title: 'Organisms/Forms/Reply',
  component: Reply
} as ComponentMeta<typeof Reply>;

const Template: Story<ReplyProps> = (args) => (
  <Formik
    initialValues={{ reply: 'Your reply', anonymous: true }}
    onSubmit={() => console.log('adscasd')}
  >
    {(formik) => <Reply {...args} />}
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  slots: {
    textAreaFieldAttributes: {
      name: 'reply',
      label: 'Reply',
      component: TextAreaInput,
      rows: 4,
      fullWidth: true
    },
    switchFieldAttributes: {
      name: 'anonymous',
      label: 'Anonymous',
      checked: true,
      labelPlacement: 'end',
      color: 'primary',
      component: SwitchInput,
      labelSx: {
        alignItems: 'center',
        '& .MuiFormControlLabel-label': {
          padding: 0,
          paddingLeft: 1
        }
      }
    },
    buttonProps: {
      label: 'Send Reply',
      type: 'submit',
      color: 'primary',
      variant: 'contained'
    }
  }
};
