import { Grid, useTheme } from '@mui/material';
import { FormikHelpers } from 'formik';
import TextInput from 'src/components/molecules/Inputs/TextInput/TextInput';
import ScorecardInlineEditCell, {
  InlineFormikProps
} from './ScorecardInlineEditCell';
import { RowDataObject } from './useScorecard';

interface ScorecardCellProps {
  content: RowDataObject;
  type: 'title' | 'data';
  bgcolor?: string;
  width: string;
  onSave: (
    values: InlineFormikProps,
    form: FormikHelpers<InlineFormikProps>,
    onCloseEditor: () => void
  ) => Promise<void>;
  closeOnSave: boolean;
  canEdit: boolean;
  allowEmptyText?: boolean;
  component?: any;
}

const ScorecardCell = ({
  content,
  type,
  bgcolor,
  width,
  onSave,
  component = TextInput,
  closeOnSave,
  canEdit,
  allowEmptyText
}: ScorecardCellProps) => {
  const theme = useTheme();
  const backgroundColor =
    type === 'title' ? theme.palette.grey[50] : bgcolor || 'white';

  return (
    <Grid
      sx={{
        width: width,
        border: 1,
        borderColor: 'grey.200',
        p: 1,
        px: 0,
        textAlign: 'center',
        backgroundColor,
        borderRadius: theme.spacing(0.5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.spacing(5),
        overflow: 'hidden',
        mr: 1
      }}
    >
      <ScorecardInlineEditCell
        initialValue={content}
        onSave={onSave}
        component={component}
        closeOnSave={closeOnSave}
        canEdit={canEdit}
        allowEmptyText={allowEmptyText!}
      />
    </Grid>
  );
};

export default ScorecardCell;
