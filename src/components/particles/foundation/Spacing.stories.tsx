import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box, Grid, Typography } from '@mui/material';
import BlockContainer from 'src/components/organisms/BlockContainer/BlockContainer';

// 0.125 => 1
// 0.25 => 2
// 0.375 => 3
// 0.5 => 4
// 0.75 => 6
// 1 => 8
// 1.125 => 9
// 1.25 => 10
// 1.375 => 11
// 1.5 => 12
// 1.75 => 14
// 2 => 16
// 2.25 => 18
// 2.5 => 20
// 2.625 => 21
// 2.75 => 22
// 3 => 24
// 3.25 => 26
// 3.5 => 28
// 3.625 => 29

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Foundation/Spacing',
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
  list: {
    name: number | string;
    size: string;
    pixels: string;
    removeBackground?: boolean;
  }[];
}

const BorderCard = ({ list }: BorderCardProps) => {
  return (
    <Grid container flexDirection={'column'}>
      {list.map((listItem, idx) => {
        return (
          <Grid item xs={12} container spacing={2} key={`logo-comp-${idx}`}>
            <Grid item xs={3}>
              {listItem.name}
            </Grid>
            <Grid item xs={3}>
              {listItem.size}
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={
                  listItem.removeBackground
                    ? {}
                    : {
                        background: (theme) =>
                          `linear-gradient(${theme.palette.grey[200]} 0, ${theme.palette.grey[200]} 100%) no-repeat`,
                        backgroundSize: `${listItem.pixels} calc(100% - 0px)`
                      }
                }
              >
                {listItem.pixels}
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

const Template: ComponentStory<typeof Typography> = (args) => {
  const list = [
    { name: 1, size: '0.25rem', pixels: '4px' },
    { name: 2, size: '0.5rem', pixels: '8px' },
    { name: 3, size: '0.75rem', pixels: '12px' },
    { name: 4, size: '1rem', pixels: '16px' },
    { name: 5, size: '1.25rem', pixels: '20px' },
    { name: 6, size: '1.5rem', pixels: '24px' },
    { name: 8, size: '2rem', pixels: '32px' },
    { name: 10, size: '2.5rem', pixels: '40px' },
    { name: 12, size: '3rem', pixels: '48px' },
    { name: 16, size: '4rem', pixels: '64px' },
    { name: 20, size: '5rem', pixels: '80px' },
    { name: 24, size: '6rem', pixels: '96px' },
    { name: 32, size: '8rem', pixels: '128px' },
    { name: 40, size: '10rem', pixels: '160px' },
    { name: 48, size: '12rem', pixels: '192px' },
    { name: 56, size: '14rem', pixels: '224px' },
    { name: 64, size: '16rem', pixels: '256px' }
  ];

  return (
    <BlockContainer
      title="Spacing"
      description="Spacing allow you to separate content"
    >
      <BorderCard
        list={[
          {
            name: 'Name',
            size: 'Size (16px base)',
            pixels: 'Pixels',
            removeBackground: true
          }
        ]}
      />
      <BorderCard list={list} />
    </BlockContainer>
  );
};

export const Spacing = Template.bind({});
Spacing.args = {};
