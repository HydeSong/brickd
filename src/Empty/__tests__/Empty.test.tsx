import React from 'react';
import { render, screen } from '@testing-library/react';
import Empty from '../index';

describe('Empty Component', () => {
  test('renders with default image and description', () => {
    render(<Empty description="暂无数据" />);
    expect(screen.getByText('暂无数据')).toBeInTheDocument();
  });

  test('renders with custom image', () => {
    const customImage = <div data-testid="custom-image">Custom Image</div>;
    const { getByTestId } = render(
      <Empty image={customImage} description="暂无数据" />
    );
    expect(getByTestId('custom-image')).toBeInTheDocument();
  });

  test('renders with children (action buttons)', () => {
    const { getByText } = render(
      <Empty description="暂无数据">
        <button>刷新</button>
      </Empty>
    );
    expect(getByText('刷新')).toBeInTheDocument();
  });

  test('applies custom className and style', () => {
    const { container } = render(
      <Empty
        className="custom-empty"
        style={{ backgroundColor: 'lightgray' }}
        description="暂无数据"
      />
    );
    const emptyElement = container.firstChild;
    expect(emptyElement).toHaveClass('custom-empty');
    expect(emptyElement).toHaveStyle('background-color: rgb(211, 211, 211);')
  });
});