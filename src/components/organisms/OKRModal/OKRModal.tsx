import { Grid, useTheme } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';
import { DatePickerInput } from 'src/components/molecules';
import SelectInput from 'src/components/molecules/Inputs/SelectInput';
import TextInput from 'src/components/molecules/Inputs/TextInput';

export interface OKRModalProps {
  onSubmit: (values: any) => void;
  champions: SelectOption[];
  teams: SelectOption[];
  categories: SelectOption[];
}

const OKRModal = ({
  onSubmit,
  champions,
  teams,
  categories
}: OKRModalProps) => {
  const theme = useTheme();
  return (
    <>
      <Formik
        initialValues={{
          okrTitle: '',
          dueDate: null,
          champion: 'none',
          team: 'none',
          category: 'none',
          description: ''
        }}
        onSubmit={(values, form) => {
          onSubmit(values);
        }}
      >
        {(formik) => (
          <Form>
            <Field
              component={TextInput}
              name="okrTitle"
              label="OKR Title"
              fullWidth
              required
              placeholder="Please name your metric"
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderRadius: theme.borderRadius.md
                }
              }}
            />
            <Grid container spacing={2} paddingTop={2} marginBottom={2}>
              <Grid item xs={6}>
                <Field
                  component={SelectInput}
                  fullWidth
                  name="champion"
                  label="Champion"
                  options={champions}
                  defaultOptionLabel="John Doe"
                  defaultValue="none"
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: theme.borderRadius.md
                    },
                    '& .MuiSvgIcon-root': {
                      width: 16,
                      height: 16,
                      right: 12,
                      fontSize: 16,
                      position: 'absolute',
                      pointerEvents: 'none'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  component={DatePickerInput}
                  label="Due Date"
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: theme.borderRadius.md
                    }
                  }}
                  name="dueDate"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  component={SelectInput}
                  options={teams}
                  fullWidth
                  name="team"
                  label="Team"
                  defaultOptionLabel="Leadership"
                  defaultValue="none"
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: theme.borderRadius.md
                    },
                    '& .MuiSvgIcon-root': {
                      width: 16,
                      height: 16,
                      right: 12,
                      fontSize: 16,
                      position: 'absolute',
                      pointerEvents: 'none'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                {/* TODO: Make a variant */}
                <Field
                  component={SelectInput}
                  options={categories}
                  fullWidth
                  name="category"
                  label="Category"
                  defaultOptionLabel="Marketing"
                  defaultValue="none"
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: theme.borderRadius.md
                    },
                    '& .MuiSvgIcon-root': {
                      width: 16,
                      height: 16,
                      right: 12,
                      fontSize: 16,
                      position: 'absolute',
                      pointerEvents: 'none'
                    }
                  }}
                />
              </Grid>
            </Grid>

            <Field
              component={TextInput}
              name="description"
              label="Description"
              fullWidth
              InputProps={{
                sx: { minHeight: '150px', alignItems: 'flex-start' }
              }}
              placeholder="Enter a description..."
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderRadius: theme.borderRadius.md
                }
              }}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default OKRModal;
