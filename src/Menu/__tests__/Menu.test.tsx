import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Menu from '../index';

const { Item, SubMenu } = Menu;

describe('Menu Component', () => {
  it('should render correctly with menu items', () => {
    render(
      <Menu>
        <Item key="1">Item 1</Item>
        <Item key="2">Item 2</Item>
        <Item key="3">Item 3</Item>
      </Menu>
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('should handle item click', () => {
    render(
      <Menu>
        <Menu.Item key="1">Item 1</Menu.Item>
        <Menu.Item key="2">Item 2</Menu.Item>
      </Menu>
    );
    
    const item1 = screen.getByText('Item 1');
    fireEvent.click(item1);
    
    expect(item1).toBeInTheDocument();
  });

  it('should render submenu correctly', async () => {
    render(
      <Menu>
        <Item key="1">Item 1</Item>
        <SubMenu key="2" title="SubMenu">
          <Item key="2-1">SubItem 1</Item>
          <Item key="2-2">SubItem 2</Item>
        </SubMenu>
      </Menu>
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('SubMenu')).toBeInTheDocument();
    
    const subMenu = screen.getByText('SubMenu');
    fireEvent.click(subMenu);
    
    await waitFor(() => {
      expect(screen.getByText('SubItem 1')).toBeInTheDocument();
      expect(screen.getByText('SubItem 2')).toBeInTheDocument();
    });
  });
});