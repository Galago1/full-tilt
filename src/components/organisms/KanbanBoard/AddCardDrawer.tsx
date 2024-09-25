import { Grid, Typography, useTheme } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { DatePickerInputBase } from 'src/components/atoms';
import { SelectInput, TextInput } from 'src/components/molecules';
import { ButtonListButton } from 'src/components/molecules/ButtonList/ButtonList';
import Drawer from '../Drawer';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';

const customButtons: ButtonListButton[] = [
  {
    color: 'secondary',
    variant: 'outlined',
    label: 'Cancel',
    fullWidth: true,
    itemprops: { xs: 12, sm: 12, md: 6, order: { xs: 2, sm: 2, md: 1 } }
  },
  {
    color: 'primary',
    variant: 'contained',
    label: 'Add To-Do',
    fullWidth: true,
    itemprops: { xs: 12, sm: 12, md: 6, order: { xs: 1, sm: 1, md: 1 } }
  }
];

export interface AddCardDrawerProps {
  open?: boolean;
  onCloseDrawer?: () => void;
  assignees: SelectOption[];
  teams: SelectOption[];
  statuses: SelectOption[];
  priorities: SelectOption[];
  actionTimelines: SelectOption[];
}

const AddCardDrawer = ({
  open,
  onCloseDrawer,
  assignees,
  teams,
  statuses,
  priorities,
  actionTimelines
}: AddCardDrawerProps) => {
  const theme = useTheme();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onCloseDrawer!}
      showActions={true}
      slots={{
        drawerActionsProps: {
          buttons: customButtons
        }
      }}
      sx={{ maxWidth: 643 }}
    >
      <>
        <Typography variant="displayXsRegular">Add Issue</Typography>
        <Typography variant="textSmRegular" color="text.secondary">
          * Indicates a required field
        </Typography>
        <Formik
          initialValues={{
            summary: '',
            assignee: '',
            dueDate: '',
            team: '',
            category: '',
            description: ''
          }}
          onSubmit={(values) => {
            onCloseDrawer!();
          }}
        >
          {(formik) => (
            <Form>
              <Grid
                container
                maxWidth={580}
                spacing={2}
                paddingTop={2}
                marginBottom={2}
              >
                <Grid item xs={12}>
                  <Field
                    component={TextInput}
                    name="summary"
                    label="Summary"
                    fullWidth
                    required
                    placeholder="What needs to be done?"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={SelectInput}
                    fullWidth
                    name="assignee"
                    label="Assignee"
                    options={assignees}
                    defaultOptionLabel="Select"
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
                    component={SelectInput}
                    fullWidth
                    name="group"
                    label="Group"
                    options={teams}
                    defaultOptionLabel="Select"
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
                    component={SelectInput}
                    fullWidth
                    name="status"
                    label="Status"
                    options={statuses}
                    defaultOptionLabel="Select"
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
                    component={DatePickerInputBase}
                    label="Due Date"
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: theme.borderRadius.md
                      },
                      width: '100%'
                    }}
                    name="dueDate"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={SelectInput}
                    fullWidth
                    name="priority"
                    label="Priority"
                    options={priorities}
                    defaultOptionLabel="Select"
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
                    component={SelectInput}
                    fullWidth
                    name="actionTimeline"
                    label="Action Timeline"
                    options={actionTimelines}
                    defaultOptionLabel="Select"
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
                  sx: { minHeight: 150, alignItems: 'flex-start' }
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
    </Drawer>
  );
};

export default AddCardDrawer;
