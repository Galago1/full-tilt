import { Grid, GridProps, Typography } from '@mui/material';
import { Chip, Divider } from 'src/components/atoms';
import { ChipProps } from 'src/components/atoms/Chip/Chip';
import { AvatarAndText } from 'src/components/molecules';
import { ArrowUpRightIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import CheckDoneForm, { CheckDoneFormProps } from '../CheckDoneForm';

export interface SharedListCardContentProps extends GridProps {
  id?: string;
  status?: string;
  type?: string;
  priority?: string;
  title?: string;
  icon?: JSX.Element;
  index?: number;
  listLength?: number;
  slots?: {
    chipProps?: ChipProps;
    checkDoneFormProps?: CheckDoneFormProps;
  };
  useType?: boolean;
  leftComponent?: JSX.Element;
  subtitle?: JSX.Element;
}

const SharedListCardContent = ({
  id,
  status,
  type,
  priority,
  title,
  icon,
  index,
  listLength,
  onClick,
  slots,
  useType = false,
  leftComponent,
  subtitle,
  ...props
}: SharedListCardContentProps) => {
  const { chipProps, checkDoneFormProps } = slots || {};
  return (
    <>
      <Grid
        item
        display="flex"
        alignItems="flex-start"
        width={'100%'}
        onClick={onClick}
        sx={{
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'grey.50'
          },
          py: 2
        }}
        {...props}
      >
        <Grid container alignItems="center" gap={0.5}>
          <AvatarAndText
            gap={1}
            flexWrap="nowrap"
            leftComponent={
              leftComponent || (
                <CheckDoneForm id={id!} {...checkDoneFormProps!} />
              )
            }
            leftComponentItemSx={{
              alignSelf: 'flex-start'
            }}
            title={title}
            alignItems="center"
            titleTypography={{
              sx: { display: 'flex', alignItems: 'center' }
            }}
            subtitle={
              subtitle || (
                <Grid container alignItems="center" gap={0.5}>
                  <Grid item>
                    <Chip {...chipProps} label={status} />
                  </Grid>
                  <Grid
                    item
                    display={'flex'}
                    alignItems={'center'}
                    color={'trext.secondary'}
                    sx={{
                      '&': {
                        // color: 'text.secondary'
                        color: (theme) =>
                          ` ${theme.palette.text.secondary} !important`
                      }
                    }}
                  >
                    {icon}
                    <Typography
                      variant="textSmMedium"
                      sx={{ ml: 1 }}
                      color={'text.secondary'}
                    >
                      {useType ? type : priority}
                    </Typography>
                  </Grid>
                </Grid>
              )
            }
            subtitleTypography={{
              variant: 'textSmRegular'
            }}
            textSubtitleGridItemProps={{
              sx: { display: 'flex', alignItems: 'center' }
            }}
          />
        </Grid>
        <ArrowUpRightIcon
          sx={{
            width: 20,
            height: 20,
            ml: 'auto',
            alignSelf: 'flex-start'
          }}
        />
      </Grid>
      <Grid item sx={{ width: '100%', py: 0, my: 0 }}>
        <Divider />
      </Grid>
    </>
  );
};

export default SharedListCardContent;
