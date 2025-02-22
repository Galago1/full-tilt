import { SvgIconProps, SvgIcon } from '@mui/material';

export const CatalogLogoIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon {...props}>
      <svg
        width="44"
        height="48"
        viewBox="0 0 44 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 2C9.84971 2 0 11.8497 0 24C0 36.1503 9.84971 46 22 46C32.9011 46 41.9503 38.0716 43.6959 27.6667H43.538C41.9098 33.9925 36.1674 38.6667 29.3334 38.6667C21.2332 38.6667 14.6667 32.1002 14.6667 24C14.6667 15.8998 21.2332 9.33333 29.3334 9.33333C36.1674 9.33333 41.9098 14.0075 43.538 20.3333H43.6959C41.9503 9.92838 32.9011 2 22 2Z"
          fill="#A4BCFD"
        />
        <path
          d="M0 24C0 11.8497 9.84975 2 22 2C32.901 2 41.9503 9.92838 43.6959 20.3333H28.8713C27.2432 14.0075 21.5008 9.33333 14.6667 9.33333C6.5665 9.33333 0 15.8998 0 24Z"
          fill="#3538CD"
        />
        <path
          d="M0 24C0 36.1503 9.84975 46 22 46C32.901 46 41.9503 38.0716 43.6959 27.6667H28.8713C27.2432 33.9925 21.5008 38.6667 14.6667 38.6667C6.5665 38.6667 0 32.1002 0 24Z"
          fill="#3538CD"
        />
      </svg>
    </SvgIcon>
  );
};
