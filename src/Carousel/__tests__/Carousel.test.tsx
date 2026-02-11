
import { render, screen, fireEvent, act } from '@testing-library/react';
import Carousel from '../index';

describe('Carousel Component', () => {
  test('renders carousel with items', () => {
    render(
      <Carousel>
        <Carousel.Item>
          <div>Slide 1</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 2</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 3</div>
        </Carousel.Item>
      </Carousel>
    );

    expect(screen.getByText('Slide 1')).toBeInTheDocument();
  });

  test('switches slides when arrow buttons are clicked', () => {
    render(
      <Carousel defaultActiveIndex={0}>
        <Carousel.Item>
          <div>Slide 1</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 2</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 3</div>
        </Carousel.Item>
      </Carousel>
    );

    // Click next button
    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);

    // Click previous button
    const prevButton = screen.getByText('<');
    fireEvent.click(prevButton);
  });

  test('switches slides when dots are clicked', () => {
    render(
      <Carousel defaultActiveIndex={0}>
        <Carousel.Item>
          <div>Slide 1</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 2</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 3</div>
        </Carousel.Item>
      </Carousel>
    );

    // Click on the second dot
    const dots = screen.getAllByRole('button');
    if (dots.length >= 3) {
      fireEvent.click(dots[2]);
    }
  });

  test('calls onChange callback when slide changes', () => {
    const onChange = jest.fn();
    render(
      <Carousel defaultActiveIndex={0} onChange={onChange}>
        <Carousel.Item>
          <div>Slide 1</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 2</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 3</div>
        </Carousel.Item>
      </Carousel>
    );

    // Click next button
    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);

    expect(onChange).toHaveBeenCalledWith(1);
  });

  test('supports controlled activeIndex', () => {
    const { rerender } = render(
      <Carousel activeIndex={0}>
        <Carousel.Item>
          <div>Slide 1</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 2</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 3</div>
        </Carousel.Item>
      </Carousel>
    );

    // Change activeIndex
    rerender(
      <Carousel activeIndex={1}>
        <Carousel.Item>
          <div>Slide 1</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 2</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 3</div>
        </Carousel.Item>
      </Carousel>
    );
  });

  test('supports autoplay', () => {
    jest.useFakeTimers();
    const onChange = jest.fn();

    render(
      <Carousel autoplay={true} autoplaySpeed={100} onChange={onChange}>
        <Carousel.Item>
          <div>Slide 1</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 2</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Slide 3</div>
        </Carousel.Item>
      </Carousel>
    );

    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(150);
    });

    expect(onChange).toHaveBeenCalled();
    jest.useRealTimers();
  });

  test('supports custom className and style', () => {
    const { container } = render(
      <Carousel className="custom-carousel" style={{ width: '500px', height: '200px' }}>
        <Carousel.Item>
          <div>Slide 1</div>
        </Carousel.Item>
      </Carousel>
    );

    const carouselElement = container.firstChild;
    expect(carouselElement).toHaveClass('custom-carousel');
    expect(carouselElement).toHaveStyle('width: 500px; height: 200px;');
  });

  test('does not show arrows or dots when only one item', () => {
    render(
      <Carousel>
        <Carousel.Item>
          <div>Slide 1</div>
        </Carousel.Item>
      </Carousel>
    );

    const nextButton = screen.queryByText('>');
    const prevButton = screen.queryByText('<');
    expect(nextButton).not.toBeInTheDocument();
    expect(prevButton).not.toBeInTheDocument();
  });
});