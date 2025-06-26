import { Grid, Theme, Typography } from '@mui/material';
import Card from 'src/components/organisms/Card/Card';
import ResponseRateTopCardChange from './ResponseRateTopCardChange';

const cardSx = {
  border: (theme: Theme) => theme.border.basicBox,
  borderRadius: (theme: Theme) => theme.borderRadius.md,
  boxShadow: (theme: Theme) => theme.customShadows.xs
};

export interface ResponseRateTopCardProps {
  title: string;
  rate: number;
  rateChange: number;
  suffix: string;
  rateChangeSuffix: string;
  showChange: boolean;
}

const ResponseRateTopCard = ({
  title,
  rate,
  rateChange,
  suffix,
  rateChangeSuffix,
  showChange
}: ResponseRateTopCardProps) => {
  return (
    <Card showActions={false} sx={cardSx}>
      <Grid container direction={'column'}>
        <Typography variant="textSmMedium">{title}</Typography>
        <Grid container alignItems={'center'}>
          <Typography variant="textLgSemibold">
            {rate ?? ''}
            {suffix}
          </Typography>
          <ResponseRateTopCardChange
            rateChange={rateChange}
            rateChangeSuffix={rateChangeSuffix}
            showChange={showChange}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ResponseRateTopCard;
