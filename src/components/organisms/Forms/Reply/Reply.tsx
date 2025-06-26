import { Divider, Grid, GridProps } from '@mui/material';
import { Field, FieldAttributes } from 'formik';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import AvatarAndText, {
  AvatarAndTextProps
} from 'src/components/molecules/AvatarAndText/AvatarAndText';
import Card, { CardProps } from 'src/components/organisms/Card/Card';

interface UseReplyProps {
  slots?: ReplyProps['slots'];
}
const useReploy = ({ slots }: UseReplyProps) => {
  return {
    ...slots
  };
};

export interface ReplyProps extends Omit<CardProps, 'slots'> {
  slots?: {
    textAreaFieldAttributes: FieldAttributes<any>;
    switchFieldAttributes?: FieldAttributes<any>;
    switchGridItemProps?: GridProps;
    buttonProps: ButtonProps;
    buttonGridItemProps?: GridProps;
    avatarAndTextProps?: AvatarAndTextProps;
    containerProps?: GridProps;
    middleComponentGridItemProps?: GridProps;
  };
  middleComponent?: JSX.Element;
  cardSlots?: CardProps['slots'];
  showHeader?: boolean;
  showDivider?: boolean;
}
const Reply = ({
  slots,
  showHeader = false,
  showDivider = false,
  middleComponent,
  ...props
}: ReplyProps) => {
  const {
    textAreaFieldAttributes,
    switchFieldAttributes,
    switchGridItemProps,
    buttonProps,
    buttonGridItemProps,
    avatarAndTextProps,
    containerProps,
    middleComponentGridItemProps
  } = useReploy({ slots });

  return (
    <Card showActions={false} {...props}>
      <>
        {showHeader && (
          <AvatarAndText title={'Your Reply'} {...avatarAndTextProps} />
        )}
        {showDivider && <Divider sx={{ my: 2.5 }} />}
        <Grid container flexDirection={'column'} gap={3} {...containerProps}>
          <Grid item xs={12}>
            <Field {...textAreaFieldAttributes} />
          </Grid>

          <Grid item>
            <Grid container gap={2} flexWrap={'nowrap'}>
              {switchFieldAttributes && (
                <Grid item flex={1} {...switchGridItemProps}>
                  <Field {...switchFieldAttributes} />
                </Grid>
              )}
              {middleComponent && (
                <Grid item {...middleComponentGridItemProps}>
                  {middleComponent}
                </Grid>
              )}
              <Grid item {...buttonGridItemProps}>
                <Button {...buttonProps} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    </Card>
  );
};

export default Reply;
