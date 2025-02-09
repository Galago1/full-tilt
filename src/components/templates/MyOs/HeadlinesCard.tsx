import { Grid, SxProps, Theme, useTheme } from '@mui/material';
import { isEmpty } from 'lodash';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import BasicEmptyState from 'src/components/molecules/BasicEmptyState/BasicEmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import { Announcement01Icon } from 'src/components/particles/theme/icons/AlertsAndFeedback/announcement-01';
import { ChevronRightIcon } from 'src/components/particles/theme/icons/Arrows/chevron-right';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import SharedListCardContent, {
  SharedListCardContentProps
} from './SharedListCardContent/SharedListCardContent';
import { Headline } from './types';

const statusMap: any = {
  active: 'Open',
  open: 'Open',
  archived: 'Archived',
  completed: 'Archived',
  resolved: 'Archived'
};

interface ContentProps {
  headlines: Headline[];
  sharedListCardContentProps: SharedListCardContentProps;
  loading: boolean;
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
}
const Content = ({
  headlines,
  sharedListCardContentProps,
  loading,
  onClickEmptyState,
  emptyStateSubtitle
}: ContentProps) => {
  if (!headlines || loading || (!loading && isEmpty(headlines)))
    return (
      <BasicEmptyState
        icon={loading ? null : <Announcement01Icon />}
        title={loading ? '' : `No Headlines`}
        emptyStateHeight={'auto'}
        subtitle={loading ? '' : emptyStateSubtitle}
        slots={{
          gridSx: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            p: 0,
            pb: responsiveSpacing
          }
        }}
        buttonProps={
          !loading && onClickEmptyState
            ? {
                onClick: onClickEmptyState,
                label: 'Add Headline',
                variant: 'outlined',
                color: 'secondary',
                sx: { mt: 2 }
              }
            : undefined
        }
      >
        {loading && <LoadingIndicator />}
      </BasicEmptyState>
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
      {headlines.map((headline, index) => (
        <SharedListCardContent
          {...sharedListCardContentProps}
          key={headline.id}
          id={headline.id}
          onClick={headline.onClick}
          status={statusMap[headline.status]}
          type={headline.type}
          priority={headline.priority}
          title={headline.title}
          icon={headline.icon ?? <Announcement01Icon />}
          index={index}
          listLength={headlines.length}
          useType={true}
        />
      ))}
    </Grid>
  );
};

export interface HeadlinesCardProps extends Omit<CardProps, 'slots'> {
  headlines?: Headline[];
  slots?: {
    sharedListCardContentProps: SharedListCardContentProps;
  };
  cardSlots?: CardProps['slots'];
  loading?: boolean;
  onClickEmptyState?: () => void;
  onHeaderClick?: () => void;
  emptyStateSubtitle?: any;
}

export const HeadlinesCard = ({
  headlines = [],
  slots,
  cardSlots,
  loading,
  onClickEmptyState,
  onHeaderClick,
  emptyStateSubtitle,
  ...props
}: HeadlinesCardProps) => {
  const { sharedListCardContentProps } = slots ?? {};
  const theme = useTheme();
  const contentSx: SxProps<Theme> = {
    px: responsiveSpacing,
    pb: { xs: 0, sm: 0, md: 0 },
    pt: 0,
    height: '100%'
  };
  return (
    <Card
      showActions={false}
      sx={{
        paddingBottom: '16px',
        height: '100%',
        maxHeight: 310.25,
        border: theme.border.outlinedButton,
        borderRadius: theme.borderRadius.xl,
        boxShadow: theme.customShadows.xs
      }}
      {...props}
      slots={{
        boxProps: { height: '100%' },
        cardContentProps: { sx: contentSx },
        ...cardSlots
      }}
    >
      <Grid container flexDirection="column" gap={2} height={'100%'}>
        <Grid item display="flex" alignItems="center">
          <AvatarAndText
            spacing={0}
            gap={1}
            alignItems={'center'}
            leftIcon={<Announcement01Icon />}
            leftIconGridProps={{ display: 'flex' }}
            title={`My Headlines`}
            textGridItemProps={{ flex: 1 }}
            childrenGridProps={{ display: 'flex' }}
            onClick={onHeaderClick}
            sx={{ cursor: 'pointer' }}
          >
            <ChevronRightIcon />
          </AvatarAndText>
        </Grid>
        <Content
          headlines={headlines}
          sharedListCardContentProps={sharedListCardContentProps!}
          loading={loading!}
          onClickEmptyState={onClickEmptyState}
          emptyStateSubtitle={emptyStateSubtitle}
        />
      </Grid>
    </Card>
  );
};
