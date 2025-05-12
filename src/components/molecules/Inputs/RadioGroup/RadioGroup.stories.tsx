import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import type { ComponentMeta, Story } from '@storybook/react';
import { Field, Formik } from 'formik';
import RadioButton from 'src/components/atoms/RadioButton/RadioButton';
import { PlusIcon } from 'src/components/particles/theme/icons/General/plus';
import type { RadioGroupProps } from './RadioGroup';
import RadioGroup from './RadioGroup';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Radio Group',
  component: RadioGroup
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof RadioGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<RadioGroupProps> = (args) => {
  return (
    <Formik
      initialValues={{ name: args.defaultValue || '' }}
      onSubmit={(v) => {}}
    >
      <Field component={RadioGroup} {...args} name="name" />
    </Formik>
  );
};

export const OneOption = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OneOption.args = {
  radios: [
    {
      children: <RadioButton sx={{ padding: 0 }} value="name" />,
      title: 'Remember me',
      description: 'Save my login details for next time.'
    }
  ]
};
export const TwoOptions = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TwoOptions.args = {
  defaultValue: 'public',
  radios: [
    {
      children: <RadioButton sx={{ padding: 0 }} value="public" />,
      title: 'Publish collection and list on my store'
    },
    {
      children: <RadioButton sx={{ padding: 0 }} value="private" />,
      title: 'Keep private',
      description:
        'The collection will only be avaliable through private link.',
      sx: { mt: 1 }
    }
  ]
};

export const StyledCardOptions = Template.bind({});
StyledCardOptions.args = {
  defaultValue: 'diversity',
  radios: [
    {
      children: (
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            bgcolor: 'background.paper',
            borderRadius: 2,
            border: 1,
            borderColor: 'grey.200',
            '&:hover': {
              borderColor: 'primary.600',
              bgcolor: 'primary.50'
            }
          }}
        >
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              pb: 1
            }}
          >
            <IconButton
              sx={{
                bgcolor: 'grey.100',
                width: 40,
                height: 40,
                '&:hover': { bgcolor: 'grey.100' }
              }}
            >
              <PlusIcon sx={{ color: 'grey.500' }} />
            </IconButton>
            <RadioButton
              value="diversity"
              variant="purple"
              checkedIcon={
                <PlusIcon
                  sx={{
                    color: 'primary.600',
                    width: 24,
                    height: 24,
                    '& circle': {
                      strokeWidth: 1
                    }
                  }}
                />
              }
              icon={
                <PlusIcon
                  sx={{
                    color: 'grey.300',
                    width: 24,
                    height: 24,
                    '& circle': {
                      strokeWidth: 1
                    }
                  }}
                />
              }
              sx={{
                padding: 0,
                '&:hover': {
                  bgcolor: 'transparent'
                }
              }}
            />
          </Grid>
          <Grid sx={{ px: 2, pb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Diversity, Equity, Inclusion, and Belonging
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun...
            </Typography>
          </Grid>
        </Grid>
      ),
      sx: { mb: 2 }
    },
    {
      children: (
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            bgcolor: 'background.paper',
            borderRadius: 2,
            border: 1,
            borderColor: 'grey.200',
            '&:hover': {
              borderColor: 'primary.600',
              bgcolor: 'primary.50'
            }
          }}
        >
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              pb: 1
            }}
          >
            <IconButton
              sx={{
                bgcolor: 'grey.100',
                width: 40,
                height: 40,
                '&:hover': { bgcolor: 'grey.100' }
              }}
            >
              <PlusIcon sx={{ color: 'grey.500' }} />
            </IconButton>
            <RadioButton
              value="performance"
              variant="purple"
              checkedIcon={
                <PlusIcon
                  sx={{
                    color: 'primary.600',
                    width: 24,
                    height: 24,
                    '& circle': {
                      strokeWidth: 1
                    }
                  }}
                />
              }
              icon={
                <PlusIcon
                  sx={{
                    color: 'grey.300',
                    width: 24,
                    height: 24,
                    '& circle': {
                      strokeWidth: 1
                    }
                  }}
                />
              }
              sx={{
                padding: 0,
                '&:hover': {
                  bgcolor: 'transparent'
                }
              }}
            />
          </Grid>
          <Grid sx={{ px: 2, pb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Continuous Performance Feedback
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun...
            </Typography>
          </Grid>
        </Grid>
      ),
      sx: { mb: 2 }
    }
  ]
};
