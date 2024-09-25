import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box, Paper, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import BlockContainer from 'src/components/organisms/BlockContainer/BlockContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Foundation/Typographies',
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

interface TypeRowProps {
  titles: string[];
  fontWeights: any[];
  variant: any;
  sx?: SxProps<Theme>;
}
const TypeRow = ({ sx, titles, fontWeights, variant }: TypeRowProps) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...sx
      }}
    >
      {titles.map((title: string, index: number) => (
        <Box key={`type-row-idx-${index}`} sx={{ p: 3 }}>
          <Typography variant={`${variant}${fontWeights[index]}` as any}>
            {title}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};

const Template: ComponentStory<typeof Typography> = (args) => {
  const style = {} as const;
  const fontWeights = ['Regular', 'Medium', 'Semibold', 'Bold'];

  const textVariants = [
    [
      'display2xl',
      [
        'Display 2xl Regular',
        'Display 2xl Medium',
        'Display 2xl Semibold',
        'Display 2xl Bold'
      ]
    ],
    [
      'displayXl',
      [
        'Display xl Regular',
        'Display xl Medium',
        'Display xl Semibold',
        'Display xl Bold'
      ]
    ],
    [
      'displayLg',
      [
        'Display lg Regular',
        'Display lg Medium',
        'Display lg Semibold',
        'Display lg Bold'
      ]
    ],
    [
      'displayMd',
      [
        'Display md Regular',
        'Display md Medium',
        'Display md Semibold',
        'Display md Bold'
      ]
    ],
    [
      'displaySm',
      [
        'Display sm Regular',
        'Display sm Medium',
        'Display sm Semibold',
        'Display sm Bold'
      ]
    ],
    [
      'displayXs',
      [
        'Display xs Regular',
        'Display xs Medium',
        'Display xs Semibold',
        'Display xs Bold'
      ]
    ],
    [
      'textXl',
      ['Text xl Regular', 'Text xl Medium', 'Text xl Semibold', 'Text xl Bold']
    ],
    [
      'textLg',
      ['Text lg Regular', 'Text lg Medium', 'Text lg Semibold', 'Text lg Bold']
    ],
    [
      'textMd',
      ['Text md Regular', 'Text md Medium', 'Text md Semibold', 'Text md Bold']
    ],
    [
      'textSm',
      ['Text sm Regular', 'Text sm Medium', 'Text sm Semibold', 'Text sm Bold']
    ],
    [
      'textXs',
      ['Text xs Regular', 'Text xs Medium', 'Text xs Semibold', 'Text xs Bold']
    ]
  ] as const;

  return (
    <BlockContainer sx={style} title="Typography" description="">
      <Typography>Inter</Typography>
      <Typography>ABCDEFGHIJKLOMNPQRSTUVWXYZ</Typography>
      <Typography>abcdefghijklomnpqrstuvwxyz</Typography>
      <Typography sx={{ mb: 3 }}>1234567890 !@#$%^&*()</Typography>
      {textVariants.map((type, index) => (
        <TypeRow
          key={`${type[0]}-${index}`}
          variant={type[0]}
          titles={type[1] as any}
          fontWeights={fontWeights}
        />
      ))}
    </BlockContainer>
  );
};

export const Typographies = Template.bind({});
Typographies.args = {};
