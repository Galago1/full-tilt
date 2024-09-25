import type { ComponentMeta, ComponentStory } from '@storybook/react';

import type { PaperProps } from '@mui/material';
import { Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BlockContainer from 'src/components/organisms/BlockContainer/BlockContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Foundation/Shadows',
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

const ShadowCard = ({ sx, title }: PaperProps) => {
  return (
    <Paper
      sx={{
        padding: 3,
        margin: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: {
          xs: 'calc((100%/2) - 24px)',
          sm: 'calc((100%/4) - 24px)',
          md: 'calc((100%/6) - 24px)'
        },
        ...sx
      }}
    >
      <Typography paragraph variant="textSmRegular">
        {title}
      </Typography>
    </Paper>
  );
};

const Template: ComponentStory<typeof Typography> = (args) => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': { m: '8px !important' }
  } as const;

  const theme = useTheme();

  const customShadows = [
    ['xs', theme.customShadows.xs],
    ['sm', theme.customShadows.sm],
    ['md', theme.customShadows.md],
    ['lg', theme.customShadows.lg],
    ['xl', theme.customShadows.xl],
    ['2xl', theme.customShadows['2xl']],
    ['3xl', theme.customShadows['3xl']]
  ];

  return (
    <BlockContainer
      sx={style}
      title="Shadows"
      description="Shadows allow you to add depth and realism to designs by positioning elements on a z-axis."
    >
      {customShadows.map((shadow) => (
        <ShadowCard
          key={shadow[0]}
          title={shadow[0]}
          sx={{ boxShadow: shadow[1] }}
        />
      ))}
    </BlockContainer>
  );
};

export const Shadows = Template.bind({});
Shadows.args = {};
