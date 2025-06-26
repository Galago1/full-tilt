import type { ComponentMeta, Story } from '@storybook/react';
import { Formik } from 'formik';
import Button from 'src/components/atoms/Button/Button';
import SwitchInput from 'src/components/molecules/Inputs/SwitchInput';
import TextAreaInput from 'src/components/molecules/Inputs/TextAreaInput/TextAreaInput';
import Reply, { ReplyProps } from './Reply';

export default {
  title: 'Organisms/Forms/Reply',
  component: Reply
} as ComponentMeta<typeof Reply>;

const Template: Story<ReplyProps> = (args) => (
  <Formik
    initialValues={{ reply: 'Your reply', anonymous: true }}
    onSubmit={() => {}}
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
  },
  middleComponent: <Button variant="outlined" label="Skip" />
};
