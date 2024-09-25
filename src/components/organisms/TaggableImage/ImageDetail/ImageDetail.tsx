//Custom Components

//Icons
import { SxProps, Theme } from '@mui/material';
import Button from 'src/components/atoms/Button/Button';
import {
  ArrowAllIcon,
  CartIcon,
  CheckIcon,
  TagIcon
} from 'src/components/particles/theme/overrides/CustomIcons';

export interface ImageDetailProps {
  pillValue: 0 | 1 | 2 | 3;
  variant: 'selected' | 'added' | null;
  onClick?: () => void;
  icon?: JSX.Element;
  backgroundSx?: SxProps<Theme>;
  sx?: SxProps<Theme>;
}
export const ImageDetail = ({
  pillValue,
  variant,
  onClick,
  icon,
  backgroundSx,
  sx,
  ...props
}: ImageDetailProps) => {
  if (variant === 'selected') {
    icon = pillValue === 0 ? <ArrowAllIcon /> : <CheckIcon />;
    backgroundSx = {
      padding: (theme: Theme) => theme.spacing(1.625) // 13px
    };
  } else if (variant === 'added') {
    icon = <CartIcon />;
    backgroundSx = {
      padding: (theme: Theme) => theme.spacing(1.625) // 13px
    };
  } else {
    icon = <TagIcon />;
    backgroundSx = {
      padding: 0,
      maxHeight: 48,
      maxWidth: 48
    };
  }
  const allSx: SxProps<Theme> = {
    borderRadius: '50% !important',
    backgroundColor: `rgba(255, 255, 255, 0.5)`,
    minWidth: 0,
    boxShadow: (theme: Theme) => theme.customShadows.md,
    ':hover': {
      boxShadow: (theme: Theme) => theme.customShadows.md
    },
    ...backgroundSx,
    ...sx
  };
  return (
    <Button onClick={onClick} sx={allSx} {...props} color={'secondary'}>
      {icon}
    </Button>
  );
};
