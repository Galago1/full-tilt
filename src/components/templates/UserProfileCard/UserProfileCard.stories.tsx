import { Button } from '@mui/material';
import { ComponentStory } from '@storybook/react';
import { useState } from 'react';
import UserProfileCard from './UserProfileCard';
import image from 'src/assets/images/blurbackground.png';

const testData = {
  firstName: 'Breaking The ui with thisincrediblylongunbreakablewordexample',
  lastName: 'Hall',
  name: 'Breaking The ui with thisincrediblylongunbreakablewordexample',
  role: 'Lead Developer',
  group: 'Product Team',
  birthdate: 'November, 24',
  workAnniversary: 'January, 24',
  keyMetric: 'Move 8 points per day.',
  address: {
    city: 'Phoenix',
    state: 'AZ'
  },
  image: image,
  responsibility: `I'm a Product Design`,
  reportsTo: {
    email: 'bill@gates.com',
    name: 'Bill Gates',
    image: image
  },
  metric: 'Move 8 points per day.'
};

export default {
  title: 'Components/UserProfileCard',
  component: UserProfileCard
};

const Template: ComponentStory<typeof UserProfileCard> = (args) => {
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
        Open User Profile
      </Button>
      <UserProfileCard
        data={testData}
        isOpen={isOpen}
        onClose={handleClose}
        emailIconClick={() => console.log('emailIconClick')}
      />
    </>
  );
};

export const Default = Template.bind({});
