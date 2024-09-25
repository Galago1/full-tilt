import { render, screen } from '@testing-library/react';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import { SecondaryIcon } from 'src/components/molecules/EmptyState/EmptyState.stories';
import Modal from './Modal';

describe('Modal', () => {
  test('renders the modal', () => {
    render(
      <Modal open={true} hideModal={() => {}}>
        <>
          <EmptyState {...(SecondaryIcon.args as any)} />
        </>
      </Modal>
    );
    const text = screen.getByTestId('sentinelEnd');
    expect(text).toBeInTheDocument();
  });
});
