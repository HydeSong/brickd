import { fireEvent, render, screen } from '@testing-library/react';
import Anchor from '../index';

const AnchorLink = Anchor.Link;

describe('Anchor Component', () => {
  test('renders Anchor component with links', () => {
    render(
      <Anchor>
        <AnchorLink href="#section1" title="Section 1" />
        <AnchorLink href="#section2" title="Section 2" />
        <AnchorLink href="#section3" title="Section 3" />
      </Anchor>,
    );

    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
    expect(screen.getByText('Section 3')).toBeInTheDocument();
  });

  test('renders Anchor with nested links', () => {
    render(
      <Anchor>
        <AnchorLink href="#section1" title="Section 1">
          <AnchorLink href="#subsection1-1" title="Subsection 1-1" />
          <AnchorLink href="#subsection1-2" title="Subsection 1-2" />
        </AnchorLink>
        <AnchorLink href="#section2" title="Section 2" />
      </Anchor>,
    );

    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Subsection 1-1')).toBeInTheDocument();
    expect(screen.getByText('Subsection 1-2')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
  });

  test('renders Anchor with custom className', () => {
    render(
      <Anchor className="custom-anchor">
        <AnchorLink href="#section1" title="Section 1" />
      </Anchor>,
    );

    const anchorElement = screen.getByText('Section 1').closest('div');
    expect(anchorElement).toHaveClass('custom-anchor');
  });

  test('renders Anchor with custom style', () => {
    const customStyle = { backgroundColor: 'red', color: 'white' };
    render(
      <Anchor style={customStyle}>
        <AnchorLink href="#section1" title="Section 1" />
      </Anchor>,
    );

    const anchorElement = screen.getByText('Section 1').closest('div');
    expect(anchorElement).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(anchorElement).toHaveStyle('color: rgb(255, 255, 255)');
  });

  test('renders Anchor with offset', () => {
    render(
      <Anchor offset={100}>
        <AnchorLink href="#section1" title="Section 1" />
      </Anchor>,
    );

    expect(screen.getByText('Section 1')).toBeInTheDocument();
  });

  test('handles scroll events', () => {
    // 创建测试用的 section 元素
    const section = document.createElement('section');
    section.id = 'section1';
    section.style.height = '200px';
    section.style.marginTop = '1000px';
    document.body.appendChild(section);

    render(
      <Anchor>
        <AnchorLink href="#section1" title="Section 1" />
      </Anchor>,
    );

    // 模拟滚动到 section1
    window.scrollTo(0, 1100);
    fireEvent.scroll(window);

    // 清理
    document.body.removeChild(section);
  });
});
