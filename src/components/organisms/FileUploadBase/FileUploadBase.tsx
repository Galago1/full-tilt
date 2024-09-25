import {
  Box,
  Grid,
  GridProps,
  SxProps,
  Theme,
  Typography,
  TypographyProps,
  useTheme
} from '@mui/material';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import Badge, { BadgeProps } from 'src/components/atoms/Badge/Badge';
import { Image, ImageProps } from 'src/components/atoms/Image/Image';
import AvatarAndText, {
  AvatarAndTextProps
} from 'src/components/molecules/AvatarAndText/AvatarAndText';
import { UploadCloudIcon } from 'src/components/particles/theme/overrides/CustomIcons';

const defaultTertiaryTitleAvatarAndTextProps: GridProps = {
  sx: {
    flexWrap: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
};

const titleTypography: TypographyProps = {
  // @ts-ignore
  component: 'span'
};
const tertiaryTitleTypography: TypographyProps = {
  // @ts-ignore
  component: 'span'
};
const subtitleTypography: TypographyProps = {
  // @ts-ignore
  component: 'span'
};

const AvatarAndTextPropsBase: AvatarAndTextProps = {
  my: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
  textSx: {
    textAlign: 'center'
  },
  titleTypography,
  subtitleTypography,
  tertiaryTitleTypography
};

export interface FileUploadBaseProps {
  /**
   * disable upload
   */
  disabled?: boolean;
  /**
   * function to handle uploaded array of files
   */
  onFilesUploaded: (file: File[]) => void;
  /**
   * sx props for the box
   */
  boxSx?: SxProps<Theme>;
  /**
   * additional props for the dropzone
   */
  dropzoneProps?: DropzoneOptions;
  /**
   * props for the image
   */
  imagePreviews?: ImageProps[];
  /**
   * text to show what to click
   */
  clickText?: string;
  /**
   * end of text to show what to click
   */
  clickTextSupporting?: string;
  /**
   * text to show what files and formats are acceptable
   */
  acceptedText?: string;
  /**
   * show the content
   */
  showContent?: boolean;
  /**
   * props for the badge
   */
  badgeProps?: BadgeProps;
  /**
   * props for the avatar and text
   */
  avatarAndTextProps?: AvatarAndTextProps;
  /**
   * show the title icon
   */
  showTitleIcon?: boolean;
  /**
   * props for the tertiary title avatar and text
   */
  tertiaryTitleContainerProps?: GridProps;
}

const FileUploadBase = ({
  disabled = false,
  onFilesUploaded,
  boxSx,
  dropzoneProps,
  imagePreviews,
  clickText = 'Click to upload a photo',
  clickTextSupporting = 'or drag and drop',
  acceptedText = 'SVG, PNG, JPG or GIF (max. 800x400px)',
  showContent = true,
  badgeProps,
  avatarAndTextProps = AvatarAndTextPropsBase,
  showTitleIcon = true,
  tertiaryTitleContainerProps = defaultTertiaryTitleAvatarAndTextProps,
  ...props
}: FileUploadBaseProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onFilesUploaded,
    noClick: disabled,
    noDrag: disabled,
    maxSize: 6 * 1024 * 1024,
    ...dropzoneProps
  });
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.white,
        borderRadius: '12px',
        border: `1px dashed ${theme.palette.grey[200]}`,
        borderColor: theme.palette.primary[25],
        padding: theme.spacing(2, 3),
        '&:hover': {
          backgroundColor: theme.palette.primary[25],
          borderColor: theme.palette.primary[300]
        },
        ...boxSx
      }}
      {...props}
      {...getRootProps()}
    >
      <Box>
        <input {...getInputProps()} type="file" style={{ display: 'none' }} />

        {!!imagePreviews?.length && (
          <Badge {...badgeProps}>
            {imagePreviews?.map((imageProps, index) => {
              return (
                <Image
                  key={`dropzone-image-preview-[${index}]`}
                  {...imageProps}
                />
              );
            })}
          </Badge>
        )}
        {showContent && (
          <AvatarAndText
            title={
              showTitleIcon ? (
                <UploadCloudIcon
                  sx={{
                    color: theme.palette.grey[600],
                    cursor: 'pointer',
                    '&:hover': {
                      color: theme.palette.primary[600]
                    }
                  }}
                />
              ) : undefined
            }
            tertiaryTitle={
              <Grid container direction="row" {...tertiaryTitleContainerProps}>
                {clickText && (
                  <Grid item>
                    <Typography
                      variant={'textSmRegular'}
                      fontWeight={'medium'}
                      sx={{
                        color: disabled
                          ? theme.palette.grey[300]
                          : theme.palette.primary[700],
                        marginRight: theme.spacing(0.5),
                        cursor: 'pointer'
                      }}
                    >
                      {clickText}
                    </Typography>
                  </Grid>
                )}
                {clickTextSupporting && (
                  <Grid item>
                    <Typography
                      variant={'textSmRegular'}
                      sx={{
                        color: theme.palette.grey[600],
                        cursor: 'pointer',
                        '&:hover': {
                          color: theme.palette.primary[600]
                        }
                      }}
                    >
                      {clickTextSupporting}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            }
            subtitle={
              acceptedText && (
                <Grid item>
                  <Typography
                    sx={{
                      color: theme.palette.grey[600],
                      cursor: 'pointer',
                      '&:hover': {
                        color: theme.palette.primary[600]
                      },
                      ...theme.typography.caption
                    }}
                  >
                    {acceptedText}
                  </Typography>
                </Grid>
              )
            }
            {...avatarAndTextProps}
          />
        )}
      </Box>
    </Box>
  );
};

export default FileUploadBase;
