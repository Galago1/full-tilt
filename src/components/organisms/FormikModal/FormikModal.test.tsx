import { render, screen } from '@testing-library/react';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import { SecondaryIcon } from 'src/components/molecules/EmptyState/EmptyState.stories';
import FormikModal from './FormikModal';

describe('Modal', () => {
  test('renders the modal', () => {
    render(
      <FormikModal open={true}>
        <EmptyState {...(SecondaryIcon.args as any)} />
      </FormikModal>
    );
    const text = screen.getByTestId('sentinelEnd');
    expect(text).toBeInTheDocument();
  });
});
