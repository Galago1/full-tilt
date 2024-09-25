import type { ComponentStory, ComponentMeta } from '@storybook/react';

import type { PaperProps } from '@mui/material';
import { Box, Paper, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import BlockContainer from 'src/components/organisms/BlockContainer/BlockContainer';
import image from 'src/assets/images/blurbackground.png';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Foundation/Blurs',
  component: Typography
  // parameters: {
  //   docs: {
  //     page: null //'Icons'
  //   }
  // }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Typography>;

const BlurCard = ({ sx, title }: PaperProps) => {
  return (
    <Paper
      sx={{
        padding: 3,
        margin: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx
      }}
    >
      <Typography paragraph sx={{ mb: 0 }} variant="textSmRegular">
        {title}
      </Typography>
    </Paper>
  );
};

type iterator = [string, SxProps<Theme>];

const Template: ComponentStory<typeof Typography> = (args) => {
  const theme = useTheme();
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': { m: '8px !important' }
  } as const;

  const customBlurs: iterator[] = [
    ['sm light', theme.blurs.sm],
    ['md light', theme.blurs.md],
    ['lg light', theme.blurs.lg],
    ['xl light', theme.blurs.xl]
  ];

  return (
    <BlockContainer
      sx={style}
      title="Blurs"
      description="Blurs are used stylistically in modern UI design. However, just like shadows, they allow you to add depth and realism to designs by positioning elements on a z-axis."
    >
      <Box
        sx={{
          backgroundSize: 'cover',
          backgroundImage: `url(${image})`,
          flex: 1,
          borderRadius: 0
        }}
      >
        {customBlurs.map((shadow) => (
          <BlurCard key={shadow[0]} title={shadow[0]} sx={shadow[1]} />
        ))}
      </Box>
    </BlockContainer>
  );
};

export const Blurs = Template.bind({});
Blurs.args = {};
