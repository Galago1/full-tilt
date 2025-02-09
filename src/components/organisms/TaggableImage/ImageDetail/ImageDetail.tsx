//Custom Components

//Icons
import { SxProps, Theme } from '@mui/material';
import Button from 'src/components/atoms/Button/Button';
import { Expand05Icon } from 'src/components/particles/theme/icons/Arrows/expand-05';
import { ShoppingCart01Icon } from 'src/components/particles/theme/icons/FinanceAndCommerce/shopping-cart-01';
import { Tag01Icon } from 'src/components/particles/theme/icons/FinanceAndCommerce/tag-01';
import { CheckIcon } from 'src/components/particles/theme/icons/General/check';

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
    icon = pillValue === 0 ? <Expand05Icon /> : <CheckIcon />;
    backgroundSx = {
      padding: (theme: Theme) => theme.spacing(1.625) // 13px
    };
  } else if (variant === 'added') {
    icon = <ShoppingCart01Icon />;
    backgroundSx = {
      padding: (theme: Theme) => theme.spacing(1.625) // 13px
    };
  } else {
    icon = <Tag01Icon />;
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
