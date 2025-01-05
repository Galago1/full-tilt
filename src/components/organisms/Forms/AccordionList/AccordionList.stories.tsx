import { Grid, Theme } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { FastField, Formik } from 'formik';
import { useState } from 'react';
import { CheckboxList } from 'src/components/molecules';
import { ChevronDownIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import type { AccordionListProps } from './AccordionList';
import AccordionList from './AccordionList';
import Accordion from '../../Accordion/Accordion';
import { Divider } from 'src/components/atoms';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Forms/Accordion List Form',
  component: AccordionList
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof AccordionList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<AccordionListProps> = (args) => {
  const [expanded, setExpanded] = useState(false);

  const accordionList = [
    {
      expanded,
      showIcons: true,
      onChange: (e: any) => {
        setExpanded(!expanded);
      },
      expandedIcon: (
        <>
          <ChevronDownIcon
            sx={{ color: (theme: Theme) => theme.palette.grey[400] }}
          />
        </>
      ),
      collapsedIcon: (
        <>
          <ChevronDownIcon
            sx={{ color: (theme: Theme) => theme.palette.grey[400] }}
          />
        </>
      ),
      // Icons need to be the same, the expanded state flips the icon
      sx: {
        width: '100%',
        '&.Mui-expanded': {
          margin: (theme: Theme) => theme.spacing(0, 0)
        }
      },
      accordionDetailsProps: {
        sx: { backgroundColor: 'grey.200' }
      },
      accordionDetailsChildren: (
        <>
          <Formik initialValues={{ subname: '' }} onSubmit={() => {}}>
            <Grid container spacing={3} alignItems={'center'}>
              <Grid item>
                <Divider />
              </Grid>
              <Grid item>
                <CheckboxList
                  TheField={FastField}
                  {...{
                    sx: { width: '100%' },
                    checkboxInputs: Array.from({ length: 1001 }).map(
                      (_, index) => {
                        return {
                          type: 'checkbox',
                          labelProps: {
                            label: `Garage ${index}`,
                            sx: {
                              display: 'flex',
                              alignItems: 'center',
                              '& .MuiFormControlLabel-label': {
                                pb: 0
                              }
                            }
                          },
                          color: 'success'
                        };
                      }
                    )
                  }}
                />
              </Grid>
            </Grid>
          </Formik>
        </>
      ),
      accordionSummaryProps: {
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
      },
      accordionSummaryChildren: (
        <>
          <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
            <>
              <CheckboxList
                TheField={FastField}
                {...{
                  sx: { width: '100%' },
                  checkboxInputs: [
                    {
                      type: 'checkbox',
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
        </>
      )
    }
  ];
  return (
    <AccordionList {...args}>
      <>
        {accordionList.map((accordion, index) => {
          return (
            <Accordion {...accordion} key={`accordion-list-index[${index}]`} />
          );
        })}
      </>
    </AccordionList>
  );
};

export const InitiallyClosed = Template.bind({});
InitiallyClosed.args = {
  sx: {
    border: (theme: Theme) => `1px solid ${theme.palette.grey[600]}`
  },
  gridSx: {
    backgroundColor: 'grey.50',
    p: 2,
    borderBottom: (theme: Theme) => `1px solid ${theme.palette.grey[600]}`
  },
  searchListProps: {
    buttonProps: {
      variant: 'text',
      label: 'Reset'
    }
  }
};
