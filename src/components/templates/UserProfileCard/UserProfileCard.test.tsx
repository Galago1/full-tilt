import { render, screen } from '@testing-library/react';
import UserProfileCard from './UserProfileCard';

describe('UserProfileCard', () => {
  const setup = (isOpen: boolean) => {
    const onClose = jest.fn();
    render(
      <UserProfileCard isOpen={isOpen} onClose={onClose} data={{} as any} />
    );
    return { onClose };
  };

  test('renders correctly when the drawer is open', () => {
    setup(true);

    expect(screen.getByText('Mollie Hall')).toBeInTheDocument();
    expect(screen.getByText('Lead Developer')).toBeInTheDocument();
    expect(screen.getByText('Product Team')).toBeInTheDocument();
    expect(screen.getByText('Phoenix, AZ')).toBeInTheDocument();
  });

  test('does not render when the drawer is closed', () => {
    setup(false);

    expect(screen.queryByText('Mollie Hall')).not.toBeInTheDocument();
  });
});
