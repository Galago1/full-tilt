import Button from '../../Button/Button';
import {
  DatePicker,
  DatePickerProps,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CalendarIcon } from 'src/components/particles/theme/icons/Time/calendar';

const ButtonField = (props: any = { InputProps: { ref: null } }) => {
  const { setOpen, id, disabled, onOpen } = props;
  const InputProps = props?.InputProps || {};
  const ref = InputProps?.ref;

  return (
    <Button
      variant="outlined"
      id={id}
      disabled={disabled}
      color="secondary"
      ref={ref}
      onClick={() => setOpen?.((prev: boolean) => !prev)}
      label={<CalendarIcon />}
      sx={{
        '&': { minWidth: 'auto', p: 10 / 8 }
      }}
    />
  );
};

const ButtonDatePicker = (props: DatePickerProps<any>) => {
  return (
    <DatePicker slots={{ ...props.slots, field: ButtonField }} {...props} />
  );
};

const PickerWithButtonField = ({ ...props }: any) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ButtonDatePicker {...props} />
    </LocalizationProvider>
  );
};

export default PickerWithButtonField;
