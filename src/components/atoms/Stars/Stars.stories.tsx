import { Grid } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { Field, Formik } from 'formik';
import { ThemeProvider } from 'src/components/particles';
import Stars, { StarsProps } from './Stars';

export default {
  title: 'Atoms/Stars',
  component: Stars,
  argTypes: {
    totalStars: { control: 'number' }
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof Stars>;
const Template: Story<StarsProps> = (args) => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
      <Field name={'name'} component={Stars} {...args} />
    </Formik>
  );
};

export const Default = Template.bind({});
Default.args = {
  totalStars: 5
};

export const WithTenStars = Template.bind({});
WithTenStars.args = {
  totalStars: 10
};

const TemplateTheme: Story<StarsProps> = (args) => {
  // const theme = useTheme();
  return (
    <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
      <Grid
        sx={{
          padding: '20px',
          borderRadius: '8px'
        }}
      >
        <Field {...args} name={'name'} component={Stars} />
      </Grid>
    </Formik>
  );
};

export const WithBackground = TemplateTheme.bind({});
WithBackground.args = {
  totalStars: 5
};
