import { Grid, Typography, TypographyProps } from '@mui/material';
import ButtonList, {
  ButtonListProps
} from 'src/components/molecules/ButtonList/ButtonList';
import Block, { BlockProps } from '../../Block/Block';

export interface TableSnackbarProps extends BlockProps {
  typographyProps: TypographyProps;
  buttonListProps: ButtonListProps;
}

const TableSnackbar = ({
  typographyProps,
  buttonListProps,
  ...props
}: TableSnackbarProps) => {
  return (
    <Block {...props}>
      <Grid container alignItems={'center'} spacing={2}>
        <Grid item>
          {typographyProps && <Typography {...typographyProps} />}
        </Grid>
        <Grid item>
          {buttonListProps && <ButtonList {...buttonListProps} />}
        </Grid>
      </Grid>
    </Block>
  );
};

export default TableSnackbar;
