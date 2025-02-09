import type { TypographyProps } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import BlockContainer from 'src/components/organisms/BlockContainer/BlockContainer';
import { CatalogLogoIcon } from '../theme/icons/Logos/catalog-logo';
import { CatalogIcon } from '../theme/icons/Logos/catalog';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Foundation/Logos',
  component: Typography
  // parameters: {
  //   docs: {
  //     page: null //'Icons'
  //   }
  // }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Typography>;

const mainList = [{ full: CatalogIcon, logo: CatalogLogoIcon }];
const placeholders: any[] = mainList;

const Template: ComponentStory<typeof Typography> = (args: TypographyProps) => {
  return (
    <>
      <BlockContainer
        title="Company Logos"
        description="General icons typically used in most apps."
        containerSx={{ mb: 3 }}
      >
        <Grid container>
          {mainList.map((listItem: any, idx) => {
            return (
              <Grid
                item
                xs={12}
                sm={8}
                md={8}
                lg={6}
                container
                sx={{ flexDirection: { sm: 'column', md: 'row' } }}
                spacing={2}
                key={`logo-comp-${idx}`}
              >
                <Grid item xs={12} sm>
                  {listItem.full({ ...args, sx: { overflow: 'visible' } })}
                </Grid>
                <Grid item xs={2}>
                  {listItem.logo({ ...args, sx: { overflow: 'visible' } })}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </BlockContainer>

      <BlockContainer
        title="Placeholder Company Logos"
        description="General icons typically used in most apps."
      >
        <Grid container spacing={4}>
          {placeholders.map((listItem: any, idx) => {
            return (
              <Grid
                item
                xs={12}
                sm={8}
                md={8}
                lg={6}
                container
                sx={{ flexDirection: { sm: 'column', md: 'row' } }}
                spacing={2}
                key={`logo-placeholder-comp-${idx}`}
              >
                <Grid item xs={12} sm>
                  {listItem.full({ ...args, overflow: 'visible' })}
                </Grid>
                <Grid item xs={2}>
                  {listItem.logo({ ...args, overflow: 'visible' })}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </BlockContainer>
    </>
  );
};

export const Logos = Template.bind({});
Logos.args = {};
