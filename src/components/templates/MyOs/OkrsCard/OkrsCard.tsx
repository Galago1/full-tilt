import {
  capitalize,
  Grid,
  SxProps,
  Theme,
  Typography,
  useTheme
} from '@mui/material';
import { CalendarIcon } from '@mui/x-date-pickers';
import { isEmpty } from 'lodash';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import BasicEmptyState from 'src/components/molecules/BasicEmptyState';
import CircularProgressIndicator, {
  CircularProgressIndicatorSize
} from 'src/components/molecules/CircularProgressIndicator/CircularProgressIndicator';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import { ChevronRightIcon } from 'src/components/particles/theme/icons/Arrows/chevron-right';
import { TriangleIcon } from 'src/components/particles/theme/icons/Shapes/triangle';
import { User01Icon } from 'src/components/particles/theme/icons/Users/user-01';
import { Users01Icon } from 'src/components/particles/theme/icons/Users/users-01';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import SharedListCardContent from '../SharedListCardContent/SharedListCardContent';
import { Okr } from '../types';

const okrTypeOptions: any = {
  individual: <User01Icon sx={{ color: (theme) => theme.palette.grey[400] }} />,
  company: <Users01Icon sx={{ color: (theme) => theme.palette.grey[400] }} />
};

const okrTypeLabel: any = {
  individual: 'Individual',
  company: 'Company'
};

interface ContentProps {
  okrs: Okr[];
  loading: boolean;
  okrName?: 'OKR' | 'Rock';
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
}
const Content = ({
  okrs,
  okrName = 'OKR',
  onClickEmptyState,
  loading,
  emptyStateSubtitle
}: ContentProps) => {
  const theme = useTheme();
  if (!okrs || loading || (!loading && isEmpty(okrs)))
    return (
      <Grid
        item
        container
        sx={{
          height: {
            xs: '100%',
            sm: 'calc(100% - 70.5px)',
            minHeight: '140px'
          }
        }}
      >
        <BasicEmptyState
          emptyStateHeight={'auto'}
          sx={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          slots={{
            gridSx: {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex'
            }
          }}
          icon={loading ? null : <TriangleIcon />}
          title={loading ? '' : `No ${okrName}s`}
          subtitle={loading ? '' : emptyStateSubtitle}
          buttonProps={
            !loading && onClickEmptyState
              ? {
                  onClick: onClickEmptyState,
                  label: `Add ${okrName}`,
                  variant: 'outlined',
                  color: 'secondary',
                  sx: { mt: 2 }
                }
              : undefined
          }
        >
          {loading && <LoadingIndicator />}
        </BasicEmptyState>
      </Grid>
    );

  return (
    <Grid
      item
      container
      sx={{
        flex: 1,
        flexDirection: 'column',

        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        // maxHeight: '280px',
        maxHeight: 290.25,
        pb: responsiveSpacing
      }}
      flexWrap="nowrap"
      gap={0}
    >
      {okrs.map((okr, index) => (
        <SharedListCardContent
          key={okr.id}
          id={okr.id}
          // status={okr.status}
          type={okr.okrType}
          // priority={okr.priority}
          title={okr.title}
          icon={okrTypeOptions[okr.okrType!]}
          index={index}
          listLength={okrs.length}
          onClick={okr.onClick}
          useType
          leftComponent={
            <Grid sx={{ p: 0.5 }}>
              <CircularProgressIndicator
                size={CircularProgressIndicatorSize.XXSMALL}
                value={okr.percentage}
                hideValue={true}
              />
            </Grid>
          }
          subtitle={
            <Grid container alignItems={'center'} gap={0.5} flexWrap={'nowrap'}>
              <Grid item display={'flex'} gap={1} alignItems={'center'}>
                <CalendarIcon sx={{ color: theme.palette.grey[400] }} />
                <Typography variant="textSmMedium">
                  Quarter {capitalize(okr.quarter || '')}
                </Typography>
                {okrTypeOptions[okr.okrType!]}
                <Typography variant="textSmMedium">
                  {okrTypeLabel[okr.okrType!]}
                </Typography>
              </Grid>
            </Grid>
          }
        />
        // <Fragment key={okr.id}>
        //   <Grid
        //     item
        //     container
        //     display="flex"
        //     flexDirection="column"
        //     alignItems="flex-start"
        //     width={'100%'}
        //     onClick={okr.onClick}
        //     sx={{
        //       cursor: 'pointer',
        //       '&:hover': {
        //         backgroundColor: 'grey.50'
        //       },
        //       py: 2
        //     }}
        //   >
        //     <Grid item container flex={1}>
        //       <Grid item flexDirection={'row'} flex={1}>
        //         <AvatarAndText
        //           gap={1}
        //           flexWrap="nowrap"
        //           leftComponent={
        //             <Grid sx={{ p: 0.5 }}>
        //               <CircularProgressIndicator
        //                 size={CircularProgressIndicatorSize.XXSMALL}
        //                 value={okr.percentage}
        //                 hideValue={true}
        //               />
        //             </Grid>
        //           }
        //           leftComponentItemSx={{
        //             alignSelf: 'flex-start'
        //           }}
        //           title={okr.title}
        //           alignItems="center"
        //           titleTypography={{
        //             sx: { display: 'flex', alignItems: 'center' }
        //           }}
        //           subtitle={
        //             <Grid
        //               container
        //               alignItems={'center'}
        //               gap={0.5}
        //               flexWrap={'nowrap'}
        //             >
        //               <Grid item display={'flex'} gap={1} alignItems={'center'}>
        //                 <CalendarIcon sx={{ color: theme.palette.grey[400] }} />
        //                 <Typography variant="textSmMedium">
        //                   Quarter {capitalize(okr.quarter || '')}
        //                 </Typography>
        //                 {okrTypeOptions[okr.okrType!]}
        //                 <Typography variant="textSmMedium">
        //                   {okrTypeLabel[okr.okrType!]}
        //                 </Typography>
        //               </Grid>
        //             </Grid>
        //           }
        //           subtitleTypography={{
        //             variant: 'textSmRegular'
        //           }}
        //           textSubtitleGridItemProps={{
        //             sx: { display: 'flex', alignItems: 'center' }
        //           }}
        //         />
        //       </Grid>

        //       <Grid item display={'flex'} alignSelf={'flex-start'}>
        //         <Button
        //           variant="text"
        //           color="secondary"
        //           // onClick={okr.onClick}
        //           sx={{ '&': { minWidth: 'auto' } }}
        //           label={<ArrowUpRightIcon />}
        //         />
        //       </Grid>
        //     </Grid>
        //     {/* {index !== okrs.length - 1 && <Divider sx={{ mt: 2 }} />} */}

        //     <Grid item sx={{ width: '100%', py: 0, my: 0 }}>
        //       <Divider />
        //     </Grid>
        //   </Grid>
        // </Fragment>
      ))}
    </Grid>
  );
};

export interface OkrsCardProps extends Omit<CardProps, 'slots'> {
  okrs?: Okr[];
  cardSlots?: CardProps['slots'];
  loading?: boolean;
  okrName?: 'OKR' | 'Rock';
  onClickEmptyState?: () => void;
  onHeaderClick?: () => void;
  emptyStateSubtitle?: any;
}

const OkrsCard = ({
  okrs = [],
  cardSlots,
  loading,
  okrName,
  onClickEmptyState,
  emptyStateSubtitle,
  onHeaderClick,
  ...props
}: OkrsCardProps) => {
  const theme = useTheme();
  const contentSx: SxProps<Theme> = {
    px: responsiveSpacing,
    pb: { xs: 0 },
    pt: 0,
    height: '100%',
    overflow: 'hidden'
  };
  return (
    <Card
      showActions={false}
      {...props}
      sx={{
        height: '100%',
        maxHeight: '338px',
        minHeight: '338px',
        border: theme.border.outlinedButton,
        borderRadius: theme.borderRadius.xl,
        boxShadow: theme.customShadows.xs
      }}
      slots={{
        boxProps: { height: '100%', overflow: 'hidden' },
        cardContentProps: { sx: contentSx },
        ...cardSlots
      }}
    >
      <Grid
        container
        flexDirection="column"
        flexWrap={'nowrap'}
        gap={2}
        sx={{
          height: '100%',
          overflow: 'hidden'
          // pb: 2
        }}
      >
        <Grid item display={'flex'} alignItems={'center'}>
          <AvatarAndText
            spacing={0}
            gap={1}
            alignItems={'center'}
            leftIcon={<TriangleIcon />}
            leftIconGridProps={{ display: 'flex' }}
            title={`My ${okrName}s`}
            textGridItemProps={{ flex: 1 }}
            childrenGridProps={{ display: 'flex' }}
            onClick={onHeaderClick}
            sx={{ cursor: 'pointer' }}
          >
            <ChevronRightIcon />
          </AvatarAndText>
        </Grid>
        <Content
          okrs={okrs}
          loading={loading!}
          okrName={okrName}
          onClickEmptyState={onClickEmptyState}
          emptyStateSubtitle={emptyStateSubtitle}
        />
      </Grid>
    </Card>
  );
};
export default OkrsCard;
