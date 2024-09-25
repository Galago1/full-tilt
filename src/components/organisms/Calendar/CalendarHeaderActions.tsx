import { Grid } from '@mui/material';
import { Field, FieldAttributes, Form, Formik, FormikConfig } from 'formik';
import { ButtonGroup } from 'src/components/molecules';
import { ButtonGroupProps } from 'src/components/molecules/ButtonGroup/ButtonGroup';
import { useCalendarHeaderActions } from './hooks';
import { CalendarView } from './types';

export interface CalendarHeaderActionsProps {
  setView?: (view: CalendarView) => void;
  onlyUseAny?: boolean;
  anyComp?: React.ReactNode;
  initialView?: CalendarView;
  slots: {
    buttonGroupProps?: ButtonGroupProps;
    fieldAttributes?: FieldAttributes<any>;
    formikConfig?: FormikConfig<any>;
  };
}

const CalendarHeaderActions = ({
  setView,
  slots,
  onlyUseAny,
  anyComp,
  initialView
}: CalendarHeaderActionsProps) => {
  const { buttonGroupProps, fieldAttributes, formikConfig } = slots || {};

  const { finalButtonGroupProps, finalFieldAttributes, finalFormikConfig } =
    useCalendarHeaderActions(
      setView!,
      buttonGroupProps,
      fieldAttributes,
      formikConfig,
      initialView
    );

  return (
    <Grid
      container
      justifyContent={{ xs: 'flex-start', sm: 'flex-start', md: 'flex-end' }}
      flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}
      gap={2}
    >
      {!onlyUseAny && finalButtonGroupProps && (
        <Grid item>
          <ButtonGroup {...finalButtonGroupProps} />
        </Grid>
      )}
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
