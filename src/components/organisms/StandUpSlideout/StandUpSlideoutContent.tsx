import { Grid, useTheme } from '@mui/material';
import { Field, FieldAttributes, FormikProps } from 'formik';
import { Divider } from 'src/components/atoms';
import Button from 'src/components/atoms/Button';
import CircularProgress from 'src/components/atoms/CircularProgress/CircularProgress';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { StandUpSlideoutFormikProps } from './StandUpSlideout';

interface SelectShowTextAreaProps {
  showTextArea: boolean;
  haveBlockersFieldAttributes: FieldAttributes<any>;
  blockersFieldAttributes: FieldAttributes<any>;
}
const SelectShowTextArea = ({
  showTextArea,
  haveBlockersFieldAttributes,
  blockersFieldAttributes
}: SelectShowTextAreaProps) => {
  return (
    <Grid container spacing={2} flexDirection={'column'}>
      <Grid item flex={1}>
        <Grid container spacing={2} alignItems={'center'}>
          <Grid item display={'flex'} flex={1}>
            <Field {...haveBlockersFieldAttributes} />
          </Grid>
        </Grid>
      </Grid>
      {showTextArea && (
        <Grid item>
          <Field {...blockersFieldAttributes} />
        </Grid>
      )}
    </Grid>
  );
};

interface SubmitButtonsProps {
  formik: FormikProps<StandUpSlideoutFormikProps>;
  onCancel: () => void;
  isLoading: boolean;
}

const SubmitButtons = ({ isLoading, formik, onCancel }: SubmitButtonsProps) => {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
        <Button
          variant="outlined"
          color={'secondary'}
          sx={{
            width: '100%',
            borderRadius: theme.borderRadius.md
          }}
          disabled={isLoading || !formik?.isSubmitting}
          onClick={onCancel}
        >
          Cancel
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Button
          variant="contained"
          sx={{
            width: '100%',
            borderRadius: theme.borderRadius.md,
            '&': { width: '100%' }
          }}
          endIcon={isLoading && <CircularProgress color="inherit" size={20} />}
          label={isLoading ? '' : 'Update'}
          disabled={isLoading || !formik?.isValid || !formik?.dirty}
          onClick={formik?.submitForm}
        />
      </Grid>
    </Grid>
  );
};

export interface StandUpSlideoutContentProps {
  formik?: FormikProps<StandUpSlideoutFormikProps>;
  onCancel?: () => void;
  isLoading?: boolean;
  slots?: {
    alignedOnTrackFieldAttributes: FieldAttributes<any>;
    metGoalsFieldAttributes: FieldAttributes<any>;
    haveBlockersFieldAttributes: FieldAttributes<any>;
    plannedWorkFieldAttributes: FieldAttributes<any>;
    haveQuestionsFieldAttributes: FieldAttributes<any>;
    blockersFieldAttributes: FieldAttributes<any>;
  };
}

const StandUpSlideoutContent = ({
  formik,
  onCancel,
  isLoading,
  slots
}: StandUpSlideoutContentProps) => {
  const {
    alignedOnTrackFieldAttributes,
    metGoalsFieldAttributes,
    haveBlockersFieldAttributes,
    plannedWorkFieldAttributes,
    haveQuestionsFieldAttributes,
    blockersFieldAttributes
  } = slots || {};
  const haveBlockers = formik?.values.haveBlockers;

  return (
    <Grid display="flex" flexDirection="column" height="100%">
      <Grid flexGrow={1}>
        <Divider sx={{ marginBottom: responsiveSpacing }} />
        <Grid display="flex" justifyContent="space-between" alignItems="center">
          <Grid display="flex" alignItems="center" flex={1}>
            <Field {...metGoalsFieldAttributes} />
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: 2, marginBottom: responsiveSpacing }} />
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Grid item display="flex" alignItems="center" flex={1}>
            <Field {...alignedOnTrackFieldAttributes} />
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: 2, marginBottom: responsiveSpacing }} />
        <Field {...plannedWorkFieldAttributes} />
        <Grid
          marginTop={responsiveSpacing}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <SelectShowTextArea
            showTextArea={haveBlockers?.toString() === '1'}
            haveBlockersFieldAttributes={haveBlockersFieldAttributes}
            blockersFieldAttributes={blockersFieldAttributes}
          />
        </Grid>
        <Divider sx={{ marginTop: 2, marginBottom: responsiveSpacing }} />
        <Grid
          marginTop={responsiveSpacing}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid display="flex" alignItems="center" flex={1}>
            <Field {...haveQuestionsFieldAttributes} />
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: 2, marginBottom: responsiveSpacing }} />
      </Grid>
      <Grid display="flex" gap={1.5}>
        <SubmitButtons
          formik={formik!}
          onCancel={onCancel!}
          isLoading={isLoading!}
        />
      </Grid>
    </Grid>
  );
};

export default StandUpSlideoutContent;
