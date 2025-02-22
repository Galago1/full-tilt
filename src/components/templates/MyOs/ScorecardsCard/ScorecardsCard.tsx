import { Collapse, Grid, GridProps, useTheme } from '@mui/material';
import { Field, Formik, FormikHelpers } from 'formik';
import { isEmpty } from 'lodash';
import { useState } from 'react';
import Chip from 'src/components/atoms/Chip/Chip';
import Divider from 'src/components/atoms/Divider/Divider';
import Link from 'src/components/atoms/Link/Link';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import BasicEmptyState from 'src/components/molecules/BasicEmptyState/BasicEmptyState';
import DateNavigatorInput, {
  DateNavigatorInputProps
} from 'src/components/molecules/Inputs/DateNavigatorInput/DateNavigatorInput';
import NumberInputBase from 'src/components/molecules/Inputs/NumberInputBase/NumberInputBase';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import ScorecardInlineEditCell, {
  InlineFormikProps
} from 'src/components/organisms/Scorecard/ScorecardInlineEditCell';
import { ChevronDownIcon } from 'src/components/particles/theme/icons/Arrows/chevron-down';
import { ChevronRightIcon } from 'src/components/particles/theme/icons/Arrows/chevron-right';
import { ChevronUpIcon } from 'src/components/particles/theme/icons/Arrows/chevron-up';
import { LayoutGrid02Icon } from 'src/components/particles/theme/icons/Layout/layout-grid-02';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { Scorecard } from '../types';

interface ScoreCardItemProps {
  id: string;
  title: string;
  goal: string;
  measurableMetricId: string;
  value: number;
  date: string;
  onSave: (
    values: InlineFormikProps,
    form: FormikHelpers<InlineFormikProps>,
    onCloseEditor: () => void
  ) => Promise<void>;
  backgroundColor: string;
  slots: {
    dateNavigatorInputProps: DateNavigatorInputProps;
  };
}
const ScoreCardItemList = ({
  id,
  title,
  goal,
  measurableMetricId,
  value,
  date,
  onSave,
  backgroundColor,
  slots
}: ScoreCardItemProps) => {
  const { dateNavigatorInputProps } = slots || {};
  const theme = useTheme();

  return (
    <Grid container flexDirection={'column'} gap={0.5}>
      <Grid item width={'100%'}>
        <Divider />
      </Grid>
      <Grid item width={'100%'}>
        <AvatarAndText
          spacing={0}
          gap={2}
          title={title}
          titleTypography={{
            variant: 'textMdRegular',
            sx: {
              textWrap: 'nowrap',
              overflow: 'hidden'
            }
          }}
          alignItems={'center'}
          textGridItemProps={{
            flex: 1,
            sx: {
              textWrap: 'nowrap',
              overflow: 'hidden'
            }
          }}
        >
          <Chip label={goal} color="default" />
        </AvatarAndText>
      </Grid>
      <Grid item width={'100%'}>
        <Grid container gap={1} flexWrap={'nowrap'} alignItems={'center'}>
          <Grid item xs={9}>
            <Formik initialValues={{ date, id }} onSubmit={() => {}}>
              <Field
                {...dateNavigatorInputProps}
                component={DateNavigatorInput}
                name="date"
              />
            </Formik>
          </Grid>
          <Grid item xs={3}>
            <ScorecardInlineEditCell
              initialValue={{
                id: measurableMetricId || '',
                value,
                date
              }}
              onSave={onSave}
              component={NumberInputBase}
              closeOnSave={true}
              canEdit={true}
              allowEmptyText={false}
              fieldSx={{
                '& .MuiOutlinedInput-root': {
                  height: 45
                }
              }}
              sx={{
                border: 1,
                borderColor: 'grey.200',
                // 1px more than the height of the input
                height: 46,
                px: 0,
                textAlign: 'center',
                backgroundColor,
                borderRadius: theme.spacing(0.5),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export interface ScorecardsContentProps {
  isFirst?: boolean;
  title: string;
  scorecards: Scorecard[];
  onClickEmptyState: () => void;
}
const ScorecardsContent = ({
  isFirst,
  title,
  scorecards = [],
  onClickEmptyState
}: ScorecardsContentProps) => {
  const [expanded, setExpanded] = useState(true);
  const noScorecards = isEmpty(scorecards);

  return (
    <Grid container flexDirection={'column'} gap={2}>
      {!isFirst && (
        <Grid item>
          <Divider sx={{ mt: 2 }} />
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sx={{
          px: responsiveSpacing
        }}
        width={'100%'}
      >
        <Grid container flexDirection={'column'} gap={1}>
          <Grid item width={'100%'}>
            <AvatarAndText
              title={title}
              alignItems={'center'}
              textGridItemProps={{ flex: 1 }}
              childrenGridProps={{ onClick: () => setExpanded(!expanded) }}
            >
              <Grid container alignItems={'center'}>
                <Chip
                  label={`${scorecards.length} `}
                  color="primary"
                  variant={'outlined'}
                />
                {(noScorecards ? !expanded : expanded) ? (
                  <ChevronUpIcon sx={{ cursor: 'pointer' }} />
                ) : (
                  <ChevronDownIcon sx={{ cursor: 'pointer' }} />
                )}
              </Grid>
            </AvatarAndText>
          </Grid>
          <Collapse
            in={noScorecards ? !expanded : expanded}
            sx={{
              width: '100%',
              '& .MuiCollapse-wrapperInner': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }
              // TODO: figure out how to animate the collapse and hide the empty space left by the collapse
              // display: !expanded ? 'none' : undefined
            }}
          >
            {noScorecards ? (
              <Grid container flexDirection={'column'} gap={0.5}>
                <Grid item width={'100%'}>
                  <Divider />
                </Grid>
                <Grid item width={'100%'}>
                  <AvatarAndText
                    spacing={0}
                    gap={2}
                    title={`No ${title} Measurables`}
                    titleTypography={{
                      variant: 'textMdRegular',
                      sx: {
                        textWrap: 'nowrap',
                        overflow: 'hidden'
                      }
                    }}
                    alignItems={'center'}
                    textGridItemProps={{
                      flex: 1,
                      sx: {
                        textWrap: 'nowrap',
                        overflow: 'hidden'
                      }
                    }}
                  >
                    <Link
                      onClick={onClickEmptyState}
                      sx={{ cursor: 'pointer' }}
                    >
                      Add
                    </Link>
                  </AvatarAndText>
                </Grid>
              </Grid>
            ) : (
              scorecards.map((scorecard) => (
                <Grid
                  item
                  width={'100%'}
                  key={`scorecards-content-index-${scorecard.id}`}
                >
                  <ScoreCardItemList
                    id={scorecard.id}
                    title={scorecard.title}
                    goal={scorecard.goal}
                    value={scorecard.value}
                    onSave={scorecard.onSave}
                    slots={scorecard.slots}
                    measurableMetricId={scorecard.measurableMetricId}
                    date={scorecard.date}
                    backgroundColor={scorecard.backgroundColor}
                  />
                </Grid>
              ))
            )}
          </Collapse>
        </Grid>
      </Grid>
    </Grid>
  );
};

interface ScorecardsCardListContentProps {
  scorecardsContentProps: ScorecardsContentProps[];
  loading?: boolean;
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
}
const ScorecardsCardListContent = ({
  scorecardsContentProps,
  loading,
  onClickEmptyState,
  emptyStateSubtitle
}: ScorecardsCardListContentProps) => {
  const isCompletelyEmpty = scorecardsContentProps.every(
    (scorecardsContentProps) => isEmpty(scorecardsContentProps.scorecards)
  );
  if (!scorecardsContentProps || loading || (!loading && isCompletelyEmpty))
    return (
      <BasicEmptyState
        icon={loading ? null : <LayoutGrid02Icon />}
        title={loading ? '' : 'No Scorecards'}
        subtitle={loading ? '' : emptyStateSubtitle}
        emptyStateHeight={'auto'}
        slots={{
          gridSx: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex'
          }
        }}
        buttonProps={
          !loading && onClickEmptyState
            ? {
                onClick: onClickEmptyState,
                label: 'Add Scorecard',
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
    <>
      {scorecardsContentProps.map((scorecardsContentProps, index) => (
        <ScorecardsContent
          isFirst={index === 0}
          {...scorecardsContentProps}
          key={`scorecards-card-content-index-${index}`}
        />
      ))}
    </>
  );
};

export interface ScorecardsCardProps extends GridProps {
  scorecardsContentProps?: ScorecardsContentProps[];
  loading?: boolean;
  onHeaderClick?: () => void;
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
}

const ScorecardsCard = ({
  scorecardsContentProps = [],
  onHeaderClick,
  onClickEmptyState,
  loading,
  emptyStateSubtitle,
  ...props
}: ScorecardsCardProps) => {
  const theme = useTheme();
  return (
    <Grid
      container
      flexDirection="column"
      gap={2}
      height={'100%'}
      sx={{
        boxSizing: 'border-box',
        backgroundColor: theme.palette.background.paper,
        border: theme.border.outlinedButton,
        borderRadius: theme.borderRadius.xl,
        boxShadow: theme.customShadows.xs,
        flexWrap: 'nowrap'
      }}
      {...props}
    >
      <Grid
        item
        display={'flex'}
        alignItems={'center'}
        sx={{ pt: responsiveSpacing, px: responsiveSpacing }}
      >
        <AvatarAndText
          spacing={0}
          gap={1}
          alignItems={'center'}
          leftIcon={<LayoutGrid02Icon />}
          leftIconGridProps={{ display: 'flex' }}
          title={'My Scorecards'}
          textGridItemProps={{ flex: 1 }}
          childrenGridProps={{ display: 'flex' }}
          onClick={onHeaderClick}
          sx={{ cursor: 'pointer' }}
        >
          <ChevronRightIcon />
        </AvatarAndText>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid
        item
        flex={1}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          overflowY: 'auto',
          height: {
            // 24 + 24 + 30.5 + 16 + 16 + 42= 152.5
            xs: 'calc(100% - 48px)',
            sm: 'calc(100% - 152.5px)'
          },
          pb: responsiveSpacing
        }}
      >
        <ScorecardsCardListContent
          scorecardsContentProps={scorecardsContentProps}
          loading={loading}
          onClickEmptyState={onClickEmptyState}
          emptyStateSubtitle={emptyStateSubtitle}
        />
      </Grid>
    </Grid>
  );
};
export default ScorecardsCard;
