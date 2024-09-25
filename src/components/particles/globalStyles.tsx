import { GlobalStyles } from '@mui/material';

const inputGlobalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      '#__next': {
        width: '100%',
        height: '100%'
      },

      a: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        '&:visited': {
          color: theme.palette.text.primary
        }
      },
      '*': {
        transition: 'height 0.5s ease'
        // transition: 'background-color 0.5s ease'
      },
      '.StripeElement': {
        // borderRadius: 8,
        padding: '12.5px 15px',
        border: theme.border.userProfile,
        width: '100%',
        '&--focus': {
          borderColor: '#088ab2',
          borderWidth: '2px',
          padding: '11.5px 15px'
        },
        '&:hover': {
          borderColor: '#101828'
        },
        '&--invalid': {
          marginBottom: 0
        },
        '&.error': {
          borderColor: '#f04438'
        },
        '&::placeholder': {
          color: '#a0a7b5'
        }
      }
      // button: {
      //   textTransform: 'inherit !important' as 'inherit'
      // }
    })}
  />
);

export default inputGlobalStyles;
