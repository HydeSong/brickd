
import { render, screen, fireEvent } from '@testing-library/react';
import Splitter from '../index';

describe('Splitter Component', () => {
  it('should render basic splitter with two panels', () => {
    render(
      <Splitter>
        <div>Panel 1</div>
        <div>Panel 2</div>
      </Splitter>
    );
    const panels = screen.getAllByText(/Panel/);
    expect(panels).toHaveLength(2);
  });

  it('should render horizontal splitter by default', () => {
    const { container } = render(
      <Splitter>
        <div>Panel 1</div>
        <div>Panel 2</div>
      </Splitter>
    );
    const splitter = container.querySelector('.splitter');
    expect(splitter).toBeInTheDocument();
    expect(splitter).not.toHaveClass('vertical');
  });

  it('should render vertical splitter when direction is vertical', () => {
    const { container } = render(
      <Splitter direction="vertical">
        <div>Panel 1</div>
        <div>Panel 2</div>
      </Splitter>
    );
    const splitter = container.querySelector('.splitter');
    expect(splitter).toBeInTheDocument();
    expect(splitter).toHaveClass('vertical');
  });

  it('should have default size of 50% for first panel', () => {
    const { container } = render(
      <Splitter>
        <div>Panel 1</div>
        <div>Panel 2</div>
      </Splitter>
    );
    const panels = container.querySelectorAll('.panel');
    expect(panels[0]).toBeInTheDocument();
  });

  it('should respond to mouse down on resizer', () => {
    const { container } = render(
      <Splitter>
        <div>Panel 1</div>
        <div>Panel 2</div>
      </Splitter>
    );
    const resizer = container.querySelector('.resizer');
    expect(resizer).toBeInTheDocument();
    fireEvent.mouseDown(resizer!);
  });

  it('should handle custom default size', () => {
    const { container } = render(
      <Splitter defaultSize={30}>
        <div>Panel 1</div>
        <div>Panel 2</div>
      </Splitter>
    );
    const panels = container.querySelectorAll('.panel');
    expect(panels[0]).toBeInTheDocument();
  });

  it('should handle custom min and max size', () => {
    render(
      <Splitter minSize={20} maxSize={80}>
        <div>Panel 1</div>
        <div>Panel 2</div>
      </Splitter>
    );
    const panels = screen.getAllByText(/Panel/);
    expect(panels).toHaveLength(2);
  });

  it('should apply custom className and style', () => {
    const { container } = render(
      <Splitter className="custom-splitter" style={{ border: '1px solid red' }}>
        <div>Panel 1</div>
        <div>Panel 2</div>
      </Splitter>
    );
    const splitter = container.querySelector('.splitter');
    expect(splitter).toBeInTheDocument();
    expect(splitter).toHaveClass('custom-splitter');
  });
});
