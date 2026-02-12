import { fireEvent, render, waitFor } from '@testing-library/react';
import Slider from '../index';

describe('Slider Component', () => {
  it('should render correctly', () => {
    const { container } = render(<Slider />);
    const slider = container.querySelector('.slider');
    expect(slider).toBeInTheDocument();
  });

  it('should handle value change', async () => {
    const onChange = jest.fn();
    const { container } = render(<Slider onChange={onChange} />);

    const handle = container.querySelector('.sliderHandle');
    fireEvent.mouseDown(handle!);
    fireEvent.mouseMove(document, { clientX: 200 });
    fireEvent.mouseUp(document);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  it('should support disabled state', () => {
    const { container } = render(<Slider disabled />);
    const slider = container.querySelector('.slider');
    expect(slider).toHaveClass('sliderDisabled');
  });

  it('should display default value', () => {
    const { container } = render(<Slider defaultValue={30} />);
    const trackHighlight = container.querySelector('.sliderTrackHighlight');
    expect(trackHighlight).toHaveStyle('width: 30%');
  });

  it('should support range mode', () => {
    const { container } = render(<Slider range />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
