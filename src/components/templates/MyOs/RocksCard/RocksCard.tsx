import {
  capitalize,
  Grid,
  SxProps,
  Theme,
  Typography,
  useTheme
} from '@mui/material';
import { isEmpty } from 'lodash';
import { Fragment } from 'react/jsx-runtime';
import Button from 'src/components/atoms/Button/Button';
import Divider from 'src/components/atoms/Divider/Divider';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import BasicEmptyState from 'src/components/molecules/BasicEmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import {
  AlertTriangleIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  RockIcon,
  ThumbsUpIcon,
  Users01Icon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { Rock } from '../types';
import RockStatusForm, { RockStatus } from './RockStatusForm/RockStatusForm';
import ListPopover, { useListPopover } from './ListPopover/ListPopover';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';

// const rockTypeOptions: SelectOption[] = [
//   { label: { value: labelMap.company }, value: 'company' },
//   { label: { value: labelMap.individual }, value: 'individual' }
// ];

// completed on_track off_track
const rockStatusOptions: SelectOption[] = [
  { label: { value: 'Off-Track' }, value: RockStatus.OFF_TRACK },
  { label: { value: 'On-Track' }, value: RockStatus.ON_TRACK },
  { label: { value: 'Completed' }, value: RockStatus.COMPLETED }
];

const rockStatusIconMap = {
  [RockStatus.COMPLETED]: <CheckCircleIcon sx={{ color: 'success.500' }} />,
  [RockStatus.ON_TRACK]: <ThumbsUpIcon />,
  [RockStatus.OFF_TRACK]: <AlertTriangleIcon sx={{ color: 'error.500' }} />
};

interface RockCardItemProps {
  index: number;
  rock: Rock;
  loading: boolean;
  rocks: Rock[];
}
const RockCardItem = ({ index, rock, loading, rocks }: RockCardItemProps) => {
  const {
    anchorEl,
    handleClick: handleRockStatusOpen,
    handleClose,
    handleOptionClick
  } = useListPopover(rock.onChangeRockStatus!);
  const theme = useTheme();
  return (
    <Fragment key={rock.id}>
      <Grid
        item
        xs={12}
        onClick={rock.onClick}
        sx={{
          cursor: 'pointer',
          '&:hover': { backgroundColor: 'grey.50' },
          pt: 2
        }}
      >
        <Grid container alignItems="center" gap={2}>
          <Grid item flex={1}>
            <AvatarAndText
              gap={1}
              flexWrap="nowrap"
              leftComponent={
                <>
                  <RockStatusForm
                    isTransitioning={loading}
                    status={rock.rockStatus}
                    handleRockStatusOpen={handleRockStatusOpen}
                  />
                  <ListPopover
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    options={rockStatusOptions}
                    handleOptionClick={handleOptionClick}
                    iconMap={rockStatusIconMap}
                    id={rock.id}
                  />
                </>
              }
              leftComponentItemSx={{
                alignSelf: 'flex-start'
              }}
              title={rock.title}
              alignItems="center"
              titleTypography={{
                sx: { display: 'flex', alignItems: 'center' }
              }}
              subtitle={
                <Grid
                  container
                  alignItems={'center'}
                  gap={0.5}
                  flexWrap={'nowrap'}
                >
                  <Grid item container flexDirection={'column'} gap={1.5}>
                    <Grid item display={'flex'} gap={1} alignItems={'center'}>
                      <CalendarIcon sx={{ color: theme.palette.grey[400] }} />
                      <Typography variant="textSmMedium">
                        Quarter {capitalize(rock.quarter || '')}
                      </Typography>
                      <Users01Icon sx={{ color: theme.palette.grey[400] }} />
                      <Typography variant="textSmMedium">
                        {rock.people}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              }
              subtitleTypography={{
                variant: 'textSmRegular'
              }}
              textSubtitleGridItemProps={{
                sx: { display: 'flex', alignItems: 'center' }
              }}
            />
          </Grid>

          <Grid item display={'flex'} alignSelf={'flex-start'}>
            <Button
              variant="text"
              color="secondary"
              // onClick={okr.onClick}
              sx={{ '&': { minWidth: 'auto' } }}
              label={<ArrowUpRightIcon />}
            />
          </Grid>
        </Grid>
        {index !== rocks.length - 1 && <Divider sx={{ mt: 2 }} />}
      </Grid>
    </Fragment>
  );
};

interface RocksCardContentProps {
  rocks: Rock[];
  loading: boolean;
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
}
const RocksCardContent = ({
  rocks,
  onClickEmptyState,
  loading,
  emptyStateSubtitle
}: RocksCardContentProps) => {
  if (!rocks || loading || (!loading && isEmpty(rocks)))
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
          icon={loading ? null : <RockIcon />}
          title={loading ? '' : `No Rocks`}
          subtitle={loading ? '' : emptyStateSubtitle}
          buttonProps={
            !loading && onClickEmptyState
              ? {
                  onClick: onClickEmptyState,
                  label: `Add Rock`,
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
      flexDirection="row"
      sx={{
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        // 24 + 30.5 + 16
        height: {
          xs: '100%',
          sm: 'calc(100% - 70.5px)'
        },

        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        maxHeight: '280px',
        minHeight: '280px',
        pb: 8
      }}
      gap={0}
    >
      {rocks.map((rock, index) => (
        <RockCardItem
          key={rock.id}
          index={index}
          rock={rock}
          rocks={rocks}
          loading={loading}
        />
      ))}
    </Grid>
  );
};

export interface RocksCardProps extends Omit<CardProps, 'slots'> {
  rocks?: Rock[];
  cardSlots?: CardProps['slots'];
  loading?: boolean;
  onClickEmptyState?: () => void;
  onHeaderClick?: () => void;
  emptyStateSubtitle?: any;
}

const RocksCard = ({
  rocks = [],
  cardSlots,
  loading,
  onClickEmptyState,
  emptyStateSubtitle,
  onHeaderClick,
  ...props
}: RocksCardProps) => {
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
            leftIcon={<RockIcon />}
            leftIconGridProps={{ display: 'flex' }}
            title={`My Rocks`}
            textGridItemProps={{ flex: 1 }}
            childrenGridProps={{ display: 'flex' }}
            onClick={onHeaderClick}
            sx={{ cursor: 'pointer' }}
          >
            <ChevronRightIcon />
          </AvatarAndText>
        </Grid>
        <RocksCardContent
          rocks={rocks}
          loading={loading!}
          onClickEmptyState={onClickEmptyState}
          emptyStateSubtitle={emptyStateSubtitle}
        />
      </Grid>
    </Card>
  );
};

export default RocksCard;
