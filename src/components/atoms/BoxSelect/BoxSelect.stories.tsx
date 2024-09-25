import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoxSelect from './BoxSelect';
import { Field, Formik } from 'formik';
import { Box, styled } from '@mui/material';

const Image = styled('img')({
  width: '24px',
  height: '24px',
  marginTop: '8px'
});

interface LabelProps {
  label: string;
  imageUrl?: string;
}
const Label = ({ label, imageUrl }: LabelProps) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box>{label}</Box>
      {imageUrl && <Image src={imageUrl} alt={label} />}
    </Box>
  );
};

export default {
  title: 'Atoms/BoxSelect',
  component: BoxSelect
} as ComponentMeta<typeof BoxSelect>;

const Template: ComponentStory<typeof BoxSelect> = (args) => (
  <Formik initialValues={{ name: '' }} onSubmit={() => console.log('changed')}>
    <Field name="name" component={BoxSelect} {...args} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  labels: [
    {
      label: (
        <Label
          label="Not at all"
          imageUrl="https://cdn.iconscout.com/icon/free/png-256/free-chatgpt-9296588-7576880.png?f=webp&w=256"
        />
      )
    },
    {
      label: (
        <Label
          label="Not really"
          imageUrl="https://static-00.iconduck.com/assets.00/zapier-icon-2048x2048-m13cmweo.png"
        />
      )
    },
    {
      label: (
        <Label
          label="Somewhat"
          imageUrl="https://mcdonough.com/wp-content/uploads/2020/09/starbucks-logo-png-transparent.png"
        />
      )
    },
    {
      label: (
        <Label
          label="Yes absolutely"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
        />
      )
    }
  ]
};

export const WithoutImages = Template.bind({});
WithoutImages.args = {
  labels: [
    { label: "No, I'm missing so much" },
    { label: 'Not really, it could be better' },
    { label: 'Most of what I need' },
    { label: 'Yes, I have everything I need' }
  ]
};
