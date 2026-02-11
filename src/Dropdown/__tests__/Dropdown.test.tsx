import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Dropdown from '../index';

const { Menu, MenuItem } = Dropdown;

describe('Dropdown Component', () => {
  it('should render correctly', () => {
    render(
      <Dropdown>
        <button>Open Dropdown</button>
        <Menu>
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </Menu>
      </Dropdown>
    );
    expect(screen.getByText('Open Dropdown')).toBeInTheDocument();
  });

  it('should display dropdown menu when clicked', async () => {
    render(
      <Dropdown>
        <button>Open Dropdown</button>
        <Menu>
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </Menu>
      </Dropdown>
    );
    
    const button = screen.getByText('Open Dropdown');
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });
  });

  it('should handle menu item click', async () => {
    const onClick = jest.fn();
    render(
      <Dropdown>
        <button>Open Dropdown</button>
        <Menu>
          <MenuItem onClick={onClick}>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </Menu>
      </Dropdown>
    );
    
    const button = screen.getByText('Open Dropdown');
    fireEvent.click(button);
    
    await waitFor(() => {
      fireEvent.click(screen.getByText('Option 1'));
    });
    
    await waitFor(() => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});