import { composeStories } from '@storybook/testing-react';
import { render, fireEvent, screen } from '@testing-library/react';
import * as InlineInputChipStories from './InlineInputChip.stories'; //👈  Our stories imported here
import { FieldAttributes, Formik } from 'formik';
import InlineInputChip, { InlineInputChipProps } from './InlineInputChip';
//👇 composeStories will process all information related to the component (e.g., args)
const { Initial } = composeStories(InlineInputChipStories) as any;

describe('InlineInputChip', () => {
  const chipProps = {
    label: 'Edit Me'
  };

  const fieldAttributes: FieldAttributes<any> = {
    name: 'sampleField',
    value: '',
    onBlur: jest.fn(),
    onChange: jest.fn()
  };

  const onChipClick = (
    setShowInput: React.Dispatch<React.SetStateAction<boolean>>,
    ref: React.MutableRefObject<any>
  ) => {
    setShowInput(true);
  };

  const defaultProps: InlineInputChipProps = {
    chipProps,
    fieldAttributes,
    onChipClick
  };

  it('renders successfully', async () => {
    render(<Initial data-testid={'custom-element'} />);
    const element = await screen.findByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
  it('shows the input when the chip is clicked', () => {
    render(<Initial />);
    const chip = screen.getByText('Edit Me');
    fireEvent.click(chip);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('calls the onChange event handler when input is changed', () => {
    render(
      <Formik initialValues={{ name: 'Other' }} onSubmit={(v) => {}}>
        <InlineInputChip {...defaultProps} />
      </Formik>
    );
    fireEvent.click(screen.getByText('Edit Me'));
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Changed text' }
    });
    expect(fieldAttributes.onChange).toHaveBeenCalled();
  });

  it('calls the onBlur event handler when input is blurred', () => {
    render(
      <Formik initialValues={{ name: 'Other' }} onSubmit={(v) => {}}>
        <InlineInputChip {...defaultProps} />
      </Formik>
    );
    fireEvent.click(screen.getByText('Edit Me'));
    fireEvent.blur(screen.getByRole('textbox'));
    expect(fieldAttributes.onBlur).toHaveBeenCalled();
  });
});
