import { Sample } from 'components/Sample';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Sample', () => {
  it('Matches snapshot', () => {
    const { baseElement } = render(<Sample onClick={() => {}} btnText="TEXT" />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Displays button label', () => {
    const mockText = 'TEXT';

    render(<Sample onClick={() => {}} btnText={mockText} />);
    expect(screen.getByText(mockText)).toBeInTheDocument();
  });

  it('Trigers onClick event', () => {
    const mockText = 'TEXT';
    const mockFn = jest.fn();

    expect(mockFn).toHaveBeenCalledTimes(0);

    render(<Sample onClick={mockFn} btnText={mockText} />);
    const btn = screen.getByRole('button', { name: mockText });
    userEvent.click(btn);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
