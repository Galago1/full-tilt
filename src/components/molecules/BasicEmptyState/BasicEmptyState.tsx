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
  tertiaryTitle?: string;
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
  tertiaryTitle,
  avatarProps,
  buttonProps,
  buttonGridProps,
  icon = <Lightning01Icon />,
  children,
  emptyStateHeight = 320,
  featuredIconBottom = 0,
  sx,
  slots,
  alignItems = 'center',
  justifyContent = 'center',
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
          alignItems,
          justifyContent,
          flexWrap: 'nowrap',
          ...sx
        }}
        avatarAndTextProps={{
          sx: {
            maxWidth: 352,
            justifyContent,
            flexWrap: 'nowrap'
          },

          textContainerGridItemProps: {
            sx: { textAlign: alignItems === 'center' ? 'center' : 'left' }
          },
          flexDirection: 'column',
          gap: 2,

          title,
          titleTypography: {
            variant: 'textLgSemibold',
            color: 'text.primary',
            sx: { textAlign: alignItems === 'center' ? 'center' : 'left' }
          },
          subtitle: subtitle,
          subtitleTypography: {
            variant: 'textMdRegular',
            color: 'text.secondary',
            sx: {
              textAlign: alignItems === 'center' ? 'center' : 'left'
            },
            ...props.avatarAndTextProps?.subtitleTypography
          },
          tertiaryTitle: tertiaryTitle,
          tertiaryTitleTypography: tertiaryTitle
            ? {
                variant: 'textMdRegular',
                color: 'text.secondary',
                sx: {
                  textAlign: alignItems === 'center' ? 'center' : 'left'
                }
              }
            : undefined,
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
                  : undefined,
                ...props.avatarAndTextProps?.featuredIconProps
              }
            : undefined,
          featuredIconItemSx: {
            position: image ? 'absolute' : 'relative',
            zIndex: 1,
            color: `${theme.palette.common.white} !important`,
            bottom:
              featuredIconBottom ||
              (buttonGridProps || buttonProps
                ? image
                  ? 182
                  : 0
                : image
                ? 152
                : 0),
            ...props.avatarAndTextProps?.featuredIconItemSx
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

          childrenGridProps: buttonGridProps,
          ...props.avatarAndTextProps
        }}
        {...props}
      >
        {children ? children : buttonProps ? <Button {...buttonProps} /> : ''}
      </EmptyState>
    </Grid>
  );
};

export default BasicEmptyState;
