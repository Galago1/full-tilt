import { Grid, IconButton } from '@mui/material';
import ButtonList from 'src/components/molecules/ButtonList/ButtonList';
import EmptyState, {
  EmptyStateProps
} from 'src/components/molecules/EmptyState/EmptyState';
import TextInput from 'src/components/molecules/Inputs/TextInput/TextInput';
import {
  CheckIcon,
  CopyIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import type { FormikProps } from 'formik';
import { Formik, Form, Field } from 'formik';
// import shareLink from 'src/utils/collections/shareLink';
import writeToClipboard from 'src/utils/writeToClipboard';

export interface ShareFormProps {
  shareLink: string;
  /**
   * Handle cancel
   */
  onCancel?: () => void;
  /**
   * Handle submit
   */
  onSubmit?: () => void;
  /**
   * Empty state props
   */
  emptyStateProps?: EmptyStateProps;
}
const ShareForm = ({
  shareLink,
  onSubmit,
  onCancel,
  emptyStateProps = {}
}: ShareFormProps) => {
  return (
    <>
      <EmptyState
        alignItems="center"
        featuredIconProps={{
          children: <CheckIcon />,
          dual: true,
          color: 'primary',
          sx: { textAlign: 'center' }
        }}
        avatarAndTextProps={{
          title: 'Collection published!',
          titleTypography: {
            variant: 'textLgSemibold',
            textAlign: 'center'
          },
          subtitle:
            "You've created a new collection! Share the link with potential buyers.",
          subtitleTypography: { variant: 'textSmRegular', textAlign: 'center' }
        }}
        sx={{ mb: 3 }}
        {...emptyStateProps}
      />

      <Formik
        initialValues={{ share: '' }}
        onSubmit={(v) => {
          writeToClipboard(shareLink);
          onSubmit?.();
        }}
      >
        {({ handleSubmit }: FormikProps<{ share: '' }>) => {
          return (
            <Form style={{ display: 'flex', flex: 1 }}>
              <Grid container flexDirection={'column'} spacing={3}>
                <Grid item flexGrow={1}>
                  <Grid container spacing={1} flexWrap={'nowrap'}>
                    <Grid item flexGrow={1}>
                      <Field
                        component={TextInput}
                        name={'share'}
                        label="Share link"
                        fullWidth={true}
                        value={shareLink}
                        InputProps={{ readOnly: true }}
                      />
                    </Grid>
                    <Grid item alignSelf={'flex-end'}>
                      <IconButton
                        color="secondary"
                        onClick={() => handleSubmit()}
                      >
                        <CopyIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <ButtonList
                    itemSx={{ width: '100%' }}
                    buttons={[
                      {
                        type: 'button',
                        label: 'Done',
                        size: 'large',
                        variant: 'outlined',
                        color: 'secondary',
                        fullWidth: true,
                        itemprops: { xs: 12, sm: 6 },
                        onClick: onCancel
                      },
                      {
                        type: 'submit',
                        label: 'Copy',
                        size: 'large',
                        variant: 'contained',
                        fullWidth: true,
                        itemprops: { xs: 12, sm: 6 }
                      }
                    ]}
                  />
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
export default ShareForm;
