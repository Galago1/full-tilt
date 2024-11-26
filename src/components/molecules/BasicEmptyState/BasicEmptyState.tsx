import {
  alpha,
  Grid,
  GridProps,
  SxProps,
  Theme,
  useTheme
} from '@mui/material';
import { AvatarProps } from 'src/components/atoms/Avatar/Avatar';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import { Lightning01Icon } from 'src/components/particles/theme/overrides/CustomIcons';
import EmptyState, { EmptyStateProps } from '../EmptyState/EmptyState';

export interface BasicEmptyStateProps extends EmptyStateProps {
  image?: string;
  title?: string;
  subtitle?: string;
  pt?: number;
  avatarProps?: AvatarProps;
  buttonProps?: ButtonProps;
  buttonGridProps?: GridProps;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  emptyStateHeight?: any;
  featuredIconBottom?: number;
  sx?: SxProps<Theme>;
  slots?: {
    gridSx?: SxProps<Theme>;
    gridProps?: GridProps;
  };
}

const BasicEmptyState = ({
  image,
  title,
  subtitle,
  avatarProps,
  buttonProps,
  buttonGridProps,
  icon = <Lightning01Icon />,
  children,
  emptyStateHeight = 320,
  featuredIconBottom = 0,
  sx,
  slots,
  ...props
}: BasicEmptyStateProps) => {
  const { gridSx, gridProps } = slots || {};
  const theme = useTheme();
  return (
    <Grid
      sx={{
        p: 3,
        position: 'relative',
        height: `100%`,
        ...gridSx
      }}
      {...gridProps}
    >
      <EmptyState
        sx={{
          position: 'relative',
          height: emptyStateHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'nowrap',
          ...sx
        }}
        avatarAndTextProps={{
          sx: {
            maxWidth: 352,
            justifyContent: 'center',
            flexWrap: 'nowrap'
          },
          gap: 2,
          featuredIconProps: icon
            ? {
                children: icon as any,
                size: 'md',
                sx: image
                  ? {
                      color: `${theme.palette.common.white} !important`
                    }
                  : undefined,
                style: image
                  ? {
                      backgroundColor: `${alpha(
                        theme.palette.grey[700],
                        0.4
                      )} !important`
                    }
                  : undefined
              }
            : undefined,
          featuredIconItemSx: {
            position: image ? 'absolute' : 'relative',
            zIndex: 2,
            color: `${theme.palette.common.white} !important`,
            bottom:
              featuredIconBottom ||
              (buttonGridProps || buttonProps
                ? image
                  ? 182
                  : 0
                : image
                ? 152
                : 0)
          },
          avatarProps: image
            ? {
                src: image,
                alt: 'None Available',
                variant: 'square',
                sx: { width: 150, height: 109 },
                ...avatarProps
              }
            : undefined,
          textContainerGridItemProps: { sx: { textAlign: 'center' } },
          flexDirection: 'column',

          title,
          titleTypography: {
            variant: 'textLgSemibold',
            color: 'text.primary',
            sx: { textAlign: 'center' }
          },
          subtitle: subtitle,
          subtitleTypography: {
            variant: 'textMdRegular',
            color: 'text.secondary',
            sx: { textAlign: 'center' }
          },
          childrenGridProps: buttonGridProps
        }}
        {...props}
      >
        {children ? children : buttonProps ? <Button {...buttonProps} /> : ''}
      </EmptyState>
    </Grid>
  );
};

export default BasicEmptyState;
