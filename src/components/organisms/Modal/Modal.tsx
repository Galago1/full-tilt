import { Box, BoxProps, Modal as MuiModal } from '@mui/material';
import type { ModalProps as MuiModalProps } from '@mui/material/Modal';
import { JSXElementConstructor, ReactElement } from 'react';
import ModalActions from 'src/components/molecules/Modal/ModalActions';
import { ModalActionsProps } from 'src/components/molecules/Modal/ModalActions/ModalActions';
import ModalHeader, {
  ModalHeaderProps
} from 'src/components/molecules/Modal/ModalHeader/ModalHeader';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

const boxSx = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 'calc(100% - 2rem)', sm: 400 },
  bgcolor: 'background.paper',
  borderRadius: 0,
  boxShadow: 10,
  '&:focus': {
    outline: 'none !important'
  }
};
const childrenBoxSx = {
  px: responsiveSpacing
};
const styles = {
  boxSx,
  childrenBoxSx
};

export interface ModalProps extends Omit<MuiModalProps, 'slots'> {
  /**
   * Component to display
   */
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  /**
   * Click the backdrop to close
   * @default
   * true
   */
  useBackdropClick?: boolean;
  /**
   * Option to show or hide the close button
   * @default
   * true
   */
  showClose?: boolean;
  slots?: {
    /**
     * The modal header props
     */
    modalHeaderProps?: ModalHeaderProps;
    /**
     * The modal actions props
     */
    modalActionsProps?: ModalActionsProps;
    /**
     * The modal box props
     */
    boxProps?: BoxProps;
    /**
     * The modal hide actions box props
     */
    hideActionsBoxProps?: BoxProps;
    /**
     * The modal children box props
     */
    childrenBoxProps?: BoxProps;
  };
  /**
   * Option to show or hide the actions
   */
  showActions?: boolean;
}
const Modal = ({
  showActions = true,
  children,
  showClose = true,
  useBackdropClick = true,
  onClose,
  slots,
  ...props
}: ModalProps) => {
  const { TransitionProps, ...other } = props as any;
  const {
    modalHeaderProps,
    modalActionsProps,
    boxProps,
    hideActionsBoxProps,
    childrenBoxProps
  } = slots || {};
  return (
    <MuiModal
      {...other}
      onClose={(event: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
        if (useBackdropClick) {
          onClose?.(event, reason);
        }
      }}
    >
      <Box sx={styles.boxSx} {...boxProps}>
        <ModalHeader
          onHide={onClose}
          showClose={showClose ?? modalHeaderProps?.showClose}
          {...modalHeaderProps}
        />
        <Box sx={styles.childrenBoxSx} {...childrenBoxProps}>
          {children}
        </Box>
        {showActions ? (
          <ModalActions {...modalActionsProps} />
        ) : (
          <Box sx={{ pt: responsiveSpacing }} {...hideActionsBoxProps} />
        )}
      </Box>
    </MuiModal>
  );
};
export default Modal;
