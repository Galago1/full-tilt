import { SelectChangeEvent, useTheme } from '@mui/material';
import { Field, Formik } from 'formik';
import { isEmpty } from 'lodash';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';
import { SelectInput } from 'src/components/molecules';

interface StandUpUserTeamSelectProps {
  teamOptions: SelectOption[];
  handleTeamChange: (event: SelectChangeEvent<string>) => void;
  value: string;
}
const StandUpUserTeamSelect = ({
  teamOptions,
  handleTeamChange,
  value
}: StandUpUserTeamSelectProps) => {
  const theme = useTheme();
  const allOption: SelectOption = {
    label: { value: 'All Teams' },
    value: 'all'
  };
  return (
    <Formik
      initialValues={{ name: value }}
      onSubmit={() => console.log('asckasd')}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Field
            name={'name'}
            component={SelectInput}
            label=""
            options={isEmpty(teamOptions) ? [] : [allOption, ...teamOptions]}
            onChange={handleTeamChange}
            value={value}
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: theme.borderRadius.md
              }
            }}
          />
        );
      }}
    </Formik>
  );
};

export default StandUpUserTeamSelect;
