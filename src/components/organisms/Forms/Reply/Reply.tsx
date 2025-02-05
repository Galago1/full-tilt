import { Divider, Grid, GridProps, Typography } from '@mui/material';
import { Field, FieldAttributes } from 'formik';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import AvatarAndText, {
  AvatarAndTextProps
} from 'src/components/molecules/AvatarAndText/AvatarAndText';
import Card from 'src/components/organisms/Card/Card';
import { CardProps } from 'src/components/organisms/Card/Card';

interface UseReplyProps {
  slots?: {
    textAreaFieldAttributes: FieldAttributes<any>;
    switchFieldAttributes?: FieldAttributes<any>;
    switchGridItemProps?: GridProps;
    buttonProps: ButtonProps;
    buttonGridItemProps?: GridProps;
    avatarAndTextProps?: AvatarAndTextProps;
  };
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
  };
  cardSlots?: CardProps['slots'];
}
const Reply = ({ slots, ...props }: ReplyProps) => {
  const {
    textAreaFieldAttributes,
    switchFieldAttributes,
    switchGridItemProps,
    buttonProps,
    buttonGridItemProps,
    avatarAndTextProps
  } = useReploy({ slots });

  return (
    <Card showActions={false} {...props}>
      <>
        <AvatarAndText title={'Your Reply'} {...avatarAndTextProps} />
        <Divider sx={{ my: 2.5 }} />
        <Grid container flexDirection={'column'} gap={3}>
          <Grid item xs={12}>
            <Field {...textAreaFieldAttributes} />
          </Grid>

          <Grid item>
            <Grid container>
              {switchFieldAttributes && (
                <Grid item flex={1} {...switchGridItemProps}>
                  <Field {...switchFieldAttributes} />
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
