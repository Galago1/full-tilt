import { Box } from '@mui/material';
import { Field, FieldAttributes } from 'formik';
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState
} from 'react';
import Chip, { ChipProps } from 'src/components/atoms/Chip/Chip';
import TextInputBase from 'src/components/atoms/InputBase/TextInputBase/TextInputBase';

export interface InlineInputChipProps {
  /**
   * The props for the Chip component
   */
  chipProps: ChipProps;
  /**
   * The props for the Field component
   */
  fieldAttributes: FieldAttributes<any>;
  /**
   * The function to call when the chip is clicked
   * @param setShowInput
   * @param ref
   * @returns
   */
  onChipClick: (
    setShowInput: Dispatch<SetStateAction<boolean>>,
    ref: MutableRefObject<any>
  ) => void;
}
const InlineInputChip = ({
  chipProps,
  fieldAttributes,
  onChipClick,
  ...props
}: InlineInputChipProps) => {
  const [showInput, setShowInput] = useState<boolean>(false);

  const ref = useRef(null);
  const boxRef = useRef<any>(null);
  return (
    <Box sx={{ position: 'relative' }} ref={boxRef} {...props}>
      {showInput ? (
        <Field
          component={TextInputBase}
          variant={'standard'}
          sx={{
            position: 'absolute',
            zIndex: showInput ? 2 : 0,
            '& .MuiInputBase-input': {
              // padding: '9px 14px'
              padding: '7.5px 13.5px'
            }
          }}
          inputRef={ref}
          InputProps={{
            disableUnderline: true,
            sx: {
              fontSize: '0.875rem',
              padding: '0.5px 17px 0 0 ',
              letterSpacing: 0,
              width:
                (boxRef.current?.children?.[1]?.clientWidth ||
                  boxRef.current?.clientWidth) + 20
            }
          }}
          name={fieldAttributes.name}
          onBlur={() => {
            setShowInput(false);
            fieldAttributes.onBlur();
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            fieldAttributes.onChange(e.target.value);
          }}
        />
      ) : null}
      <Chip
        {...chipProps}
        onClick={() => {
          onChipClick(setShowInput, ref);
        }}
        sx={{
          color: (theme) =>
            showInput ? 'transparent' : theme.palette.secondary[700],
          backgroundColor: (theme) => theme.palette.secondary[100],
          '&:hover': {
            backgroundColor: (theme) =>
              showInput
                ? theme.palette.secondary[100]
                : theme.palette.secondary[100]
          },
          '&:focus': {
            backgroundColor: (theme) =>
              showInput
                ? theme.palette.secondary[100]
                : theme.palette.secondary[100]
          }
          // MuiButtonBase-root-MuiChip-root:hover
        }}
      />
    </Box>
  );
};

export default InlineInputChip;
