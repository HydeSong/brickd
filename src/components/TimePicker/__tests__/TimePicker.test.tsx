import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import TimePicker from '../index';

describe('TimePicker Component', () => {
  it('should render correctly', () => {
    render(<TimePicker placeholder="Select a time" />);
    expect(screen.getByText('Select a time')).toBeInTheDocument();
  });

  it('should handle time change', async () => {
    const onChange = jest.fn();
    render(<TimePicker placeholder="Select a time" onChange={onChange} />);

    const trigger = screen
      .getByText('Select a time')
      .closest('.timePickerTrigger');
    fireEvent.click(trigger!);

    await waitFor(() => {
      const confirmButton = screen.getByText('确定');
      fireEvent.click(confirmButton);
    });

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  it('should support disabled state', () => {
    render(<TimePicker placeholder="Select a time" disabled />);
    const trigger = screen
      .getByText('Select a time')
      .closest('.timePickerTrigger');
    expect(trigger).toHaveClass('timePickerTriggerDisabled');
  });

  it('should display default value', () => {
    render(<TimePicker placeholder="Select a time" defaultValue="10:30" />);
    expect(screen.getByText('10:30')).toBeInTheDocument();
  });
});
