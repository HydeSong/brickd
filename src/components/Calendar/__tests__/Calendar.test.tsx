import { fireEvent, render } from '@testing-library/react';
import Calendar from '../index';

describe('Calendar Component', () => {
  test('renders correctly with default props', () => {
    render(<Calendar />);
    const calendarElement = document.querySelector('.calendar');
    expect(calendarElement).toBeInTheDocument();
  });

  test('renders correctly with value prop', () => {
    const testDate = new Date('2024-01-01');
    render(<Calendar value={testDate} />);
    const calendarElement = document.querySelector('.calendar');
    expect(calendarElement).toBeInTheDocument();
  });

  test('renders correctly with defaultValue prop', () => {
    const testDate = new Date('2024-01-01');
    render(<Calendar defaultValue={testDate} />);
    const calendarElement = document.querySelector('.calendar');
    expect(calendarElement).toBeInTheDocument();
  });

  test('calls onChange handler when date is clicked', () => {
    const onChange = jest.fn();
    render(<Calendar onChange={onChange} />);
    const calendarDay = document.querySelector('.calendarDay');
    expect(calendarDay).toBeInTheDocument();
    fireEvent.click(calendarDay!);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('renders correctly with custom className', () => {
    render(<Calendar className="custom-class" />);
    const calendarElement = document.querySelector('.calendar');
    expect(calendarElement).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { width: '350px' };
    render(<Calendar style={customStyle} />);
    const calendarElement = document.querySelector('.calendar');
    expect(calendarElement).toBeInTheDocument();
  });

  test('handles month navigation', () => {
    render(<Calendar />);
    const prevButton = document.querySelector('.calendarNavButton:first-child');
    const nextButton = document.querySelector('.calendarNavButton:last-child');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    fireEvent.click(prevButton!);
    fireEvent.click(nextButton!);
  });
});
