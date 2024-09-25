import {
  Grid,
  SxProps,
  Theme,
  Typography,
  TypographyProps
} from '@mui/material';
import { isEmpty } from 'lodash';

import Divider from 'src/components/atoms/Divider/Divider';
import { ItemWithContent } from 'src/components/molecules';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import { ItemWithContentProps } from 'src/components/molecules/ItemWithContent/ItemWithContent';
import EmptyState from '../../molecules/EmptyState/EmptyState';
import { NumericFormat } from 'react-number-format';

interface ContentProps {
  /**
   * Item to display with content
   */
  item: ItemWithContentProps;
}

const Content = ({ item }: ContentProps) => {
  return (
    <Grid
      container
      flexDirection={'column'}
      flexWrap={'nowrap'}
      justifyContent={'flex-start'}
      sx={{
        height: '100%',
        // Get total
        // 385 total height
        maxHeight: {
          xs: `calc(100vh - 334px)`,
          sm: `calc(100vh - 334px)`,
          md: `calc(100vh - 350px)`
        },
        overflowY: 'scroll',
        pt: 0,
        '&': {
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        },
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        paddingTop: 0
      }}
    >
      <ItemWithContent {...item} />
    </Grid>
  );
};

export interface ItemListProps {
  sx?: SxProps<Theme>;
  /**
   * The loading status
   */
  isLoading: boolean;
  /**
   * Item list
   */
  items: ItemWithContentProps[];
  /**
   * form props
   */
  children?: React.ReactNode;
  /**
   * Typography props
   */
  typographyProps: TypographyProps;
  /**
   * Processing fees
   * @default 0
   */
  processingFees?: number;
  /**
   * Service fees
   */
  serviceFees?: number;
  /**
   * Item subtotal
   */
  itemSubtotal?: number;
}

const ItemList = ({
  sx,
  isLoading,
  items,
  children,
  typographyProps,
  processingFees = 0,
  serviceFees,
  itemSubtotal,
  ...props
}: ItemListProps) => {
  if (isEmpty(items)) {
    return (
      <EmptyState
        sx={{ my: { xs: 2 }, mb: { xs: 3 } }}
        avatarAndTextProps={{
          title: 'No items',
          subtitle: 'No items currently in the cart.'
        }}
      />
    );
  }
  return (
    <Grid
      container
      flexDirection={'column'}
      sx={{
        ...sx
      }}
      {...props}
    >
      <Grid item>
        <Typography {...typographyProps} />
      </Grid>
      <Grid item flexGrow={1}>
        {items.map((item: ItemWithContentProps, index: number) => {
          const isLast = index === items.length - 1;
          return (
            <Grid
              item
              key={`item-list-index[${index}]`}
              sx={{ mb: isLast ? 2 : 0, position: 'relative' }}
            >
              <Content item={item} />
              {!isLast && <Divider sx={{ my: 2 }} />}
            </Grid>
          );
        })}
      </Grid>

      <Grid item>
        <Divider sx={{ mb: 3 }} />
      </Grid>

      <Grid item flexGrow={1}>
        <AvatarAndText
          sx={{ mb: 3 }}
          textSx={{ flexDirection: 'row', width: '100%' }}
          titleTypography={{
            variant: 'textSmMedium',
            sx: { flexGrow: 1 }
          }}
          title={'Subtotal'}
          subtitle={
            <NumericFormat
              value={itemSubtotal}
              displayType={'text'}
              thousandSeparator={true}
              decimalScale={2}
              fixedDecimalScale
              prefix={'$'}
            />
          }
          subtitleTypography={{
            variant: 'textSmMedium'
          }}
        />
        <AvatarAndText
          sx={{ mb: 3 }}
          textSx={{ flexDirection: 'row', width: '100%' }}
          titleTypography={{
            variant: 'textSmRegular',
            sx: { flexGrow: 1 }
          }}
          title={'Processing Fees'}
          subtitle={
            <>
              (
              <NumericFormat
                value={processingFees}
                displayType={'text'}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale
                prefix={'$'}
              />
              )
            </>
          }
          subtitleTypography={{
            variant: 'textSmMedium'
          }}
        />
        {serviceFees ? (
          <AvatarAndText
            sx={{ mb: 2 }}
            textSx={{ flexDirection: 'row', width: '100%' }}
            titleTypography={{
              variant: 'textSmMedium',
              sx: { flexGrow: 1 }
            }}
            title={'Service Fees'}
            subtitle={
              <>
                (
                <NumericFormat
                  value={serviceFees}
                  displayType={'text'}
                  thousandSeparator={true}
                  decimalScale={2}
                  fixedDecimalScale
                  prefix={'$'}
                />
                )
              </>
            }
            subtitleTypography={{
              variant: 'textSmMedium'
            }}
          />
        ) : null}
      </Grid>

      {children && children}
    </Grid>
  );
};
export default ItemList;
