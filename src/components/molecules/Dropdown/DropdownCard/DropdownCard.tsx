import { Box, BoxProps, Popper, PopperProps } from '@mui/material';
import {
  DropdownAnchor,
  DropdownAnchorProps
} from '../DropdownAnchor/DropdownAnchor';

export interface DropdownCardProps extends BoxProps {
  slots?: {
    /**
     * the dropdownAnchorProps
     */
    dropdownAnchorProps?: DropdownAnchorProps;
    /**
     * the popperProps
     */
    popperProps?: PopperProps;
  };
}
const DropdownCard = ({ slots, ...props }: DropdownCardProps) => {
  const { dropdownAnchorProps, popperProps } = slots || {};
  return (
    <Box {...props}>
      <DropdownAnchor {...dropdownAnchorProps!} />
      {popperProps && <Popper {...popperProps} />}
    </Box>
  );
};
export default DropdownCard;
