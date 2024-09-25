import { Typography } from '@mui/material';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import Drawer from 'src/components/organisms/Drawer/Drawer';
import StandUpSlideoutContent, {
  StandUpSlideoutContentProps
} from './StandUpSlideoutContent';

const DateTitle = ({ date }: { date: string }) => {
  return (
    <Typography variant="textMdSemibold" marginBottom={6 / 8}>
      Edit Daily Standup ({date})
    </Typography>
  );
};

export interface StandUpSlideoutFormikProps {
  id?: string;
  metGoals: string;
  alignedOnTrack: string;
  haveBlockers: string;
  plannedWork: string;
  haveQuestions: string;
  blockers?: string;
}

const defaultValues: StandUpSlideoutFormikProps = {
  id: '',
  metGoals: 'none',
  alignedOnTrack: 'none',
  haveBlockers: 'none',
  plannedWork: '',
  haveQuestions: 'none',
  blockers: ''
};

export interface StandUpSlideoutProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  initialValues?: StandUpSlideoutFormikProps;
  onSubmit: (
    values: StandUpSlideoutFormikProps,
    formik: FormikHelpers<StandUpSlideoutFormikProps>
  ) => void;
  date: string;
  slots?: {
    formikProps?: FormikProps<StandUpSlideoutFormikProps>;
    standUpSlideoutContentProps?: StandUpSlideoutContentProps;
  };
}

const StandUpSlideout = ({
  isOpen,
  onClose,
  initialValues = defaultValues,
  onSubmit,
  isLoading,
  date,
  slots
}: StandUpSlideoutProps) => {
  const { formikProps, standUpSlideoutContentProps } = slots || {};
  return (
    <Drawer
      anchor="right"
      sx={{
        padding: 0,
        '& .MuiCardContent-root': {
          minWidth: { xs: '100%', sm: '100%', md: 643 }
        }
      }}
      showActions={false}
      onClose={onClose}
      disableScrollLock={true}
      open={isOpen}
      slots={{
        drawerHeaderProps: {
          slots: {
            avatarAndTextProps: {
              title: <DateTitle date={date} />,
              subtitle: 'Results visible to everyone'
            }
          }
        }
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        {...formikProps}
      >
        {(formik) => {
          return (
            <StandUpSlideoutContent
              formik={formik}
              onCancel={onClose}
              isLoading={isLoading!}
              {...standUpSlideoutContentProps}
            />
          );
        }}
      </Formik>
    </Drawer>
  );
};

export default StandUpSlideout;
