import { Typography } from '@mui/material';
import {
  ArrowDownIcon,
  ArrowUpIcon
} from 'src/components/particles/theme/overrides/CustomIcons';

interface ResponseRateTopCardChangeProps {
  rateChange: number;
  rateChangeSuffix: string;
  showChange: boolean;
}
const ResponseRateTopCardChange = ({
  rateChange,
  rateChangeSuffix,
  showChange
}: ResponseRateTopCardChangeProps) => {
  if (!showChange) return null;
  return (
    <>
      {rateChange > 0 ? (
        <ArrowUpIcon
          sx={{
            color: 'success.main'
          }}
        />
      ) : (
        <ArrowDownIcon
          sx={{
            color: 'error.main'
          }}
        />
      )}
      <Typography
        variant="textSmMedium"
        color={rateChange > 0 ? 'success.main' : 'error.main'}
      >
        {Math.abs(rateChange)}
        {rateChangeSuffix || '%'}{' '}
        <Typography component="span" color="text.primary">
          last prd.
        </Typography>
      </Typography>
    </>
  );
};
export default ResponseRateTopCardChange;
