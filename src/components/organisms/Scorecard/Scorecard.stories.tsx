import { Meta, Story } from '@storybook/react';
import Scorecard, { ScorecardProps } from './Scorecard';
import { GoalCondition, scorecardDropdown } from './helpers';

const onSave = async (
  values: any,
  form: any,
  onClose: () => void,
  row: any
) => {
  console.log('onSave', values, form, onClose, row);
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

export default {
  title: 'Atoms/Scorecard',
  component: Scorecard
} as Meta;

const Template: Story<ScorecardProps> = (args) => <Scorecard {...args} />;

export const Daily = Template.bind({});
Daily.args = {
  onSave,
  onClickEdit: (event, row) => console.log('Edit clicked', event, row),
  slots: {
    scoreCardDraggableRowProps: {
      onClickIcon: (event, row) => console.log('Icon clicked', event, row),
      showEndIcon: true
      // slots: {
      //   dropdownProps: scorecardDropdown()
      // }
    }
  },
  type: 'daily',
  showEndIcon: true,
  data: [
    {
      owner: 'James P Sullivan',
      avatar: 'path/to/avatar.jpg',
      title: '1 point a day',
      goal: '> 1',
      trend: 1.122222,
      suffix: '%',
      data: [
        { value: undefined },
        { value: 0.8, suffix: '%' },
        { value: 1, suffix: '%' },
        { value: 0.4, suffix: '%' },
        { value: undefined },
        { value: undefined }
      ],
      goalCondition: GoalCondition.GREATER_THAN
    },
    {
      owner: 'Bob Smith',
      avatar: 'path/to/avatar.jpg',
      title: '2 points a day',
      goal: '1-2',
      trend: 1.5,
      data: [
        { value: '0.60', prefix: '$' },
        { value: undefined },
        { value: '0.80', prefix: '$' },
        { value: '0.90', prefix: '$' },
        { value: undefined },
        { value: '1.00', prefix: '$' }
      ],
      goalCondition: GoalCondition.BETWEEN
    },
    {
      owner: 'Charlie Brown',
      avatar: 'path/to/avatar.jpg',
      title: '3-4 points a day',
      goal: '3-4',
      trend: 3.8,
      data: [
        { value: 0.7 },
        { value: 0.5 },
        { value: undefined },
        { value: 0.8 },
        { value: undefined },
        { value: 1 }
      ],
      goalCondition: GoalCondition.BETWEEN
    }
  ]
};

export const DailyEmpty = Template.bind({});
DailyEmpty.args = {
  onSave,
  onClickEdit: (event, row) => console.log('Edit clicked', event, row),
  slots: {
    scoreCardDraggableRowProps: {
      showEndIcon: true,
      slots: {
        dropdownProps: scorecardDropdown()
      }
    },
    emptyStateProps: {
      avatarAndTextProps: {
        subtitle: 'There are no daily measurables at this time.',
        subtitleTypography: {
          variant: 'textSmSemibold',
          color: 'text.secondary'
        }
      }
    }
  },
  type: 'daily',
  isLoading: false,
  data: []
};

export const Weekly = Template.bind({});
Weekly.args = {
  onSave,
  type: 'weekly',
  data: [
    {
      owner: 'Dana White',
      avatar: 'path/to/avatar.jpg',
      title: '2 points a week',
      goal: '2',
      trend: 3,
      data: [
        { value: undefined },
        { value: 1 },
        { value: 0.7 },
        { value: 0.9 },
        { value: 1.1 },
        { value: 0.8 }
      ],
      goalCondition: GoalCondition.EQUAL_TO
    },
    {
      owner: 'Eva Green',
      avatar: 'path/to/avatar.jpg',
      title: '<2 points a week',
      goal: '<2',
      trend: 2.7,
      data: [
        { value: 0.5 },
        { value: undefined },
        { value: 1 },
        { value: 1.2 },
        { value: undefined },
        { value: 0.8 }
      ],
      goalCondition: GoalCondition.LESS_THAN
    },
    {
      owner: 'Frank Harris',
      avatar: 'path/to/avatar.jpg',
      title: 'Performance Monitor',
      goal: '1-3',
      trend: 2.5,
      data: [
        { value: undefined },
        { value: 0.9 },
        { value: 1.1 },
        { value: 1.3 },
        { value: undefined },
        { value: 1 }
      ],
      goalCondition: GoalCondition.BETWEEN
    }
  ]
};

export const Monthly = Template.bind({});
Monthly.args = {
  onSave,
  type: 'monthly',
  data: [
    {
      owner: 'Grace Lee',
      avatar: 'path/to/avatar.jpg',
      title: '3 points a month',
      goal: '3',
      trend: 3.0,
      data: [
        { value: 0.8 },
        { value: undefined },
        { value: 0.6 },
        { value: 1 },
        { value: undefined },
        { value: 0.8 }
      ],
      goalCondition: GoalCondition.EQUAL_TO
    },
    {
      owner: 'Henry Martinez',
      avatar: 'path/to/avatar.jpg',
      title: 'Target Achiever',
      goal: '2-4',
      trend: 5,
      data: [
        { value: 1 },
        { value: undefined },
        { value: 1.2 },
        { value: 0.7 },
        { value: undefined },
        { value: 1 }
      ],
      goalCondition: GoalCondition.BETWEEN
    },
    {
      owner: 'Isabel Clark',
      avatar: 'path/to/avatar.jpg',
      title: 'Goal Setter',
      goal: '2',
      trend: 2.0,
      data: [
        { value: undefined },
        { value: 0.6 },
        { value: 1 },
        { value: 0.5 },
        { value: 0.7 },
        { value: undefined }
      ],
      goalCondition: GoalCondition.EQUAL_TO
    }
  ]
};

export const Quarterly = Template.bind({});
Quarterly.args = {
  onSave,
  type: 'quarterly',
  data: [
    {
      owner: 'Jack Wilson',
      avatar: 'path/to/avatar.jpg',
      title: 'Performance Gauge',
      goal: '1-2',
      trend: 1.5,
      data: [
        { value: 0.7 },
        { value: 1 },
        { value: undefined },
        { value: 0.9 }
      ],
      goalCondition: GoalCondition.BETWEEN
    },
    {
      owner: 'James P Sullivan',
      avatar: 'path/to/avatar.jpg',
      title: 'Quarterly Monitor',
      goal: '1-3',
      trend: 2.2,
      data: [
        { value: undefined },
        { value: 0.9 },
        { value: 1.1 },
        { value: 1.3 }
      ],
      goalCondition: GoalCondition.BETWEEN
    },
    {
      owner: 'Bob Smith',
      avatar: 'path/to/avatar.jpg',
      title: 'Quarterly Review',
      goal: '<2',
      trend: 1.9,
      data: [
        { value: 0.5 },
        { value: undefined },
        { value: 1 },
        { value: 1.2 }
      ],
      goalCondition: GoalCondition.LESS_THAN
    }
  ]
};

export const Yearly = Template.bind({});
Yearly.args = {
  onSave,
  type: 'yearly',
  data: [
    {
      owner: 'Charlie Brown',
      avatar: 'path/to/avatar.jpg',
      title: 'Yearly Goal',
      goal: '3-4',
      trend: 3.5,
      data: [
        { value: 0.7 },
        { value: 0.5 },
        { value: undefined },
        { value: 0.8 },
        { value: undefined },
        { value: 1 }
      ],
      goalCondition: GoalCondition.BETWEEN
    },
    {
      owner: 'Dana White',
      avatar: 'path/to/avatar.jpg',
      title: 'Yearly Performance',
      goal: '2-3',
      trend: 2.5,
      data: [
        { value: undefined },
        { value: 0.9 },
        { value: 1.1 },
        { value: 1.3 },
        { value: undefined },
        { value: 1 }
      ],
      goalCondition: GoalCondition.BETWEEN
    },
    {
      owner: 'Eva Green',
      avatar: 'path/to/avatar.jpg',
      title: 'Yearly Achiever',
      goal: '<2',
      trend: 1.8,
      data: [
        { value: 0.5 },
        { value: undefined },
        { value: 1 },
        { value: 1.2 },
        { value: undefined },
        { value: 0.8 }
      ],
      goalCondition: GoalCondition.LESS_THAN
    }
  ]
};
