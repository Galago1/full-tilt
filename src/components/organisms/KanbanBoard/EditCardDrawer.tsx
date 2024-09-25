import { Grid, Typography, useTheme } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { DatePickerInputBase } from 'src/components/atoms';
import {
  AvatarAndText,
  SelectInput,
  TextInput
} from 'src/components/molecules';
import { ButtonListButton } from 'src/components/molecules/ButtonList/ButtonList';
import Drawer from '../Drawer';

export interface EditCardDrawerProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: any, formik: any) => void;
  selectedCard: any;
  data: any;
}

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
    label: 'Update To-Do',
    fullWidth: true,
    itemprops: { xs: 12, sm: 12, md: 6, order: { xs: 1, sm: 1, md: 1 } }
  }
];

const EditCardDrawer = ({
  open,
  onClose,
  onSubmit,
  selectedCard,
  data
}: EditCardDrawerProps) => {
  const theme = useTheme();
  const newLocal = 'textSmRegular';
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      showActions={true}
      slots={{
        drawerActionsProps: {
          buttons: customButtons
        }
      }}
      sx={{ maxWidth: 643 }}
    >
      <>
        <AvatarAndText
          title={'Edit To-Do'}
          subtitle={'* Indicates a required field'}
        />
        <Formik
          initialValues={{
            summary: selectedCard?.summary || '',
            assignee: selectedCard?.assignee || '',
            dueDate: selectedCard?.dueDate || '',
            team: selectedCard?.team || '',
            category: selectedCard?.category || '',
            description: selectedCard?.description || '',
            group: selectedCard?.group || '',
            status: selectedCard?.status || '',
            priority: selectedCard?.priority || '',
            actionTimeline: selectedCard?.actionTimeline || ''
          }}
          onSubmit={(values, formik) => {
            onSubmit(values, formik);
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
                    options={data.assignees}
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
                    options={data.groups}
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
                    options={data.statuses}
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
                  <Typography
                    variant={newLocal}
                    color={'grey.700'}
                    marginBottom={6 / 8}
                  >
                    Due Date *
                  </Typography>
                  <Field
                    component={DatePickerInputBase}
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
                    options={data.priorities}
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
                    options={data.actionTimelines}
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

export default EditCardDrawer;
