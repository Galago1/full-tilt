import {
  Chip,
  Collapse,
  Divider,
  Grid,
  GridProps,
  useTheme
} from '@mui/material';
import { FormikHelpers } from 'formik';
import { isEmpty } from 'lodash';
import { useState } from 'react';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import ButtonGroup, {
  ButtonGroupProps
} from 'src/components/molecules/ButtonGroup/ButtonGroup';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import NumberInputBase from 'src/components/molecules/Inputs/NumberInputBase/NumberInputBase';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import ScorecardInlineEditCell, {
  InlineFormikProps
} from 'src/components/organisms/Scorecard/ScorecardInlineEditCell';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ListIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { Scorecard } from './types';

interface ScoreCardItemProps {
  title: string;
  goal: string;
  measurableMetricId: string;
  value: number;
  date: string;
  onSave: (
    values: InlineFormikProps,
    form: FormikHelpers<InlineFormikProps>,
    onCloseEditor: () => void
  ) => void;
  backgroundColor: string;
  slots: {
    buttonGroupProps: ButtonGroupProps;
  };
}
const ScoreCardItemList = ({
  title,
  goal,
  measurableMetricId,
  value,
  date,
  onSave,
  backgroundColor,
  slots
}: ScoreCardItemProps) => {
  const { buttonGroupProps } = slots || {};
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
          <Grid item xs={10}>
            <ButtonGroup {...buttonGroupProps} />
          </Grid>
          <Grid item xs={2}>
            <ScorecardInlineEditCell
              type={'data'}
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

interface ScorecardsContentProps {
  isFirst?: boolean;
  title: string;
  scorecards: Scorecard[];
}
const ScorecardsContent = ({
  isFirst,
  title,
  scorecards = []
}: ScorecardsContentProps) => {
  const [expanded, setExpanded] = useState(true);
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
                  label={scorecards.length}
                  color="primary"
                  variant={'outlined'}
                />
                {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Grid>
            </AvatarAndText>
          </Grid>
          <Collapse
            in={expanded}
            sx={{
              width: '100%',
              '& .MuiCollapse-wrapperInner': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }
            }}
          >
            {scorecards.map((scorecard) => (
              <Grid
                item
                width={'100%'}
                key={`scorecards-content-index-${scorecard.id}`}
              >
                <ScoreCardItemList
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
            ))}
          </Collapse>
        </Grid>
      </Grid>
    </Grid>
  );
};

interface ScorecardsCardListContentProps {
  scorecardsContentProps: ScorecardsContentProps[];
  loading?: boolean;
}
const ScorecardsCardListContent = ({
  scorecardsContentProps,
  loading
}: ScorecardsCardListContentProps) => {
  if (
    !scorecardsContentProps ||
    loading ||
    (!loading && isEmpty(scorecardsContentProps))
  )
    return (
      <Grid item>
        <EmptyState
          flex={1}
          alignItems={'center'}
          justifyContent={'center'}
          avatarAndTextProps={
            loading ? undefined : { title: 'No items', subtitle: '' }
          }
        >
          {loading && <LoadingIndicator />}
        </EmptyState>
      </Grid>
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
}

export const ScorecardsCard = ({
  scorecardsContentProps = [],
  loading,
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
          leftIcon={<ListIcon />}
          leftIconGridProps={{ display: 'flex' }}
          title={'My Scorecards'}
          textGridItemProps={{ flex: 1 }}
          childrenGridProps={{ display: 'flex' }}
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
        />
      </Grid>
    </Grid>
  );
};
