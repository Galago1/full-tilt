import { Grid } from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';
import Button from 'src/components/atoms/Button/Button';
import useConfetti from 'src/hooks/useConfetti';
import ConfettiProvider from 'src/providers/ConfettiProvider/ConfettiProvider';
import { useWindowSize } from 'usehooks-ts';
import ThemeProvider from '../../particles/theme';
import Confetti, { ConfettiProps } from './Confetti';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Confetti',
  component: Confetti
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Confetti>;

const ConfettiControls = () => {
  const { showConfetti, hideConfetti } = useConfetti();
  const window = useWindowSize();

  const handleStartConfetti = () => {
    showConfetti({
      width: window.width,
      height: window.height,
      visible: true,
      duration: undefined // Set to undefined for continuous confetti
    });
  };

  const handleStopConfetti = () => {
    hideConfetti();
  };

  return (
    <Grid container spacing={2} sx={{ marginBottom: 2 }}>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleStartConfetti}
        >
          Start Confetti
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleStopConfetti}
        >
          Stop Confetti
        </Button>
      </Grid>
    </Grid>
  );
};

const Template: Story<ConfettiProps> = (args) => {
  const window = useWindowSize();
  return (
    <ThemeProvider isDarkMode={false}>
      <ConfettiProvider
        init={{
          duration: undefined,
          width: window.width,
          height: window.height,
          visible: false // Changed to false so it doesn't start automatically
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <ConfettiControls />
          </Grid>
          <Grid item>
            <Confetti />
          </Grid>
        </Grid>
      </ConfettiProvider>
    </ThemeProvider>
  );
};

export const Success = Template.bind({});
Success.args = { text: 'Test Success', type: 'primary' };
