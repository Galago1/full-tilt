import { Typography, TypographyTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/types';

export interface NewlineTextProps {
  /**
   * text to be displayed
   */
  text: string;
  /**
   * Typography props
   */
  typographyProps?: OverridableComponent<TypographyTypeMap<{}, 'span'>>;
}
const NewLineText = ({ text, typographyProps }: NewlineTextProps) => {
  if (!text) return null;
  const textArr = text.split('\n');
  return (
    <>
      {textArr.map((str, idx) => (
        <Typography
          variant={'textLgSemibold'}
          fontWeight={'light'}
          component={'p'}
          key={`new-line-text-index=[${idx}]`}
          sx={{ mb: idx === textArr.length - 1 ? 0 : 1 }}
          {...typographyProps}
        >
          {str}
        </Typography>
      ))}
    </>
  );
};

export default NewLineText;
