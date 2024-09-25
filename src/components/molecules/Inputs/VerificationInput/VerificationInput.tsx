import { FormControlLabel, SxProps, Theme } from '@mui/material';
import type { FieldAttributes, FormikProps } from 'formik';
import { Field } from 'formik';
import { ChangeEvent, FormEvent } from 'react';
import type { MegaInputBaseProps } from 'src/components/atoms/InputBase/MegaInputBase/MegaInputBase';
import MegaInputBase from 'src/components/atoms/InputBase/MegaInputBase/MegaInputBase';

export interface VerificationInputProps extends MegaInputBaseProps {
  labelSx: SxProps<Theme>;
  label?: string;
}

const findByName = (name: string) => {
  return document.querySelector(`input[name=${name}]`) as HTMLInputElement;
};
const focusOn = (name: string) => {
  const nextField = findByName(name);
  nextField?.focus();
};

const handleOnInput = (
  e: FormEvent<HTMLDivElement>,
  form: FormikProps<any>
) => {
  const val = (e.target as any).value.replace(/\D/g, '');
  if (val.length === 1) return;
  e.stopPropagation();
  e.preventDefault();
  handleOnPaseOnInput(val, form);
  form.validateForm();
};

const handlePaste = (
  e: React.ClipboardEvent<HTMLDivElement> | React.ClipboardEvent<Element>,
  form: FormikProps<any>
) => {
  const val = e.clipboardData.getData('Text').replace(/\D/g, '');
  e.stopPropagation();
  e.preventDefault();
  handleOnPaseOnInput(val, form);
};

const handleOnPaseOnInput = (value: string, form: FormikProps<any>) => {
  const maxLength = 1;
  value.split('').forEach((value: string, index: number) => {
    const name = `code${index + 1}`;
    const currentField = findByName(name);
    currentField.value = value;
    handleChangeWithNextField({ maxLength, value, name }, form);
  });
};
const handleChangeWithNextField = (
  {
    maxLength,
    value,
    name
  }: {
    maxLength: number;
    value: string;
    name: string;
  },
  // setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  form: FormikProps<any>
) => {
  if (!/[0-9]/.test(value)) return;

  form.setFieldValue(name, value, false);
  // TODO: Figure out how to remove this
  setTimeout(() => {
    handleFocus(value, maxLength, name);
  }, 1);
};
const handleChange = (
  event: ChangeEvent<HTMLInputElement>,
  // setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  form: FormikProps<any>
) => {
  const { maxLength, value, name } = event.target;
  if (value.length && !/[0-9]/.test(value)) return;

  handleFocus(value, maxLength, name);
  form.handleChange(event);
};

const handleFocus = (value: string, maxLength: number, name: string) => {
  const fieldIntIndex = +name.replace('code', '');

  if (value.length >= maxLength) {
    if (fieldIntIndex < 4) {
      focusOn(`code${fieldIntIndex + 1}`);
    }
  } else {
    if (fieldIntIndex > 1) {
      focusOn(`code${fieldIntIndex - 1}`);
    }
  }
};
const Inputs = ({ ...props }: MegaInputBaseProps) => {
  return (
    <Field>
      {({ form }: FieldAttributes<any>) => {
        return (
          <MegaInputBase
            {...{
              ...props,
              inputProps: {
                ...props.inputProps,
                'data-testid': `mega-input-${props.field.name}`
              }
            }}
            sx={{
              mr: 2,
              '& .MuiFormHelperText-root.Mui-error': {
                position: 'absolute',
                bottom: (theme: Theme) => theme.spacing(-2.5)
              }
            }}
            onKeyDown={(event: any) => {
              const { code, target } = event;
              const { value, maxLength, name } = target as unknown as any;

              if (code === 'Backspace' && !value) {
                // prevent removing the value from the prev input
                event.preventDefault();
                handleFocus(value, maxLength, name);
              }
            }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(event, form);
            }}
            onPaste={(
              event:
                | React.ClipboardEvent<HTMLDivElement>
                | React.ClipboardEvent<Element>
            ) => handlePaste(event, form)}
            onInput={(event: FormEvent<HTMLDivElement>) =>
              handleOnInput(event, form)
            }
          />
        );
      }}
    </Field>
  );
};

/**
 * Primary UI component for user interaction
 */
const VerificationInput = ({
  label,
  labelSx,
  ...props
}: VerificationInputProps) => {
  return (
    <FormControlLabel
      control={<Inputs {...props} />}
      label={label}
      labelPlacement={'top'}
      sx={{
        ...labelSx
      }}
    />
  );
};
export default VerificationInput;
