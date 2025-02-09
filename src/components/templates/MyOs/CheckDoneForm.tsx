import { Grid, IconButton, Theme, useTheme } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import { useMemo, useState } from 'react';
import { CheckIcon } from 'src/components/particles/theme/icons/General/check';
import { PlusIcon } from 'src/components/particles/theme/icons/General/plus';

const determineCheckedSxProps = (theme: Theme, isTransitioningRow: boolean) => {
  const baseSx = {
    border: theme.border.cyan300,
    backgroundColor: 'cyan.100',
    '&:hover': {
      border: theme.border.grey300,
      backgroundColor: 'grey.100'
    },
    '&.Mui-disabled': {
      backgroundColor: 'cyan.200'
    }
  };
  if (isTransitioningRow) {
    return {
      border: theme.border.grey300,
      backgroundColor: 'grey.100',
      '&:hover': {
        backgroundColor: 'grey.100'
      },
      '&.Mui-disabled': {
        backgroundColor: 'grey.100'
      }
    };
  }
  return baseSx;
};

const determineUncheckedSxProps = (
  theme: Theme,
  isTransitioningRow: boolean
) => {
  const baseSx = {
    border: theme.border.grey300,
    backgroundColor: 'grey.100',
    '&:hover': {
      color: 'cyan.500'
    },
    '&.Mui-disabled': {
      backgroundColor: 'grey.100'
    }
  };
  if (isTransitioningRow) {
    return {
      color: 'cyan.500',
      border: theme.border.cyan300,
      backgroundColor: 'cyan.100',
      '&.Mui-disabled': {
        backgroundColor: 'cyan.100'
      }
    };
  }
  return baseSx;
};

const iconStyles = {
  width: 16,
  height: 16
};

interface CheckedContentProps {
  isHovered: boolean;
  isTransitioningRow: boolean;
}

const CheckedContent = ({
  isHovered,
  isTransitioningRow
}: CheckedContentProps) =>
  isHovered || isTransitioningRow ? (
    <PlusIcon
      strokeWidth={2.5}
      sx={{
        ...iconStyles,
        color: 'grey.500'
      }}
    />
  ) : (
    <CheckIcon
      strokeWidth={2.5}
      sx={{
        ...iconStyles,
        color: 'cyan.500'
      }}
    />
  );

interface UncheckedContentProps {
  isHovered: boolean;
  isTransitioningRow: boolean;
}

const UncheckedContent = ({
  isHovered,
  isTransitioningRow
}: UncheckedContentProps) => {
  if (isHovered || isTransitioningRow) {
    return (
      <CheckIcon
        strokeWidth={2.5}
        sx={{
          ...iconStyles,
          color: 'grey.500'
        }}
      />
    );
  }
  return <></>;
};

interface DetermineContentProps {
  isChecked: boolean;
  isHovered: boolean;
  isTransitioningRow: boolean;
}

const DetermineContent = ({
  isChecked,
  isHovered,
  isTransitioningRow
}: DetermineContentProps) => {
  if (isChecked) {
    return (
      <CheckedContent
        isTransitioningRow={isTransitioningRow}
        isHovered={isHovered}
      />
    );
  }

  return (
    <UncheckedContent
      isHovered={isHovered}
      isTransitioningRow={isTransitioningRow}
    />
  );
};

export interface CheckDoneFormProps {
  id?: string;
  isTransitioning?: boolean;
  handleSubmit?: (
    values: { id: string; done: boolean },
    formik: FormikHelpers<{ id: string; done: boolean }>
  ) => Promise<void>;
  isCheckedFn?: (id: string) => boolean;
  isTransitioningRowFn?: (id: string) => boolean;
}
const CheckDoneForm = ({
  id,
  isTransitioning,
  handleSubmit,
  isCheckedFn,
  isTransitioningRowFn
}: CheckDoneFormProps) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const isChecked = useMemo(() => isCheckedFn?.(id!), [id, isCheckedFn]);
  const isTransitioningRow = useMemo(
    () => isTransitioningRowFn?.(id!) ?? false,
    [id, isTransitioningRowFn]
  );
  // const hoveredRowId = useMemo(
  //   () => hoveredRowIdFn?.(id!) ?? null,
  //   [id, hoveredRowIdFn]
  // );

  const sxProps = useMemo(() => {
    return isChecked
      ? determineCheckedSxProps(theme, isTransitioningRow)
      : determineUncheckedSxProps(theme, isTransitioningRow);
  }, [isChecked, theme, isTransitioningRow]);
  return (
    <Formik
      initialValues={{
        id: id!,
        done: isChecked!
      }}
      onSubmit={(values, formik) => {
        handleSubmit?.({ ...values, done: !values.done }, formik);
      }}
      enableReinitialize
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Grid sx={{ overflow: 'visible', padding: 0.5 }}>
            <IconButton
              type="button"
              size="medium"
              disabled={formik.isSubmitting || isTransitioning}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              sx={{
                width: 32,
                height: 32,
                overflow: 'visible',
                zIndex: 1,
                '& .MuiTouchRipple-root': {
                  width: 48,
                  height: 48,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  '& .MuiTouchRipple-ripple': {
                    animation: 'none !important',
                    transformOrigin: 'center'
                  },
                  '& .MuiTouchRipple-child': {
                    borderRadius: '50%'
                  }
                },

                ...sxProps
              }}
              onClick={(event) => {
                event.stopPropagation();
                formik.handleSubmit();
              }}
            >
              <DetermineContent
                isChecked={isChecked!}
                isHovered={isHovered}
                isTransitioningRow={isTransitioningRow}
              />
            </IconButton>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default CheckDoneForm;
