import { Box, Grid } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { Field, Formik } from 'formik';
import { Button } from 'src/components/atoms';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  CheckboxInputBase,
  CheckboxList,
  DateInput,
  DatePickerInput,
  DateRangePickerInput,
  DollarInput,
  NumberInputBase,
  PasswordInput,
  SelectInput,
  TextAreaInput,
  TextInput,
  UploadAvatar,
  VerificationInput
} from 'src/components/molecules';
import AutocompleteInput from 'src/components/molecules/Inputs/Autocomplete/Autocomplete';
import { DataGrid } from 'src/components/organisms';
import { DataGridProps } from 'src/components/organisms/DataGrid/DataGrid';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { StripeKey } from 'src/constants/keys';
import yup from 'src/lib/yupLocal';

const ValidationSchema = yup.object().shape({
  textInput: yup.string().required('Required'),
  textAreaInput: yup.string().required('Required'),
  selectInput: yup.string().required('Required'),
  passwordInput: yup.string().required('Required'),
  dollarInput: yup.string().required('Required'),
  phoneInput: yup.string().required('Required'),
  numberInput: yup.number().required('Required'),
  verificationInput: yup.string().required('Required'),
  autocompleteInput: yup.string().required('Required'),
  cardCvcElementInput: yup.string().required('Required'),
  cardExpiryElementInput: yup.string().required('Required'),
  cardNumberElementInput: yup.string().required('Required'),
  checkboxInput: yup.boolean().required('Required'),
  checkboxListInput: yup.array().required('Required'),
  dateInput: yup.date().required('Required'),
  datePickerInput: yup.date().required('Required'),
  dateRangeInput: yup.object().shape({
    startDate: yup.date().required('Required'),
    endDate: yup.date().required('Required')
  })
});
const stripePromise = loadStripe(StripeKey);

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Forms/Mega Form',
  component: DataGrid
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DataGrid>;
const Template: Story<DataGridProps> = (args) => {
  return (
    <Elements stripe={stripePromise}>
      <Formik
        initialValues={{
          textInput: 'Text',
          textAreaInput: 'Main Text',
          selectInput: 'none',
          passwordInput: 'password',
          dollarInput: '100',
          phoneInput: '1234567890',
          attachmentInput: null,
          uploadAvatarInput: null,
          numberInput: 100,
          verificationInput: '1',
          autocompleteInput: '1',
          cardCvcElementInput: '',
          cardExpiryElementInput: '',
          cardNumberElementInput: '',
          checkboxInput: false,
          checkboxListInput: [],
          dateInput: new Date(),
          datePickerInput: new Date(),
          dateRangeInput: {
            startDate: new Date(),
            endDate: new Date()
          }
        }}
        onSubmit={(values, form) => {}}
        validateOnMount
        validationSchema={ValidationSchema}
      >
        {(formik) => {
          return (
            <Box sx={{ width: '100%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Button
                    type={'button'}
                    onClick={() => formik.submitForm()}
                    variant={'contained'}
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="textInput"
                    component={TextInput}
                    fullWidth
                    label={'Text'}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="textAreaInput"
                    component={TextAreaInput}
                    fullWidth
                    label={'Text Area'}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field name="selectInput">
                    {({ field }: any) => {
                      return (
                        <SelectInput
                          options={[{ value: 'one', label: { value: 'One' } }]}
                          label={'Select'}
                          fullWidth
                          value={'none'}
                          {...field}
                        />
                      );
                    }}
                  </Field>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="passwordInput"
                    component={PasswordInput}
                    label={'Password'}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="dollarInput"
                    component={DollarInput}
                    label={'Dollar'}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name={'phoneInput'}
                    component={TextInput}
                    label={'Phone'}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name={'numberInput'}
                    component={NumberInputBase}
                    label={'Number'}
                    value={formik.values.numberInput}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name={'autocompleteInput'}
                    component={AutocompleteInput}
                    options={[{ id: '1', label: 'One' }]}
                    label={'Autocomplete'}
                    clearOnBlur={true}
                    multiple={true}
                    isOptionEqualToValue={(
                      option: {
                        label: string;
                        id: string;
                      },
                      value: {
                        label: string;
                        id: string;
                      }
                    ) => {
                      return option.id === value.id;
                    }}
                    textInputProps={{
                      label: 'Autocomplete',
                      placeholder: 'Select Attendees',
                      fullWidth: true,
                      required: true,
                      sx: {
                        '& .MuiInputBase-root': {
                          py: 0.375
                        }
                      }
                    }}
                    fieldAttributes={{ name: 'autocompleteInput' }}
                    disablePortal
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6}>
                  <Field
                    name={'cardCvcElementInput'}
                    component={CardCvcElement}
                    label={'Card CVC'}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name={'cardExpiryElementInput'}
                    component={CardExpiryElement}
                    label={'Card Expiry'}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name={'cardNumberElementInput'}
                    component={CardNumberElement}
                    label={'Card Number'}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name={'dateInput'}
                    component={DateInput}
                    label={'Date'}
                    fullWidth
                  ></Field>
                </Grid>

                <Grid item xs={6}>
                  <Field
                    name={'datePickerInput'}
                    component={DatePickerInput}
                    label={'Date Picker'}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name={'dateRangeInput'}
                    component={DateRangePickerInput}
                    label={'Date Range'}
                    fullWidth
                    {...args}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name={'checkboxInput'}
                    component={CheckboxInputBase}
                    labelProps={{ label: 'Checkbox', labelPlacement: 'top' }}
                    value={formik.values.checkboxInput}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name={'checkboxListInput'}
                    component={CheckboxList}
                    labelProps={{
                      children: 'Type',
                      variant: 'textSmRegular',
                      sx: { mb: 0.75 }
                    }}
                    // TheField: FastField,

                    checkboxInputs={Array.from({ length: 10 }).map(
                      (_, index) => {
                        return {
                          checkbox: true,
                          labelProps: {
                            checkbox: true,
                            label: `Checkbox ${index}`
                          }
                        };
                      }
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name={'uploadAvatarInput'}
                    component={UploadAvatar}
                    label={'Upload Avatar'}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name={'verificationInput'}
                    component={VerificationInput}
                    label={'Mega Input'}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
          );
        }}
      </Formik>
    </Elements>
  );
};

export const Default = Template.bind({});
Default.args = {};
