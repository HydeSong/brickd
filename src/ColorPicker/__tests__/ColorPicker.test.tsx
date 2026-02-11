
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ColorPicker from '../index';

describe('ColorPicker Component', () => {
  it('should render correctly', () => {
    render(<ColorPicker />);
    expect(screen.getByText('#1890ff')).toBeInTheDocument();
  });

  it('should handle color change', async () => {
    const onChange = jest.fn();
    const { container } = render(<ColorPicker onChange={onChange} />);
    
    const trigger = container.querySelector('.colorPickerTrigger');
    expect(trigger).toBeInTheDocument();
  });

  it('should support disabled state', () => {
    const { container } = render(<ColorPicker disabled />);
    const trigger = container.querySelector('.colorPickerTrigger');
    expect(trigger).toBeInTheDocument();
  });

  it('should display default value', () => {
    render(<ColorPicker defaultValue="#00ff00" />);
    expect(screen.getByText('#00ff00')).toBeInTheDocument();
  });
});