import { Grid } from '@mui/material';
import { Field, FieldAttributes, Form, Formik, FormikConfig } from 'formik';
import { useCalendarHeaderActions } from './hooks';

export interface CalendarHeaderActionsProps {
  onlyUseAny?: boolean;
  anyComp?: React.ReactNode;
  slots: {
    fieldAttributes?: FieldAttributes<any>;
    formikConfig?: FormikConfig<any>;
  };
}

const CalendarHeaderActions = ({
  slots,
  onlyUseAny,
  anyComp
}: CalendarHeaderActionsProps) => {
  const { fieldAttributes, formikConfig } = slots || {};

  const { finalFieldAttributes, finalFormikConfig } = useCalendarHeaderActions(
    fieldAttributes,
    formikConfig
  );

  return (
    <Grid
      container
      justifyContent={{ xs: 'flex-start', sm: 'flex-start', md: 'flex-end' }}
      flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}
      gap={2}
    >
      {!onlyUseAny && finalFormikConfig && finalFieldAttributes && (
        <Grid item>
          <Formik {...(finalFormikConfig as FormikConfig<any>)}>
            <Form>
              <Field {...finalFieldAttributes} />
            </Form>
          </Formik>
        </Grid>
      )}
      {anyComp && <Grid item>{anyComp}</Grid>}
    </Grid>
  );
};

export default CalendarHeaderActions;
