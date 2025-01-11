import { ComponentMeta, Story } from '@storybook/react';
import { FieldInputProps, FormikHelpers, FormikProps } from 'formik';
import { useState } from 'react';
import { DateNavigatorInterval } from 'src/components/atoms/DateNavigator/DateNavigator';
import { DateNavigatorInputProps } from 'src/components/molecules/Inputs/DateNavigatorInput/DateNavigatorInput';
import {
  getColorByValue,
  GoalCondition
} from 'src/components/organisms/Scorecard/helpers';
import { InlineFormikProps } from 'src/components/organisms/Scorecard/ScorecardInlineEditCell';
import { ZapIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import { formatDate, parseDate } from 'src/utils/date';
import { WorkScheduleStatus } from './DailyStandupCard';
import { MyOs, MyOsProps } from './MyOs';
import { ScorecardsContentProps } from './ScorecardsCard';
import { Scorecard } from './types';
import { DateFormat } from 'src/types/dateFns';
import { ThemeProvider } from 'src/components/particles';
import { DefaultArgs, EmptyArgs } from './helpers';

const onSave: any = (
  values: InlineFormikProps,
  form: FormikHelpers<InlineFormikProps>,
  onCloseEditor: () => void
) => {};

const dateNavigatorInputProps: DateNavigatorInputProps = {
  interval: DateNavigatorInterval.DAILY,
  onPreviousChange: () => {},
  onNextChange: () => {},
  sx: { '&': { display: 'flex' }, width: '100%' }
  // dateLabelFn: () => '',
};

export default {
  title: 'Templates/MyOs',
  component: MyOs,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof MyOs>;

const Template: Story<MyOsProps> = (args) => {
  const intialDate = new Date();
  const [dates, setDates] = useState<{ [key: string]: string | undefined }>({});
  const newArgs: MyOsProps = {
    ...args,
    slots: {
      ...args.slots,
      scorecardsCardProps: {
        ...args.slots?.scorecardsCardProps,
        scorecardsContentProps: (
          args.slots?.scorecardsCardProps?.scorecardsContentProps || []
        ).map((scorecard: ScorecardsContentProps) => ({
          ...scorecard,
          scorecards: scorecard.scorecards.map(
            (scorecard: Scorecard): Scorecard => {
              return {
                ...scorecard,
                slots: {
                  ...scorecard.slots,
                  dateNavigatorInputProps: {
                    ...scorecard.slots?.dateNavigatorInputProps,
                    // interval: DateNavigatorInterval.DAILY,
                    onPreviousChange: (
                      interval: DateNavigatorInterval,
                      form: FormikProps<any> | undefined,
                      field: FieldInputProps<any> | undefined
                    ) => {
                      const { id } = scorecard;
                      const newDates = { ...dates };
                      const newestDate = newDates[id]
                        ? parseDate(newDates[id])
                        : new Date(intialDate); // Ensure a new Date instance
                      newestDate.setDate(newestDate.getDate() - 1);

                      setDates({
                        ...newDates,
                        [id]: formatDate(newestDate)
                      });
                      form?.setFieldValue(
                        field?.name || '',
                        formatDate(newestDate)
                      );
                    },
                    onNextChange: (
                      interval: DateNavigatorInterval,
                      form: FormikProps<any> | undefined,
                      field: FieldInputProps<any> | undefined
                    ) => {
                      const { id } = scorecard;
                      const newDates = { ...dates };
                      const newestDate = newDates[id]
                        ? parseDate(newDates[id])
                        : new Date(intialDate); // Ensure a new Date instance
                      newestDate.setDate(newestDate.getDate() + 1);

                      setDates({
                        ...newDates,
                        [id]: formatDate(newestDate)
                      });
                      form?.setFieldValue(
                        field?.name || '',
                        formatDate(newestDate)
                      );
                    },
                    dateLabelFn: (date: string) => {
                      // const interval = scorecard.interval;
                      const format =
                        date.length >= 10 ? DateFormat.MDY : DateFormat.MMMdd;
                      const parsedDate = parseDate(date, format);
                      return formatDate(parsedDate, DateFormat.MMMdd);
                    },
                    sx: { '&': { display: 'flex' }, width: '100%' }
                  }
                }
              };
            }
          )
        }))
      }
    }
  };
  return (
    <ThemeProvider>
      <MyOs {...newArgs} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Empty = Template.bind({});
Empty.args = EmptyArgs;

export const Rocks = Template.bind({});
Rocks.args = {
  ...DefaultArgs,
  useRocks: true
};
