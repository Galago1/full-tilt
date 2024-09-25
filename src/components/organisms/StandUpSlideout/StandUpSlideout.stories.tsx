import { Button } from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';
import { useState } from 'react';
import StandUpSlideout, { StandUpSlideoutProps } from './StandUpSlideout';

export default {
  title: 'Templates/StandUpSlideout',
  component: StandUpSlideout
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof StandUpSlideout>;

const Template: Story<StandUpSlideoutProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Open Stand Up Slideout
      </Button>
      <StandUpSlideout
        isOpen={isOpen}
        onClose={handleClose}
        onSubmit={() => {}}
        date={'04/20/2022'}
        // TODO: Add slots
        // slots={
        //  standUpSlideoutContentProps:{
        //   alignedOnTrackFieldAttributes,
        //   metGoalsFieldAttributes,
        //   haveBlockersFieldAttributes,
        //   plannedWorkFieldAttributes,
        //   haveQuestionsFieldAttributes,
        //   blockersFieldAttributes
        // }
        // }
      />
    </>
  );
};

export const Default = Template.bind({});
