import type { ComponentMeta, Story } from '@storybook/react';
import { Formik } from 'formik';
import InlineInputChip, { InlineInputChipProps } from './InlineInputChip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Inline Input Chip',
  component: InlineInputChip
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof InlineInputChip>;

const Template: Story<InlineInputChipProps> = (args) => {
  const onChipClick = (setShowInput: any, ref: any) => {
    setShowInput((prev: any) => {
      return !prev;
    });
    setTimeout(() => {
      ref.current?.focus();
    }, 0);
  };
  return (
    <Formik initialValues={{ name: args.chipProps.label }} onSubmit={(v) => {}}>
      {({ handleSubmit, setFieldValue, values }) => {
        const allArgs = {
          ...args,
          chipProps: {
            ...args.chipProps,
            label: values.name
          }
        };
        return (
          <InlineInputChip
            {...allArgs}
            fieldAttributes={{
              name: 'name',
              onBlur: () => handleSubmit(),
              onChange: (value: any) => {
                setFieldValue('name', value);
              }
            }}
            onChipClick={onChipClick}
          />
        );
      }}
    </Formik>
  );
};

export const Initial = Template.bind({});
Initial.args = {
  chipProps: { label: 'Edit Me' }
};
