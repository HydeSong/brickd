import { render, screen } from '@testing-library/react';
import Button from 'brickd';
import React, { useState } from 'react';
import Drawer from '../index';

const TestDrawer = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button data-testid="open-button" onClick={() => setVisible(true)}>
        Open Drawer
      </Button>
      <Drawer
        title="Test Drawer"
        visible={visible}
        onVisibleChange={setVisible}
        data-testid="drawer"
        footer={
          <>
            <Button
              data-testid="cancel-button"
              onClick={() => setVisible(false)}
            >
              Cancel
            </Button>
            <Button
              data-testid="ok-button"
              type="primary"
              onClick={() => setVisible(false)}
            >
              OK
            </Button>
          </>
        }
      >
        <div data-testid="drawer-content">Drawer content</div>
      </Drawer>
    </>
  );
};

describe('Drawer Component', () => {
  test('renders closed by default', () => {
    render(<TestDrawer />);
    expect(screen.queryByTestId('drawer')).not.toBeInTheDocument();
  });

  test('opens when button is clicked', () => {
    render(<TestDrawer />);
    fireEvent.click(screen.getByTestId('open-button'));
    expect(screen.getByTestId('drawer')).toBeInTheDocument();
    expect(screen.getByTestId('drawer-content')).toBeInTheDocument();
  });

  test('closes when cancel button is clicked', () => {
    render(<TestDrawer />);
    fireEvent.click(screen.getByTestId('open-button'));
    expect(screen.getByTestId('drawer')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('cancel-button'));
    expect(screen.queryByTestId('drawer')).not.toBeInTheDocument();
  });

  test('closes when ok button is clicked', () => {
    render(<TestDrawer />);
    fireEvent.click(screen.getByTestId('open-button'));
    expect(screen.getByTestId('drawer')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('ok-button'));
    expect(screen.queryByTestId('drawer')).not.toBeInTheDocument();
  });

  test('closes when close button is clicked', () => {
    render(<TestDrawer />);
    fireEvent.click(screen.getByTestId('open-button'));
    expect(screen.getByTestId('drawer')).toBeInTheDocument();
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
    expect(screen.queryByTestId('drawer')).not.toBeInTheDocument();
  });

  test('renders with different placements', () => {
    const placements = ['top', 'right', 'bottom', 'left'] as const;
    placements.forEach((placement) => {
      const { container } = render(
        <Drawer
          title="Test Drawer"
          placement={placement}
          visible={true}
          onVisibleChange={() => {}}
        >
          Drawer content
        </Drawer>,
      );
      const drawer = container.querySelector('.drawer');
      expect(drawer).toHaveClass(
        `drawer${placement.charAt(0).toUpperCase() + placement.slice(1)}`,
      );
    });
  });

  test('renders with custom width and height', () => {
    const { container } = render(
      <Drawer
        title="Test Drawer"
        visible={true}
        onVisibleChange={() => {}}
        width={400}
        height={500}
      >
        Drawer content
      </Drawer>,
    );
    const drawer = container.querySelector('.drawer');
    expect(drawer).toHaveStyle('width: 400px');
  });

  test('renders with mask={false}', () => {
    const { container } = render(
      <Drawer
        title="Test Drawer"
        visible={true}
        onVisibleChange={() => {}}
        mask={false}
      >
        Drawer content
      </Drawer>,
    );
    const mask = container.querySelector('.drawerMask');
    expect(mask).not.toBeInTheDocument();
  });

  test('renders with closable={false}', () => {
    render(
      <Drawer
        title="Test Drawer"
        visible={true}
        onVisibleChange={() => {}}
        closable={false}
      >
        Drawer content
      </Drawer>,
    );
    expect(
      screen.queryByRole('button', { name: 'Close' }),
    ).not.toBeInTheDocument();
  });

  test('renders with custom className and style', () => {
    const { container } = render(
      <Drawer
        title="Test Drawer"
        visible={true}
        onVisibleChange={() => {}}
        className="custom-drawer"
        style={{ backgroundColor: '#f0f0f0' }}
      >
        Drawer content
      </Drawer>,
    );
    const drawer = container.querySelector('.drawer');
    expect(drawer).toHaveClass('custom-drawer');
    expect(drawer).toHaveStyle('background-color: #f0f0f0');
  });

  test('renders with bodyStyle', () => {
    const { container } = render(
      <Drawer
        title="Test Drawer"
        visible={true}
        onVisibleChange={() => {}}
        bodyStyle={{ padding: '40px' }}
      >
        Drawer content
      </Drawer>,
    );
    const drawerBody = container.querySelector('.drawerBody');
    expect(drawerBody).toHaveStyle('padding: 40px');
  });
});
