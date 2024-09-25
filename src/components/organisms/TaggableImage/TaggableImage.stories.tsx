import { Box, Grid } from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';
import { useState } from 'react';
import TaggableImage, { TaggableImageProps } from './TaggableImage';
// const image =
//   'https://robohash.org/2600:8800:468b:dd00:70d4:a424:8983:646f.png';
import image from 'src/assets/images/horizontal-test.png';

export default {
  title: 'Organisms/Taggable Image',
  component: TaggableImage
} as ComponentMeta<typeof TaggableImage>;

const Template: Story<TaggableImageProps> = (_args) => {
  const [pillValue, setPillValue] = useState<0 | 1 | 2 | 3>(0);
  const tags = [
    {
      // pillValue: 0,
      position: { left: 0.25, top: 0.25 },
      added: false
    }
  ];

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={7} mx={'auto'}>
        <Box sx={{ height: 'auto', width: 543 }}>
          <TaggableImage
            isXSmall={false}
            isMobile={false}
            imageUrl={image} //'https://placekitten.com/833/561'
            onTagAdd={(e) => {}}
            pillValue={pillValue}
            setPillValue={setPillValue}
            width={400}
            height={1000}
            selectedTagIndex={0}
            tags={tags}
            onSelectTag={() => {}}
            onUpdateTag={() => {}}
            skeletonImageProps={{
              children: <></>,
              skeletonProps: {}
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export const Default = Template.bind({});
