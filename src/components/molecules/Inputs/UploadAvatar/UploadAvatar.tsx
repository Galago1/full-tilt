import { SxProps, Theme } from '@mui/material';
import { FieldInputProps, FormikProps } from 'formik';
import { useEffect, useRef, useState } from 'react';
import Avatar, { AvatarProps } from 'src/components/atoms/Avatar/Avatar';
import Badge, { BadgeProps } from 'src/components/atoms/Badge/Badge';
import FileInput from 'src/components/atoms/FileInput/FileInput';
import { Edit02Icon } from 'src/components/particles/theme/icons/General/edit-02';

export interface UploadAvatarProps {
  /**
   * The props to pass to the Avatar component.
   */
  avatarProps?: AvatarProps;
  /**
   *
   */
  field: FieldInputProps<any>;
  /**
   * the formik props
   */
  form: FormikProps<any>;
  /**
   * The image to display
   */
  image?: string;
  /**
   * The props to pass to the Badge component.
   */
  badgeProps?: BadgeProps;
  /**
   * The props to pass to the FileInput component.
   */
  accept?: string;
  sx?: SxProps<Theme>;
}
const UploadAvatar = ({
  image,
  avatarProps,
  field,
  form,
  badgeProps,
  accept,
  ...props
}: UploadAvatarProps) => {
  const [theImage, _setImage] = useState('');
  const inputFileRef = useRef(null);

  useEffect(() => {
    if (image) {
      _setImage(image);
    }
  }, []);

  const cleanup = () => {
    URL.revokeObjectURL(theImage);
    if (inputFileRef?.current) {
      inputFileRef.current = null;
    }
  };

  const setImage = (newImage: any) => {
    if (theImage) {
      cleanup();
    }
    _setImage(newImage);
  };

  const handleOnChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    field: FieldInputProps<any>,
    form: FormikProps<any>
  ) => {
    const newImage = event.target?.files?.[0];
    form.setFieldValue(field.name, newImage);
    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
  };

  return (
    <>
      <FileInput
        ref={inputFileRef}
        accept="image/*,.heic"
        hidden
        // id="avatar-image-upload"
        {...props}
        onChange={(event: any) => handleOnChange(event, field, form)}
      />
      <Badge
        overlap="circular"
        sx={{ '&:hover': { cursor: 'pointer' } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <Avatar
            // eslint-disable-next-line react/no-children-prop
            children={
              <Edit02Icon
                sx={{
                  width: (theme: Theme) => theme.spacing(1.5),
                  height: (theme: Theme) => theme.spacing(1.5)
                }}
              />
            }
            sx={{
              width: (theme: Theme) => theme.spacing(2.75),
              height: (theme: Theme) => theme.spacing(2.75),
              bgcolor: (theme: Theme) => theme.palette.common.black,
              color: (theme: Theme) => theme.palette.common.white
            }}
          />
        }
        {...badgeProps}
        onClick={() => {
          (inputFileRef.current as any)?.click();
        }}
      >
        <Avatar src={theImage || undefined} {...avatarProps} />
      </Badge>
    </>
  );
};
export default UploadAvatar;
