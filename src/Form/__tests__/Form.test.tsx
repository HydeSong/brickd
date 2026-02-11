
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from '../index';

describe('Form Component', () => {
  it('should render correctly', () => {
    render(
      <Form>
        <div>
          <label>Name</label>
          <input placeholder="Enter name" />
        </div>
      </Form>
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
  });

  it('should handle form submission', async () => {
    render(
      <Form>
        <div>
          <label>Name</label>
          <input placeholder="Enter name" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    );
    
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
  });

  it('should display form errors', () => {
    render(
      <Form>
        <div>
          <label>Name</label>
          <input placeholder="Enter name" />
          <span>Name is required</span>
        </div>
      </Form>
    );
    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });
});