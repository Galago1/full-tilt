import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Badge = (theme: Theme) => {
  return {
    MuiBadge: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            '& .MuiBadge-badge': {
              backgroundColor: theme.palette.grey[600],
              color: theme.palette.primary.contrastText,
              '&': {
                padding: '0 4px',
                height: 18,
                minWidth: 18
              }
            }
          }
        }
      ],
      styleOverrides: {
        dot: {
          width: 10,
          height: 10,
          // borderRadius: '50%',
          borderRadius: 0
        }
      }
    }
  };
};

export default Badge;
