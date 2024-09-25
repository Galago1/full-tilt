import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box, Card, Stack, Typography, Theme } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BlockContainer from 'src/components/organisms/BlockContainer/BlockContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Foundation/Colors',
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
const OTHER_PALETTE = [
  'grey cool',
  'grey modern',
  'grey neutral',
  'grey iron',
  'grey true',
  'grey warm',
  'moss',
  'green light',
  'green',
  'teal',
  'cyan',
  'blue light',
  'blue',
  'blue dark',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'orange dark',
  'orange',
  'yellow'
];

const PALETTE = ['grey', 'primary', 'success', 'warning', 'error'] as const;
const VARIATIONS = [
  '25',
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900'
] as const;
const ALL_VARIATIONS = [
  '25',
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950'
] as const;

type ColorCardProps = {
  hexColor: string;
  variation: string;
};

const ColorCard = ({ hexColor, variation }: ColorCardProps) => {
  const theme = useTheme();
  return (
    <Card sx={{ p: 1 }}>
      <Box
        sx={{
          bgcolor: hexColor,
          p: 1,
          borderRadius: 0,
          border: `1px solid ${theme.palette.grey[500_12]}`
        }}
      >
        <Typography
          paragraph
          variant="textXlSemibold"
          sx={{
            textTransform: 'capitalize',
            mb: 0,
            color: theme.palette.getContrastText(hexColor)
          }}
        >
          {variation}
        </Typography>
        <Stack direction="row" alignItems="center" sx={{ mt: 1.5, mb: 1 }}>
          <Typography
            paragraph
            variant="textSmRegular"
            sx={{
              width: theme.spacing(7),
              mb: 0,
              color: theme.palette.getContrastText(hexColor)
            }}
          >
            Hex
          </Typography>
          <Typography
            paragraph
            variant="textSmRegular"
            sx={{
              mb: 0,
              color: theme.palette.getContrastText(hexColor)
            }}
          >
            {hexColor}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};

const Template: ComponentStory<typeof Typography> = (args) => {
  const theme = useTheme();
  return (
    <BlockContainer title="" description="">
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="displaySmRegular"
          sx={{ textTransform: 'capitalize', mb: 3 }}
        >
          {'Base'}
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(5, 1fr)'
            }
          }}
        >
          <ColorCard
            variation={'white'}
            hexColor={theme.palette.common.white}
          />
          <ColorCard
            variation={'black'}
            hexColor={theme.palette.common.black}
          />
          <ColorCard
            variation={'background'}
            hexColor={theme.palette.background.default}
          />
        </Box>
      </Box>
      {PALETTE.map((color) => (
        <Box key={color} sx={{ mb: 5 }}>
          <Typography
            variant="displaySmRegular"
            sx={{ textTransform: 'capitalize', mb: 3 }}
          >
            {color}
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateColumns: {
                xs: 'repeat(3, 1fr)',
                sm: 'repeat(4, 1fr)',
                md: 'repeat(5, 1fr)',
                lg: 'repeat(7, 1fr)'
              }
            }}
          >
            {ALL_VARIATIONS.map((variation) => (
              <ColorCard
                key={variation}
                variation={variation}
                hexColor={theme.palette[color][variation]}
              />
            ))}
          </Box>
        </Box>
      ))}
      {OTHER_PALETTE.map((color) => (
        <Box key={color} sx={{ mb: 5 }}>
          <Typography
            variant="displaySmRegular"
            sx={{ textTransform: 'capitalize', mb: 3 }}
          >
            {color}
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateColumns: {
                xs: 'repeat(3, 1fr)',
                sm: 'repeat(4, 1fr)',
                md: 'repeat(5, 1fr)',
                lg: 'repeat(7, 1fr)'
              }
            }}
          >
            {VARIATIONS.map((variation) => (
              <ColorCard
                key={variation}
                variation={variation}
                hexColor={
                  (OTHER_PALETTE_COLORS as any)[color.replace(/\s/g, '')][
                    variation
                  ]
                }
              />
            ))}
          </Box>
        </Box>
      ))}
    </BlockContainer>
  );
};

export const Colors = Template.bind({});
Colors.args = {};

const OTHER_PALETTE_COLORS = {
  grey_light: {
    '25': '#FCFCFD',
    '50': '#F9FAFB',
    '100': '#F2F4F7',
    '200': '#EAECF0',
    '300': '#D0D5DD',
    '400': '#98A2B3',
    '500': '#667085',
    '600': '#475467',
    '700': '#344054',
    '800': '#182230',
    '900': '#101828',
    '950': '#0C111D'
  },
  grey_dark: {
    '25': '#FAFAFA',
    '50': '#F5F5F6',
    '100': '#F0F1F1',
    '200': '#ECECED',
    '300': '#CECFD2',
    '400': '#94969C',
    '500': '#85888E',
    '600': '#61646C',
    '700': '#333741',
    '800': '#1F242F',
    '900': '#161B26',
    '950': '#0C111D'
  },
  greycool: {
    '25': '#FCFCFD',
    '50': '#F9F9FB',
    '100': '#EFF1F5',
    '200': '#DCDFEA',
    '300': '#B9C0D4',
    '400': '#7D89B0',
    '500': '#5D6B98',
    '600': '#4A5578',
    '700': '#404968',
    '800': '#30374F',
    '900': '#111322'
  },

  greymodern: {
    '25': '#FCFCFD',
    '50': '#F8FAFC',
    '100': '#EEF2F6',
    '200': '#E3E8EF',
    '300': '#CDD5DF',
    '400': '#9AA4B2',
    '500': '#697586',
    '600': '#4B5565',
    '700': '#364152',
    '800': '#202939',
    '900': '#121926'
  },

  greyneutral: {
    '25': '#FCFCFD',
    '50': '#F9FAFB',
    '100': '#F3F4F6',
    '200': '#E5E7EB',
    '300': '#D2D6DB',
    '400': '#9DA4AE',
    '500': '#6C737F',
    '600': '#4D5761',
    '700': '#384250',
    '800': '#1F2A37',
    '900': '#111927'
  },

  greyiron: {
    '25': '#FCFCFC',
    '50': '#FAFAFA',
    '100': '#F4F4F5',
    '200': '#E4E4E7',
    '300': '#D1D1D6',
    '400': '#A0A0AB',
    '500': '#70707B',
    '600': '#51525C',
    '700': '#3F3F46',
    '800': '#26272B',
    '900': '#18181B'
  },

  greytrue: {
    '25': '#FCFCFC',
    '50': '#FAFAFA',
    '100': '#F5F5F5',
    '200': '#E5E5E5',
    '300': '#D6D6D6',
    '400': '#A3A3A3',
    '500': '#737373',
    '600': '#525252',
    '700': '#424242',
    '800': '#292929',
    '900': '#141414'
  },

  greywarm: {
    '25': '#FDFDFC',
    '50': '#FAFAF9',
    '100': '#F5F5F4',
    '200': '#E7E5E4',
    '300': '#D7D3D0',
    '400': '#A9A29D',
    '500': '#79716B',
    '600': '#57534E',
    '700': '#44403C',
    '800': '#292524',
    '900': '#1C1917'
  },

  moss: {
    '25': '#FAFDF7',
    '50': '#F5FBEE',
    '100': '#E6F4D7',
    '200': '#CEEAB0',
    '300': '#ACDC79',
    '400': '#86CB3C',
    '500': '#669F2A',
    '600': '#4F7A21',
    '700': '#3F621A',
    '800': '#335015',
    '900': '#2B4212'
  },

  greenlight: {
    '25': '#FAFEF5',
    '50': '#F3FEE7',
    '100': '#E4FBCC',
    '200': '#D0F8AB',
    '300': '#A6EF67',
    '400': '#85E13A',
    '500': '#66C61C',
    '600': '#4CA30D',
    '700': '#3B7C0F',
    '800': '#326212',
    '900': '#2B5314'
  },

  green: {
    '25': '#F6FEF9',
    '50': '#EDFCF2',
    '100': '#D3F8DF',
    '200': '#AAF0C4',
    '300': '#73E2A3',
    '400': '#3CCB7F',
    '500': '#16B364',
    '600': '#099250',
    '700': '#087443',
    '800': '#095C37',
    '900': '#084C2E'
  },

  teal: {
    '25': '#F6FEFC',
    '50': '#F0FDF9',
    '100': '#CCFBEF',
    '200': '#99F6E0',
    '300': '#5FE9D0',
    '400': '#2ED3B7',
    '500': '#15B79E',
    '600': '#0E9384',
    '700': '#107569',
    '800': '#125D56',
    '900': '#134E48'
  },

  cyan: {
    '25': '#F5FEFF',
    '50': '#ECFDFF',
    '100': '#CFF9FE',
    '200': '#A5F0FC',
    '300': '#67E3F9',
    '400': '#22CCEE',
    '500': '#06AED4',
    '600': '#088AB2',
    '700': '#0E7090',
    '800': '#155B75',
    '900': '#164C63'
  },

  bluelight: {
    '25': '#F5FBFF',
    '50': '#F0F9FF',
    '100': '#E0F2FE',
    '200': '#B9E6FE',
    '300': '#7CD4FD',
    '400': '#36BFFA',
    '500': '#0BA5EC',
    '600': '#0086C9',
    '700': '#026AA2',
    '800': '#065986',
    '900': '#0B4A6F'
  },

  blue: {
    '25': '#F5FAFF',
    '50': '#EFF8FF',
    '100': '#D1E9FF',
    '200': '#B2DDFF',
    '300': '#84CAFF',
    '400': '#53B1FD',
    '500': '#2E90FA',
    '600': '#1570EF',
    '700': '#175CD3',
    '800': '#1849A9',
    '900': '#194185'
  },

  bluedark: {
    '25': '#F5F8FF',
    '50': '#EFF4FF',
    '100': '#D1E0FF',
    '200': '#B2CCFF',
    '300': '#84ADFF',
    '400': '#528BFF',
    '500': '#2970FF',
    '600': '#155EEF',
    '700': '#004EEB',
    '800': '#0040C1',
    '900': '#00359E'
  },

  indigo: {
    '25': '#F5F8FF',
    '50': '#EEF4FF',
    '100': '#E0EAFF',
    '200': '#C7D7FE',
    '300': '#A4BCFD',
    '400': '#8098F9',
    '500': '#6172F3',
    '600': '#444CE7',
    '700': '#3538CD',
    '800': '#2D31A6',
    '900': '#2D3282'
  },

  violet: {
    '25': '#FBFAFF',
    '50': '#F5F3FF',
    '100': '#ECE9FE',
    '200': '#DDD6FE',
    '300': '#C3B5FD',
    '400': '#A48AFB',
    '500': '#875BF7',
    '600': '#7839EE',
    '700': '#6927DA',
    '800': '#5720B7',
    '900': '#491C96'
  },

  purple: {
    '25': '#FAFAFF',
    '50': '#F4F3FF',
    '100': '#EBE9FE',
    '200': '#D9D6FE',
    '300': '#BDB4FE',
    '400': '#9B8AFB',
    '500': '#7A5AF8',
    '600': '#6938EF',
    '700': '#5925DC',
    '800': '#4A1FB8',
    '900': '#3E1C96'
  },

  fuchsia: {
    '25': '#FEFAFF',
    '50': '#FDF4FF',
    '100': '#FBE8FF',
    '200': '#F6D0FE',
    '300': '#EEAAFD',
    '400': '#E478FA',
    '500': '#D444F1',
    '600': '#BA24D5',
    '700': '#9F1AB1',
    '800': '#821890',
    '900': '#6F1877'
  },

  pink: {
    '25': '#FEF6FB',
    '50': '#FDF2FA',
    '100': '#FCE7F6',
    '200': '#FCCEEE',
    '300': '#FAA7E0',
    '400': '#F670C7',
    '500': '#EE46BC',
    '600': '#DD2590',
    '700': '#C11574',
    '800': '#9E165F',
    '900': '#851651'
  },

  rose: {
    '25': '#FFF5F6',
    '50': '#FFF1F3',
    '100': '#FFE4E8',
    '200': '#FECDD6',
    '300': '#FEA3B4',
    '400': '#FD6F8E',
    '500': '#F63D68',
    '600': '#E31B54',
    '700': '#C01048',
    '800': '#A11043',
    '900': '#89123E'
  },

  orangedark: {
    '25': '#FFF9F5',
    '50': '#FFF4ED',
    '100': '#FFE6D5',
    '200': '#FFD6AE',
    '300': '#FF9C66',
    '400': '#FF692E',
    '500': '#FF4405',
    '600': '#E62E05',
    '700': '#BC1B06',
    '800': '#97180C',
    '900': '#771A0D'
  },

  orange: {
    '25': '#FEFAF5',
    '50': '#FEF6EE',
    '100': '#FDEAD7',
    '200': '#F9DBAF',
    '300': '#F7B27A',
    '400': '#F38744',
    '500': '#EF6820',
    '600': '#E04F16',
    '700': '#B93815',
    '800': '#932F19',
    '900': '#772917'
  },

  yellow: {
    '25': '#FEFDF0',
    '50': '#FEFBE8',
    '100': '#FEF7C3',
    '200': '#FEEE95',
    '300': '#FDE272',
    '400': '#FAC515',
    '500': '#EAAA08',
    '600': '#CA8504',
    '700': '#A15C07',
    '800': '#854A0E',
    '900': '#713B12'
  }
};
