import { SvgIcon } from '@mui/material';
import type { SvgIconProps } from '@mui/material';

export const FilterLinesIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18M3 6H21M9 18H15"
          stroke="currentColor"
          strokeWidth={props.strokeWidth || '2'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
