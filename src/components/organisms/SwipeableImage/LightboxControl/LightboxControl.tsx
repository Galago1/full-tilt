//Mui
import { Box, SvgIconProps, SxProps, Theme } from '@mui/material';

//Custom
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from 'src/components/particles/theme/overrides/CustomIcons';

//Icons

// const LightboxButton = ({ icon }: { icon: any }) => <Box>{icon}</Box>;
export interface LightboxControlProps extends ButtonProps {
  next?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  iconProps?: SvgIconProps;
  buttonSx?: SxProps<Theme>;
}
const LightboxControl = ({
  next = false,
  buttonSx,
  iconProps,
  onPrevious,
  onNext,
  ...props
}: LightboxControlProps) => {
  return (
    <Button
      sx={{
        minWidth: 'unset',
        padding: (theme: Theme) => theme.spacing(1.25),
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        ...buttonSx
      }}
      component={Box}
      variant="contained"
      color="secondary"
      onClick={next ? onNext : onPrevious}
      {...props}
    >
      {next ? (
        <ChevronRightIcon
          color="primary"
          sx={{ width: 24, height: 24 }}
          {...iconProps}
        />
      ) : (
        <ChevronLeftIcon
          color="primary"
          sx={{ width: 24, height: 24 }}
          {...iconProps}
        />
      )}
    </Button>
  );
};
export default LightboxControl;
