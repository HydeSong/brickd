
import { render, screen, fireEvent } from '@testing-library/react';
import Affix from '../index';

describe('Affix Component', () => {
  test('renders Affix component', () => {
    render(
      <Affix>
        <div>Affixed content</div>
      </Affix>
    );
    
    expect(screen.getByText('Affixed content')).toBeInTheDocument();
  });

  test('renders Affix with offsetTop', () => {
    render(
      <Affix offsetTop={100}>
        <div>Affixed content</div>
      </Affix>
    );
    
    expect(screen.getByText('Affixed content')).toBeInTheDocument();
  });

  test('renders Affix with offsetBottom', () => {
    render(
      <Affix offsetBottom={100}>
        <div>Affixed content</div>
      </Affix>
    );
    
    expect(screen.getByText('Affixed content')).toBeInTheDocument();
  });

  test('calls onChange callback when affix state changes', () => {
    const onChange = jest.fn();
    render(
      <Affix onChange={onChange}>
        <div>Affixed content</div>
      </Affix>
    );
    
    // 模拟滚动事件
    fireEvent.scroll(window, { target: { scrollY: 200 } });
    
    // 验证回调被调用
    expect(onChange).toHaveBeenCalled();
  });

  test('renders Affix with custom className', () => {
    const { container } = render(
      <Affix className="custom-affix">
        <div>Affixed content</div>
      </Affix>
    );
    
    const affixElement = container.querySelector('.affix');
    expect(affixElement).toHaveClass('custom-affix');
  });

  test('renders Affix with custom style', () => {
    const customStyle = { backgroundColor: 'red', color: 'white' };
    const { container } = render(
      <Affix style={customStyle}>
        <div>Affixed content</div>
      </Affix>
    );
    
    const affixElement = container.querySelector('.affix');
    expect(affixElement).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(affixElement).toHaveStyle('color: rgb(255, 255, 255)');
  });
});
