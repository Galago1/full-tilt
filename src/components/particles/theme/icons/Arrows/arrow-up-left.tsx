import { SvgIcon } from '@mui/material';
import type { SvgIconProps } from '@mui/material';

export const ArrowUpLeftIcon = (props: SvgIconProps): JSX.Element => {
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
          d="M17 17L7 7M7 7V17M7 7H17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
