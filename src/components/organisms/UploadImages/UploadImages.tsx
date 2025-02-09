// Material UI
import { Box, Grid, IconButton, Theme, Typography } from '@mui/material';
import { FormikProps } from 'formik';
import SkeletonImage, {
  SkeletonImageProps
} from 'src/components/molecules/SkeletonImage/SkeletonImage';
import useIsSize from 'src/hooks/useIsSize';
import FileInputButton from '../../atoms/FileInputButton/FileInputButton';
import { PlusIcon } from 'src/components/particles/theme/icons/General/plus';
import { XCloseIcon } from 'src/components/particles/theme/icons/General/x-close';

export interface UploadedImg {
  src: string;
  name: string;
  id?: string;
  _destroy?: boolean;
  width?: number;
  height?: number;
}

interface UploadButtonProps {
  images: UploadedImg[];
  formProps: FormikProps<any>;
  onUpload: (file?: File) => void;
}
const UploadButton = ({ images, formProps, onUpload }: UploadButtonProps) => {
  return (
    <FileInputButton
      sx={{
        flexDirection: 'column',
        padding: (theme: Theme) => theme.spacing(1.625, 1.875),
        maxWidth: 72
      }}
      variant={'outlined'}
      color={'secondary'}
      onChangeUploadHandler={(event: any) => {
        formProps.setFieldValue(`additionalImages.${images.length}`, {
          image: event.currentTarget?.files?.[0],
          name: event.currentTarget?.files?.[0].name
        });
        onUpload(event.currentTarget?.files?.[0]);
      }}
    >
      <PlusIcon />
      <Typography variant="textSmRegular">Upload</Typography>
    </FileInputButton>
  );
};

// Image Upload
interface UploadedImageProps {
  /**
   * handel deleting an image
   * @param index
   * @param image
   * @returns
   */
  onDelete: (index: number, image: UploadedImg) => void;
  /**
   * handle viewing an image
   * @param index
   * @param images
   * @returns
   */
  onViewImages: (index: number, images: UploadedImg[]) => void;
  /**
   *  images list
   */
  images: UploadedImg[];
  /**
   * image
   */
  image: UploadedImg;
  /**
   * index
   */
  index: number;
  /**
   * skeleton image props
   */
  skeletonImageProps: SkeletonImageProps;
}
const UploadedImage = ({
  onDelete,
  onViewImages,
  skeletonImageProps,
  images,
  image,
  index
}: UploadedImageProps) => {
  const { isXSmall } = useIsSize();

  return (
    <Box
      sx={{
        maxHeight: 72,
        maxWidth: 72,
        height: '100%',
        width: '100%',
        position: 'relative',
        '&:hover .MuiButtonBase-root': {
          opacity: 1
        },
        '& > div': {
          borderRadius: 0
        }
      }}
    >
      <SkeletonImage
        {...skeletonImageProps}
        // src={image.src}
        // height={72}
        // width={72}
        // sx={{ width: '100%' }}
        // raw
        // alt={image.name}
      />
      {!isXSmall ? (
        <IconButton
          sx={{
            position: 'absolute',
            right: -20,
            top: -20,
            opacity: 0
          }}
          onClick={() => onDelete(index, image)}
        >
          <XCloseIcon />
        </IconButton>
      ) : null}

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          cursor: 'pointer',
          opacity: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          bgcolor: 'rgba(38, 38, 45, 0.8)',
          backdropFilter: 'blur(1px)',
          '&:hover': {
            opacity: 1
          }
        }}
        id="view"
        onClick={() => {
          onViewImages(index, images);
        }}
      >
        <Typography color="white">View</Typography>
      </Box>
    </Box>
  );
};

export interface UploadImagesProps {
  /**
   * Section label
   */
  label?: string;
  /**
   * Images
   */
  images: UploadedImg[];
  /**
   * Formik props
   */
  formProps: FormikProps<any>;
  /**
   * Upload limit
   */
  uploadLimit?: number;
  /**
   * Handle viewing images
   * @param index
   * @param images
   * @returns
   */
  onViewImages: (index: number, images: UploadedImg[]) => void;
  /**
   * handle upload action
   * @param file
   * @returns
   */
  onUpload: (file?: File) => void;
  /**
   * Handle delete action
   * @param index
   * @param image
   */
  onDelete: (index: number, image: UploadedImg) => void;
  /**
   * skeleton image props
   */
  skeletonImageProps: SkeletonImageProps;
}
const UploadImages = ({
  images,
  formProps,
  label,
  uploadLimit = 5,
  skeletonImageProps,
  onViewImages,
  onUpload,
  onDelete
}: UploadImagesProps) => {
  const visibleImages = images.filter((image) => !image._destroy);
  return (
    <>
      <Typography variant={'textSmRegular'} mb={1}>
        {label}
      </Typography>
      <Grid
        container
        gap={2}
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="flex-start"
      >
        {visibleImages.length < uploadLimit && (
          <Grid item>
            <UploadButton
              images={images}
              formProps={formProps}
              onUpload={onUpload}
            />
          </Grid>
        )}
        {(images || []).map((image: UploadedImg, idx: number) => {
          if (image._destroy) return null;
          return (
            <Grid item key={`uploaded-image-${idx}`}>
              <UploadedImage
                images={visibleImages}
                image={image}
                index={idx}
                onViewImages={onViewImages}
                onDelete={onDelete}
                // TBD
                skeletonImageProps={{
                  ...skeletonImageProps
                  // children: <Image src={image.src} />
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default UploadImages;
