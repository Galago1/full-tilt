import { Box } from '@mui/material';

import { ImageDetail, ImageDetailProps } from './ImageDetail';

//Style
import { Typography } from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';

// export default {
//   title: 'Atoms/Image Detail',
//   component: ImageDetail
// };

export default {
  title: 'Organisms/Taggable Image/Image Detail',
  component: ImageDetail
} as ComponentMeta<typeof ImageDetail>;

export const Default: Story<ImageDetailProps> = () => (
  <Box>
    <Box display="flex" flexDirection="row" py="10px">
      <Typography sx={{ marginRight: '55px' }}>Selected item</Typography>
      <Typography sx={{ marginRight: '51px' }}>Tagged item</Typography>
      <Typography> item added to cart</Typography>
    </Box>
    <Box p="11px 0px 15px 16px">
      <ImageDetail
        variant="selected"
        sx={{ marginRight: '86px' }}
        pillValue={1}
      />
      <ImageDetail sx={{ marginRight: '88px' }} pillValue={1} variant={null} />
      <ImageDetail variant="added" pillValue={1} />
    </Box>
  </Box>
);
