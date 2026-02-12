import { render, screen } from '@testing-library/react';
import Descriptions from '../index';

const { Item } = Descriptions;

describe('Descriptions Component', () => {
  test('renders descriptions with items', () => {
    render(
      <Descriptions>
        <Item label="姓名">张三</Item>
        <Item label="年龄">28</Item>
      </Descriptions>,
    );

    expect(screen.getByText('姓名')).toBeInTheDocument();
    expect(screen.getByText('张三')).toBeInTheDocument();
    expect(screen.getByText('年龄')).toBeInTheDocument();
    expect(screen.getByText('28')).toBeInTheDocument();
  });

  test('renders with title', () => {
    render(
      <Descriptions title="用户信息">
        <Item label="姓名">张三</Item>
      </Descriptions>,
    );

    expect(screen.getByText('用户信息')).toBeInTheDocument();
  });

  test('renders with bordered style', () => {
    const { container } = render(
      <Descriptions bordered>
        <Item label="姓名">张三</Item>
      </Descriptions>,
    );

    const descriptionsElement = container.firstChild;
    expect(descriptionsElement).toHaveClass('descriptionsBordered');
  });

  test('renders with custom column count', () => {
    const { container } = render(
      <Descriptions column={2}>
        <Item label="姓名">张三</Item>
        <Item label="年龄">28</Item>
      </Descriptions>,
    );

    const contentElement = container.querySelector('.descriptionsContent');
    expect(contentElement).toHaveStyle(
      'grid-template-columns: repeat(2, 1fr);',
    );
  });

  test('renders with different sizes', () => {
    const { container: containerSmall } = render(
      <Descriptions size="small">
        <Item label="姓名">张三</Item>
      </Descriptions>,
    );

    const { container: containerLarge } = render(
      <Descriptions size="large">
        <Item label="姓名">张三</Item>
      </Descriptions>,
    );

    expect(containerSmall.firstChild).toHaveClass('descriptionsSmall');
    expect(containerLarge.firstChild).toHaveClass('descriptionsLarge');
  });

  test('renders items with custom span', () => {
    const { container } = render(
      <Descriptions>
        <Item label="姓名" span={2}>
          张三
        </Item>
      </Descriptions>,
    );

    const itemElement = container.querySelector('.descriptionsItem');
    expect(itemElement).toHaveStyle('grid-column: span 2;');
  });

  test('supports custom className and style', () => {
    const { container } = render(
      <Descriptions className="custom-descriptions" style={{ width: '500px' }}>
        <Item label="姓名">张三</Item>
      </Descriptions>,
    );

    const descriptionsElement = container.firstChild;
    expect(descriptionsElement).toHaveClass('custom-descriptions');
    expect(descriptionsElement).toHaveStyle('width: 500px;');
  });

  test('supports item custom className and style', () => {
    const { container } = render(
      <Descriptions>
        <Item label="姓名" className="custom-item" style={{ color: 'red' }}>
          张三
        </Item>
      </Descriptions>,
    );

    const itemElement = container.querySelector('.descriptionsItem');
    expect(itemElement).toHaveClass('custom-item');
  });
});
