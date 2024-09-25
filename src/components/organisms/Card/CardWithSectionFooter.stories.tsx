import { Box, InputAdornment } from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';
import { Formik } from 'formik';
import TextInput from 'src/components/molecules/Inputs/TextInput';
import Tabs from 'src/components/molecules/Tabs';
import { FullWidthAndBorder } from 'src/components/molecules/Tabs/Tabs.stories';
import { SearchMdIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import useCardSectionFooterProps, {
  UseCardSectionFooterProps
} from '../../../hooks/Card/Footer/useCardSectionFooterProps';
import { EmployeeDataGrid } from '../DataGrid/DataGrid.stories';
import type { CardProps } from './Card';
import Card from './Card';

export default {
  title: 'Organisms/Card/CardWithSectionTemplate',
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
const CardWithTableTemplate: Story<UseCardSectionFooterProps> = (args) => {
  const cardHeaderProps = useCardSectionFooterProps(args);
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

const FormikCard: Story<UseCardSectionFooterProps> = (args) => {
  const cardHeaderProps = useCardSectionFooterProps(args);
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

const BasicFooter = CardWithTableTemplate.bind({});
BasicFooter.args = {
  title: 'Employee List',
  showDivider: true,
  slots: {}
};

export const CardSearchType = FormikCard.bind({});
CardSearchType.args = {
  type: 'search',
  showDivider: true,

  children: <Tabs {...(FullWidthAndBorder.args as any)} />,
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

    InputProps: {
      startAdornment: (
        <InputAdornment position="start">
          <SearchMdIcon />
        </InputAdornment>
      )
    }
  },
  slots: {
    // avatarAndTextProps: {
    //   title: 'Action Plan',
    //   subtitle: 'This is the supporting text'
    // }
  }
};
