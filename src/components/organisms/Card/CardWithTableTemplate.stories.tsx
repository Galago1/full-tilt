import { Box, InputAdornment } from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';
import { Formik } from 'formik';
import TextInput from 'src/components/molecules/Inputs/TextInput';
import { SearchMdIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import useCardTableHeaderProps, {
  UseCardTableHeaderPropsProps
} from '../../../hooks/Card/Header/useCardTableHeaderProps';
import { EmployeeDataGrid } from '../DataGrid/DataGrid.stories';
import type { CardProps } from './Card';
import Card from './Card';

export default {
  title: 'Organisms/Card/CardWithTableTemplate',
  component: Card,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const CardWithTableTemplate: Story<UseCardTableHeaderPropsProps> = (args) => {
  const cardHeaderProps = useCardTableHeaderProps(args);
  const finalArgs: CardProps = {
    ...args,
    showActions: false,
    slots: {
      cardHeaderProps,
      ...args.slots
    },

    children: (
      <Box>
        <EmployeeDataGrid {...({} as any)} />
      </Box>
    )
  } as CardProps;
  return <Card {...finalArgs} />;
};

const FormikCard: Story<UseCardTableHeaderPropsProps> = (args) => {
  const cardHeaderProps = useCardTableHeaderProps(args);
  const finalArgs: CardProps = {
    ...args,
    showActions: false,
    slots: {
      cardHeaderProps,
      ...args.slots
    },

    children: (
      <Box>
        <EmployeeDataGrid {...({} as any)} />
      </Box>
    )
  } as CardProps;
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      {(formik) => {
        return <Card {...finalArgs} />;
      }}
    </Formik>
  );
};

export const CardWithTitleTable = CardWithTableTemplate.bind({});
CardWithTitleTable.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Action Plan'
    }
  }
};

export const CardWithSupportingText = CardWithTableTemplate.bind({});
CardWithSupportingText.args = {
  supportingText: true,
  slots: {
    avatarAndTextProps: {
      title: 'Action Plan',
      subtitle: 'This is the supporting text'
      // titleTypography: { pb: 1 }
    }
  }
};

export const CardWithDividerText = CardWithTableTemplate.bind({});
CardWithDividerText.args = {
  showDivider: true,
  slots: {
    avatarAndTextProps: {
      title: 'Action Plan',
      subtitle: 'This is the supporting text'
    }
  }
};

export const CardSearchType = FormikCard.bind({});
CardSearchType.args = {
  type: 'search',
  showDivider: true,
  fieldAttributes: {
    component: TextInput,
    label: '',
    name: 'search',
    placeholder: 'Search',
    labelSx: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    boxProps: {
      sx: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
      }
    },
    // sx: {
    //   display: 'flex',
    //   justifyContent: 'flex-end'
    // },
    // startAdornment: 'search'

    InputProps: {
      startAdornment: (
        <InputAdornment position="start">
          <SearchMdIcon />
        </InputAdornment>
      )
    }
  },
  slots: {
    avatarAndTextProps: {
      title: 'Action Plan',
      subtitle: 'This is the supporting text'
    }
  }
};
