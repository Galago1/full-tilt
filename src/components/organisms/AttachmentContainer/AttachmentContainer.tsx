import { Box, BoxProps, Grid, GridProps, SxProps, Theme } from '@mui/material';
import AvatarAndText, {
  AvatarAndTextProps
} from 'src/components/molecules/AvatarAndText/AvatarAndText';
import ButtonList, {
  ButtonListProps
} from 'src/components/molecules/ButtonList/ButtonList';
import FileUploadBase from '../FileUploadBase';
import { FileUploadBaseProps } from '../FileUploadBase/FileUploadBase';

// Inline style for the Grid item containing AvatarAndText
const avatarAndTextStyle = {
  flexGrow: 1,
  overflow: 'hidden', // Hide overflow
  whiteSpace: 'nowrap', // Prevent wrapping to ensure overflow happens
  textOverflow: 'ellipsis' // Add ellipsis (optional, based on AvatarAndText's content)
};

interface FinishedStateProps {
  /**
   * The finished state typography props
   */
  avatarAndTextProps: AvatarAndTextProps;
  /**
   * The finished state button props
   */
  buttonListProps: ButtonListProps;
  /**
   * The finished state container props
   */
  containerProps?: GridProps;
  /**
   * The finished state item props
   */
  itemSx?: SxProps<Theme>;
}
const FinishedState = ({
  avatarAndTextProps,
  buttonListProps,
  containerProps,
  itemSx = avatarAndTextStyle
}: FinishedStateProps) => {
  return (
    <Grid container alignItems={'center'} {...containerProps}>
      <Grid item sx={itemSx}>
        <AvatarAndText {...avatarAndTextProps} />
      </Grid>
      <Grid item>
        <ButtonList {...buttonListProps} />
      </Grid>
    </Grid>
  );
};

export interface AttachmentContainerProps extends BoxProps {
  /**
   * The finished state props
   */
  finishedStateProps?: FinishedStateProps;
  /**
   * The file upload base props
   */
  fileUploadBaseProps?: FileUploadBaseProps;
}

const AttachmentContainer = ({
  finishedStateProps,
  fileUploadBaseProps,
  ...props
}: AttachmentContainerProps) => {
  return (
    <Box {...props}>
      {finishedStateProps && <FinishedState {...finishedStateProps} />}
      {fileUploadBaseProps && <FileUploadBase {...fileUploadBaseProps} />}
    </Box>
  );
};
export default AttachmentContainer;
