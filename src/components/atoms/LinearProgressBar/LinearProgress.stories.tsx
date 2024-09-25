import type { ComponentMeta, Story } from '@storybook/react';
import { useEffect, useRef, useState } from 'react';
import type { LinearProgressProps } from './LinearProgressBar';
import LinearProgressBar from './LinearProgressBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/LinearProgressBar',
  component: LinearProgressBar
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof LinearProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LinearProgressProps> = (args) => (
  <LinearProgressBar {...args} />
);

export const LinearIndeterminate = Template.bind({});
LinearIndeterminate.args = {
  color: 'primary',
  variant: 'indeterminate'
};

const TemplateLinearDeterminate: Story<LinearProgressProps> = (args) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <LinearProgressBar value={progress} {...args} />;
};

export const LinearDeterminate = TemplateLinearDeterminate.bind({});
LinearDeterminate.args = {
  color: 'primary',
  variant: 'determinate'
};

const TemplateLinearBuffer: Story<LinearProgressProps> = (args) => {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const progressRef = useRef(() => {});

  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <LinearProgressBar value={progress} valueBuffer={buffer} {...args} />;
};

export const LinearBuffers = TemplateLinearBuffer.bind({});
LinearBuffers.args = {
  color: 'primary',
  variant: 'buffer'
};

export const LinearQuery = Template.bind({});
LinearQuery.args = {
  color: 'primary',
  variant: 'query'
};
