import { CalendarIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import Button from '../../Button/Button';
import {
  DatePicker,
  DatePickerProps,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const ButtonField = (props: any = { InputProps: { ref: null } }) => {
  const {
    setOpen,
    id,
    disabled,
    onOpen,
    InputProps: { ref }
  } = props;

  console.log('prsetOpensetOpenops', setOpen, onOpen, props);

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
        '&': { minWidth: 'auto' }
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
