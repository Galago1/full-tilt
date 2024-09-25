import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Paper, Typography } from '@mui/material';
import BlockContainer from 'src/components/organisms/BlockContainer/BlockContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Foundation/Borders',
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

interface BorderCardProps {
  title: string;
  borderRadius: string;
}
const BorderCard = ({ title, borderRadius }: BorderCardProps) => {
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
        border: (theme) => `1px ${theme.palette.grey[200]} solid`,
        borderRadius,
        boxShadow: (theme) => theme.customShadows.lg
      }}
    >
      <Typography paragraph sx={{ mb: 0 }} variant="textSmRegular">
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

  return (
    <BlockContainer
      sx={style}
      title="Borders"
      description="Borders allow you to add nice corners to boxes"
    >
      <BorderCard title={'0'} borderRadius={'0'} />
    </BlockContainer>
  );
};

export const Borders = Template.bind({});
Borders.args = {};
