import { render, screen } from '@testing-library/react';
import PageHeader from './PageHeader';

describe('PageHeader', () => {
  test('renders the nav', () => {
    render(
      <PageHeader
        slots={{
          avatarAndTextProps: {
            title: 'Olivia Rhye',
            subtitle: 'olivia@rhye.com'
          }
        }}
      />
    );
    const text = screen.getByText(/Olivia Rhye/i);
    expect(text).toBeInTheDocument();
  });
});
