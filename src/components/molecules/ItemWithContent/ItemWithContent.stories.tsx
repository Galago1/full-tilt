import type { ComponentMeta, Story } from '@storybook/react';
import { NumericFormat } from 'react-number-format';
import { rowInitials } from 'src/utils/users/initials';
import type { ItemWithContentProps } from './ItemWithContent';
import ItemWithContent from './ItemWithContent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Item With Content',
  component: ItemWithContent
} as ComponentMeta<typeof ItemWithContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ItemWithContentProps> = (args) => (
  <ItemWithContent {...args} />
);

export const ItemOnly = Template.bind({});
ItemOnly.args = {
  priceTypographyProps: {
    children: (
      <NumericFormat
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        decimalScale={2}
        fixedDecimalScale
        prefix={'$'}
      />
    )
  },
  avatarAndTextProps: {
    title: 'name',
    subtitle: 'collectionName',
    avatarProps: {
      variant: 'square',
      children: <> {rowInitials({ name: 'name' }, true)}</>,
      src: undefined,
      sx: { width: 56, height: 56 }
    }
  }
};

export const ItemWithButton = Template.bind({});
ItemWithButton.args = {
  priceTypographyProps: {
    children: (
      <NumericFormat
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        decimalScale={2}
        fixedDecimalScale
        prefix={'$'}
      />
    )
  },
  avatarAndTextProps: {
    title: 'name',
    subtitle: 'collectionName',
    avatarProps: {
      variant: 'square',
      children: <> {rowInitials({ name: 'item name' }, true)}</>,
      src: undefined,
      sx: { width: 56, height: 56 }
    }
  },

  itemButtonProps: {
    size: 'small',
    variant: 'text',
    color: 'secondary',
    label: 'remove',
    onClick: () => {}
  }
};
