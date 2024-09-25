import { Form, Formik, FormikConfig } from 'formik';
import Modal, { ModalProps } from '../Modal/Modal';
import isSubmitDisabled from 'src/utils/form/isSubmitDisabled';
import { Children, cloneElement, isValidElement } from 'react';

interface FormOrFragmentProps {
  includeForm: boolean;
  children: React.ReactNode;
  formik: any;
}
const FormOrFragment = ({
  children,
  includeForm,
  formik
}: FormOrFragmentProps) => {
  const kids = Children.map(children, (child) => {
    return child ? (
      isValidElement(child) ? (
        cloneElement(child, { formik } as any)
      ) : (
        child
      )
    ) : (
      <></>
    );
  });
  if (includeForm) return <Form>{kids}</Form>;
  return <>{kids}</>;
};

export interface FormikModalProps extends Omit<ModalProps, 'children'> {
  children: React.ReactNode;
  /**
   * Option to include the formik form
   */
  includeForm?: boolean;
  /**
   * The formik props
   */
  formikProps?: FormikConfig<any>;
}
const FormikModal = ({
  children,
  formikProps,
  includeForm,
  onClose,
  ...props
}: FormikModalProps) => {
  return (
    <Formik {...formikProps!}>
      {(formik) => (
        <Modal
          {...props!}
          onClose={onClose}
          slots={{
            ...props.slots,
            modalActionsProps: {
              slots: {
                actionsProps: {
                  buttons: [
                    {
                      color: 'secondary',
                      variant: 'outlined',
                      label: 'Cancel',
                      fullWidth: true,
                      itemprops: {
                        xs: 12,
                        sm: 12,
                        md: 6,
                        order: { xs: 2, sm: 2, md: 1 }
                      },
                      onClick: onClose
                    },
                    {
                      color: 'primary',
                      variant: 'contained',
                      label: 'Save',
                      fullWidth: true,
                      disabled: isSubmitDisabled(formik),
                      itemprops: {
                        xs: 12,
                        sm: 12,
                        md: 6,
                        order: { xs: 1, sm: 1, md: 1 }
                      },
                      onClick: formik.submitForm
                    }
                  ]
                }
              }
            }
          }}
        >
          <FormOrFragment includeForm={includeForm!} formik={formik}>
            {children}
          </FormOrFragment>
        </Modal>
      )}
    </Formik>
  );
};
export default FormikModal;
