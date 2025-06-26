import {
  Dispatch,
  forwardRef,
  SetStateAction,
  useImperativeHandle
} from 'react';
// React
import { useEffect, useRef, useState, useCallback } from 'react';
import Cropper, { Area, MediaSize } from 'react-easy-crop';

// Utils
import getCroppedImg from './cropImage';

// Material UI
import { Grid, Theme, Typography } from '@mui/material';

// SVGs
import getImageUrl from 'src/utils/getImageUrl';
import AvatarAndText from '../AvatarAndText/AvatarAndText';
import FileInput from 'src/components/atoms/FileInput/FileInput';
import determineResponsiveHeight from 'src/utils/determineResponsiveHeight';
import Button from 'src/components/atoms/Button/Button';
import Slider from 'src/components/atoms/Slider/Slider';
import SkeletonImage, {
  SkeletonImageProps
} from '../SkeletonImage/SkeletonImage';
import { FormikProps } from 'formik';

interface ImageCropperProps {
  isLoading?: boolean;
  imageSrc: string | null;
  croppedImage: string;
  crop: {
    x: number;
    y: number;
  };
  setCrop: Dispatch<
    SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  zoom: number;
  setZoom: Dispatch<SetStateAction<number>>;
  onCropComplete: (croppedArea: Area, croppedAreaPixels: Area) => void;
  onMediaLoaded: (mediaSize: MediaSize) => void;
  objectFit: 'vertical-cover' | 'horizontal-cover';
  /**
   * skeleton image props
   */
  skeletonImageProps: SkeletonImageProps;
}
const ImageCropper = ({
  isLoading,
  imageSrc,
  croppedImage,
  crop,
  setCrop,
  zoom,
  setZoom,
  onCropComplete,
  onMediaLoaded,
  skeletonImageProps,
  objectFit
}: ImageCropperProps) => {
  if (isLoading) return <SkeletonImage {...skeletonImageProps} />;
  if (imageSrc && croppedImage)
    return (
      <>
        <SkeletonImage {...skeletonImageProps} />
      </>
    );
  if (imageSrc && !croppedImage)
    return (
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={16 / 9}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        onMediaLoaded={onMediaLoaded}
        objectFit={objectFit} // 'auto-cover'
        // cropSize={{ width: 600, height: 337 }}
        // onCropAreaChange={(croppedArea, croppedAreaPixels) => {
        // }}
      />
    );
  return <></>;
};
interface CropperButtonProps {
  isLoading?: boolean;
  croppedImage: string;
  imageSrc: string | null;
  zoom: number;
  setZoom: Dispatch<SetStateAction<number>>;
  showCroppedImage: () => Promise<void>;
  onReplace: () => void;
}
const CropperButton = ({
  isLoading,
  croppedImage,
  imageSrc,
  zoom,
  setZoom,
  showCroppedImage,
  onReplace
}: CropperButtonProps) => {
  if (isLoading) return <></>;
  if (croppedImage)
    return (
      <Button
        sx={{
          position: 'absolute',
          bottom: 10,
          left: 10
        }}
        color="secondary"
        variant={'contained'}
        onClick={onReplace}
        label={'Replace'}
      />
    );
  return imageSrc && !croppedImage ? (
    <>
      <Button
        sx={{
          position: 'absolute',
          bottom: 10,
          left: 10
        }}
        color="secondary"
        variant={'contained'}
        onClick={showCroppedImage}
        label={'Set'}
      />
      <Slider
        sx={{
          position: 'absolute',
          bottom: { xs: 12, sm: 19 },
          marginLeft: { xs: '1rem' },
          left: '50%',
          width: '50%',
          transform: 'translate(-50%, 0%)'
        }}
        value={zoom}
        min={1}
        max={3}
        step={0.1}
        aria-labelledby="Zoom"
        onChange={(e, zoom) => setZoom(zoom as number)}
      />
    </>
  ) : null;
};

export interface ImageUploadProps {
  defaultSrc?: string | null;
  isLoading?: boolean;
  formProps: FormikProps<any>;
  /**
   * skeleton image props
   */
  skeletonImageProps: SkeletonImageProps;
}

const ImageUpload = forwardRef(
  (
    {
      defaultSrc = null,
      formProps,
      isLoading,
      skeletonImageProps,
      ...props
    }: ImageUploadProps,
    ref
  ) => {
    const [imageSrc, setImageSrc] = useState(defaultSrc);
    const inputRef = useRef<HTMLInputElement>();

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [objectFit, setObjectFit] =
      useState<'horizontal-cover' | 'vertical-cover'>('horizontal-cover');
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
    const [croppedImage, setCroppedImage] = useState('');

    const imageRef = useRef(null);
    const [boxHeight, setBoxHeight] = useState(0);

    useImperativeHandle(ref, () => ({
      showCroppedImage() {
        showCroppedImage();
      },
      imageCropped() {
        return croppedImage;
      },
      croppedAreaPixels() {
        return croppedAreaPixels;
      }
    }));

    useEffect(() => {
      setCroppedImage(defaultSrc as string);
    }, [defaultSrc]);

    const onCropComplete = useCallback(
      (croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
      },
      []
    );

    const onMediaLoaded = (mediaLoaded: MediaSize) => {
      setObjectFit(
        mediaLoaded.naturalWidth > mediaLoaded.naturalHeight
          ? 'vertical-cover'
          : 'horizontal-cover'
      );
    };

    const showCroppedImage = async () => {
      try {
        const img = await getCroppedImg(imageSrc as string, croppedAreaPixels);
        setCroppedImage(img as string);
        if (inputRef?.current?.value) {
          inputRef.current.value = '';
        }
        formProps.setFieldTouched('image');
        formProps.setFieldValue('image', img);
      } catch (e) {
        // console.error(e);
      }
    };

    const onChange = async (files: FileList) => {
      const file = files[0];

      if (!file.type.includes('image') && inputRef.current?.files) {
        inputRef.current.files = [] as unknown as FileList;
        return;
      }

      let imageDataUrl: string = await getImageUrl(file);
      setCroppedImage('');
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setImageSrc(imageDataUrl);
      formProps.setFieldTouched('image');
      formProps.setFieldValue('image', imageDataUrl);
    };

    const onReplace = () => {
      inputRef.current?.click();
      formProps.setFieldTouched('image');
    };

    const cropping = imageSrc && !croppedImage;

    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: (theme: Theme) => theme.palette.grey[100],
          borderRadius: 0,
          height: '100%'
        }}
        {...props}
      >
        <Grid
          item
          ref={(a) => {
            imageRef.current = a as any;
            setBoxHeight(determineResponsiveHeight(imageRef));
          }}
          sx={{
            height: boxHeight,
            width: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {!isLoading && !croppedImage && !cropping && (
            <AvatarAndText
              sx={{ height: '100%', textAlign: 'center' }}
              alignContent={'center'}
              justifyContent={'center'}
              title={
                <Typography
                  variant={'textSmRegular'}
                  fontWeight={'medium'}
                  component={'span'}
                >
                  Click to upload a photo
                  <Typography variant={'textSmRegular'} component={'span'}>
                    {' '}
                    or drag and drop
                  </Typography>
                </Typography>
              }
              subtitle={'PNG or JPG are accepted formats'}
            />
          )}
          {/* https://stackoverflow.com/questions/69761234/useform-hidden-nested-file-input-not-working */}
          <FileInput
            data-testid="file-input"
            ref={(instance) => {
              // Not working in tests
              // if (instance) ref(instance);
              inputRef.current = instance as HTMLInputElement;
            }}
            accept={'image/*'}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: 'pointer'
            }}
            onChange={(e: any) => onChange(e.target.files as FileList)}
            hidden={false}
          />

          <ImageCropper
            isLoading={isLoading}
            imageSrc={imageSrc}
            croppedImage={croppedImage}
            crop={crop}
            setCrop={setCrop}
            zoom={zoom}
            setZoom={setZoom}
            onCropComplete={onCropComplete}
            onMediaLoaded={onMediaLoaded}
            objectFit={objectFit}
            skeletonImageProps={skeletonImageProps}
          />
          <CropperButton
            isLoading={isLoading}
            croppedImage={croppedImage}
            imageSrc={imageSrc}
            zoom={zoom}
            setZoom={setZoom}
            showCroppedImage={showCroppedImage}
            onReplace={onReplace}
          />
        </Grid>
      </Grid>
    );
  }
);

ImageUpload.displayName = 'ImageUpload';
export default ImageUpload;
