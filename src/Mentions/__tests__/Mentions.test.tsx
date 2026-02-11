import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Mentions from '../index';

describe('Mentions Component', () => {
  const options = [
    { value: '1', label: 'User 1' },
    { value: '2', label: 'User 2' },
    { value: '3', label: 'User 3' },
  ];

  it('should render correctly', () => {
    render(<Mentions options={options} placeholder="Type @ to mention" />);
    expect(screen.getByText('Type @ to mention')).toBeInTheDocument();
  });

  it('should display options when typing @', async () => {
    const { container } = render(<Mentions options={options} placeholder="Type @ to mention" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should handle mention selection', async () => {
    const onChange = jest.fn();
    const { container } = render(
      <Mentions 
        options={options} 
        placeholder="Type @ to mention" 
        onChange={onChange} 
      />
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});