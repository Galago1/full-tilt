import { Grid, Theme } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { Formik } from 'formik';
import { useState } from 'react';
import Divider from 'src/components/atoms/Divider/Divider';
import { CheckboxList } from 'src/components/molecules';
import { ChevronDownIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import type { AccordionProps } from './Accordion';
import Accordion from './Accordion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Forms/Accordion Form',
  component: Accordion
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<AccordionProps> = (args) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Accordion
      expanded={expanded}
      sx={{
        width: '100%',
        '&.Mui-expanded': {
          margin: (theme: Theme) => theme.spacing(0, 0)
        }
      }}
      accordionDetailsProps={{}}
      accordionDetailsChildren={<>Other stuff here</>}
      accordionSummaryProps={{
        sx: {
          '&.Mui-expanded': {
            minHeight: (theme: Theme) => theme.spacing(6)
          },
          '& .MuiAccordionSummary-content': {
            margin: (theme: Theme) => theme.spacing(3, 0)
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: (theme: Theme) =>
              expanded ? theme.spacing(3, 0, 0, 0) : theme.spacing(1.5, 0)
          }
        }
      }}
      accordionSummaryChildren={
        <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
          <>
            <CheckboxList
              {...{
                sx: { width: '100%' },
                labelProps: {
                  children: 'Same as Mailing',
                  variant: 'textSmRegular',
                  sx: { mb: 0.75 }
                },
                checkboxInputs: [
                  {
                    labelProps: {
                      label: 'Yes',
                      sx: {
                        border: (theme: Theme) =>
                          `1px solid ${theme.palette.grey[300]}`,
                        display: 'flex',
                        alignItems: 'center',
                        '& .MuiFormControlLabel-label': {
                          pb: 0
                        }
                      }
                    },
                    type: 'checkbox',
                    color: 'success',
                    checked: expanded,
                    onChange: (e: any) => {
                      setExpanded(!expanded);
                    }
                  }
                ]
              }}
            />
          </>
        </Formik>
      }
    />
  );
};

export const InitiallyClosed = Template.bind({});
InitiallyClosed.args = {};

const CheckboxTemplate: Story<AccordionProps> = (args) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Accordion
      expanded={expanded}
      showIcons={true}
      onChange={(e) => {
        setExpanded(!expanded);
      }}
      expandedIcon={
        <ChevronDownIcon
          sx={{ color: (theme: Theme) => theme.palette.grey[400] }}
        />
      }
      collapsedIcon={
        <ChevronDownIcon
          sx={{ color: (theme: Theme) => theme.palette.grey[400] }}
        />
        // Icons need to be the same, the expanded state flips the icon
      }
      sx={{
        width: '100%',
        '&.Mui-expanded': {
          margin: (theme: Theme) => theme.spacing(0, 0)
        }
      }}
      accordionDetailsProps={{
        sx: { backgroundColor: 'grey.200' }
      }}
      accordionDetailsChildren={
        <Formik initialValues={{ subname: '' }} onSubmit={() => {}}>
          <Grid container spacing={3} alignItems={'center'}>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <CheckboxList
                {...{
                  sx: { width: '100%' },
                  checkboxInputs: [
                    {
                      labelProps: {
                        label: 'Garage',
                        sx: {
                          display: 'flex',
                          alignItems: 'center',
                          '& .MuiFormControlLabel-label': {
                            pb: 0
                          }
                        }
                      },
                      type: 'checkbox',
                      color: 'success'
                    }
                  ]
                }}
              />
            </Grid>
          </Grid>
        </Formik>
      }
      accordionSummaryProps={{
        sx: {
          '&.Mui-expanded': {
            minHeight: (theme: Theme) => theme.spacing(6)
          },
          '& .MuiAccordionSummary-content': {
            margin: (theme: Theme) => theme.spacing(3, 0)
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: (theme: Theme) =>
              expanded ? theme.spacing(3, 0, 0, 0) : theme.spacing(1.5, 0)
          }
        }
      }}
      accordionSummaryChildren={
        <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
          <>
            <CheckboxList
              {...{
                sx: { width: '100%' },
                checkboxInputs: [
                  {
                    labelProps: {
                      label: 'Chi Delta Theta',
                      sx: {
                        // border: (theme: Theme) =>
                        //   `1px solid ${theme.palette.grey[300]}`,
                        display: 'flex',
                        alignItems: 'center',
                        '& .MuiFormControlLabel-label': {
                          pb: 0
                        }
                      }
                    },
                    type: 'checkbox',
                    color: 'success',
                    checked: expanded,
                    onChange: (e: any) => {
                      setExpanded(!expanded);
                    }
                  }
                ]
              }}
            />
          </>
        </Formik>
      }
    />
  );
};

export const CheckboxAccordion = CheckboxTemplate.bind({});
CheckboxAccordion.args = {};
