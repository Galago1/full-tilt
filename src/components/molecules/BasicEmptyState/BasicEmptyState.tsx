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
import { Lightning01Icon } from 'src/components/particles/theme/icons/Weather/lightning-01';
import EmptyState, { EmptyStateProps } from '../EmptyState/EmptyState';

export interface BasicEmptyStateProps extends EmptyStateProps {
  image?: string;
  title?: any;
  tertiaryTitle?: string;
  subtitle?: string | JSX.Element;
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
  absCenter?: boolean;
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
  absCenter = false,
  avatarAndTextProps,
  gap = 1.5,
  ...props
}: BasicEmptyStateProps) => {
  const { gridSx, gridProps } = slots || {};
  const theme = useTheme();
  const {
    featuredIconItemSx,
    featuredIconProps,
    subtitleTypography,
    titleTypography,
    ...avatarAndTextPropsRest
  } = avatarAndTextProps || {};
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
          gap,

          title,
          titleTypography: {
            variant: 'textMdSemibold',
            color: 'text.primary',
            sx: { textAlign: alignItems === 'center' ? 'center' : 'left' },
            ...titleTypography
          },
          subtitle: subtitle,
          subtitleTypography: {
            variant: 'textSmMedium',
            color: 'text.secondary',
            sx: {
              textAlign: alignItems === 'center' ? 'center' : 'left'
            },
            ...subtitleTypography
          },
          tertiaryTitle: tertiaryTitle,
          tertiaryTitleTypography: tertiaryTitle
            ? {
                variant: 'textSmMedium',
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
                ...featuredIconProps
              }
            : undefined,
          featuredIconItemSx: {
            position: image ? 'absolute' : 'relative',
            zIndex: 1,
            color: `${theme.palette.common.white} !important`,
            bottom: !absCenter
              ? featuredIconBottom ||
                (buttonGridProps || buttonProps
                  ? image
                    ? 182
                    : 0
                  : image
                  ? 152
                  : 0)
              : undefined,
            ...(image && {
              left: '50%',
              transform: 'translateX(-50%)',
              alignSelf: 'center',
              display: 'flex',
              justifyContent: 'center'
            }),
            ...featuredIconItemSx
          },
          avatarProps: image
            ? {
                src: image,
                alt: 'None Available',
                variant: 'square',
                sx: { width: 75, height: 54.5 },
                ...avatarProps
              }
            : undefined,

          childrenGridProps: buttonGridProps,
          ...avatarAndTextPropsRest
        }}
        {...props}
      >
        {children ? children : buttonProps ? <Button {...buttonProps} /> : ''}
      </EmptyState>
    </Grid>
  );
};

export default BasicEmptyState;
