import { Grid, useTheme } from '@mui/material';
import type { FieldAttributes, FormikHelpers, FormikProps } from 'formik';
import { Field, Form, Formik } from 'formik';
import CircularProgress from 'src/components/atoms/CircularProgress/CircularProgress';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import ButtonList from 'src/components/molecules/ButtonList/ButtonList';
import PhoneInput from 'src/components/molecules/Inputs/PhoneInput/PhoneInput';
import TextInput from 'src/components/molecules/Inputs/TextInput/TextInput';
import UploadAvatar, {
  UploadAvatarProps
} from 'src/components/molecules/Inputs/UploadAvatar/UploadAvatar';
import yup from 'src/lib/yupLocal';
import isSubmitDisabled from 'src/utils/form/isSubmitDisabled';

export interface UserInfoFormFormProps {
  fullName: string;
  phone: string;
  email: string;
  storeName: string;
  avatar: File | string;
}
export interface UserInfoFormProps {
  /**
   * Handle submit
   */
  onSubmit: (
    values: UserInfoFormFormProps,
    form: FormikHelpers<UserInfoFormFormProps>
  ) => void;
  /**
   * Avatar image
   */
  image?: string;
  /**
   * Form values
   */
  initialValues?: Partial<UserInfoFormFormProps>;
  /**
   * Form loading state
   */
  isLoading: boolean;
  /**
   * Upload avatar props
   */
  uploadAvatarProps?: UploadAvatarProps;
}

const UserInfoFormSchema = yup.object().shape({
  fullName: yup.string().required('Required'),
  phone: yup.string().required('Required').phone('Phone number is not valid'),
  email: yup.string().email('Invalid email').optional(),
  storeName: yup.string().optional()
});
const UserInfoForm = ({
  onSubmit,
  image,
  initialValues,
  uploadAvatarProps,
  isLoading,
  ...props
}: UserInfoFormProps) => {
  const theme = useTheme();
  return (
    <Grid container {...props}>
      <Grid item xs={12}>
        <AvatarAndText
          title={'My details'}
          titleTypography={{ variant: 'textLgSemibold' }}
          subtitle={'Update your personal and store information'}
          sx={{ mb: 3 }}
        />
        <Formik
          initialValues={{
            fullName: '',
            phone: ',',
            email: '',
            storeName: '',
            avatar: '',
            ...initialValues
          }}
          onSubmit={(values, form) => {
            onSubmit(values, form);
          }}
          validationSchema={UserInfoFormSchema}
          validateOnMount={true}
        >
          {(formProps: FormikProps<UserInfoFormFormProps>) => {
            return (
              <Form>
                <Grid container flexDirection={'row'} spacing={3}>
                  <Grid item xs={12}>
                    <Field name="avatar">
                      {({ field }: FieldAttributes<any>) => {
                        return (
                          <Grid container>
                            <Grid item xs={12} sm={12} md={6}>
                              <Grid container>
                                <Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={3}
                                  sx={{ textAlign: 'center' }}
                                >
                                  <UploadAvatar
                                    avatarProps={{
                                      sx: {
                                        width: 128,
                                        height: 128,
                                        ...theme.typography.h4
                                      },
                                      src: field.value
                                        ? URL.createObjectURL(field.value)
                                        : image,
                                      variant: 'circular'
                                    }}
                                    {...uploadAvatarProps}
                                    form={formProps}
                                    field={field}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        );
                      }}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextInput}
                      name="fullName"
                      label="Full Name"
                      placeholder="Enter your name"
                      fullWidth={true}
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={PhoneInput}
                      name="phone"
                      label="Phone Number"
                      placeholder="Mobile number"
                      fullWidth={true}
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextInput}
                      name="email"
                      label="Email Address"
                      placeholder="Enter your email"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextInput}
                      name="storeName"
                      label="Store Name"
                      placeholder="Enter your store name"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justifyContent={'flex-end'}>
                      <ButtonList
                        buttons={[
                          {
                            type: 'submit',

                            label: `Save changes`,
                            size: 'large',
                            variant: 'contained',
                            endIcon: (isLoading || formProps.isSubmitting) && (
                              <CircularProgress color="inherit" size={20} />
                            ),
                            disabled: isSubmitDisabled(formProps, {
                              allowPristine: true
                            })
                          }
                        ]}
                        sx={{ justifyContent: 'flex-end' }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Grid>
    </Grid>
  );
};
export default UserInfoForm;
