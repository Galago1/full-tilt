import type { Story, ComponentMeta } from '@storybook/react';
import { useEffect, useState } from 'react';
import type { CircularProgressProps } from './CircularProgress';
import CircularProgress from './CircularProgress';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/CircularProgress',
  component: CircularProgress
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof CircularProgress>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CircularProgressProps> = (args) => (
  <CircularProgress {...args} />
);

export const CircularIndeterminate = Template.bind({});
CircularIndeterminate.args = {
  color: 'primary'
};

export const CircularSize = Template.bind({});
CircularSize.args = {
  size: 100
};

export const CircularDeterminant50 = Template.bind({});
CircularDeterminant50.args = {
  value: 50,
  variant: 'determinate'
};

const TemplateCircularDeterminateGrowing: Story<CircularProgressProps> = (
  args
) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgress value={progress} {...args} />;
};

export const CircularDeterminateGrowing =
  TemplateCircularDeterminateGrowing.bind({});
CircularDeterminateGrowing.args = { variant: 'determinate' };
