import { Grid, GridProps, Typography } from '@mui/material';
import { Chip, Divider } from 'src/components/atoms';
import { ChipProps } from 'src/components/atoms/Chip/Chip';
import { AvatarAndText } from 'src/components/molecules';
import { ArrowUpRightIcon } from 'src/components/particles/theme/overrides/CustomIcons';

export interface SharedListCardContentProps extends GridProps {
  status?: string;
  priority?: string;
  title?: string;
  icon?: JSX.Element;
  index?: number;
  listLength?: number;
  slots?: {
    chipProps: ChipProps;
  };
}

const SharedListCardContent = ({
  status,
  priority,
  title,
  icon,
  index,
  listLength,
  slots,
  ...props
}: SharedListCardContentProps) => {
  const { chipProps } = slots || {};
  return (
    <>
      <Grid
        item
        display="flex"
        alignItems="flex-start"
        width={'100%'}
        {...props}
      >
        <Grid container alignItems="center" gap={0.5}>
          <AvatarAndText
            title={
              <>
                <Chip {...chipProps} label={status} />
                {icon}
                <Typography variant="textSmMedium" sx={{ ml: 1 }}>
                  {priority}
                </Typography>
              </>
            }
            titleTypography={{
              sx: { display: 'flex', alignItems: 'center' }
            }}
            subtitle={title}
            subtitleTypography={{
              variant: 'textSmRegular'
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
      {index !== listLength! - 1 && (
        <Grid item sx={{ width: '100%' }}>
          <Divider />
        </Grid>
      )}
    </>
  );
};

export default SharedListCardContent;
