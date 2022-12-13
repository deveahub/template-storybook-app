import { render, screen } from '@testing-library/react';

import Index from './index';

describe('Index Page', () => {
  it('Mount', async () => {
    render(<Index />);
    expect(await screen.getByText('Hello')).toBeInTheDocument();
  });
});
