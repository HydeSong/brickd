import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Upload from '../index';

describe('Upload Component', () => {
  test('renders upload component with default trigger', () => {
    render(<Upload />);
    
    expect(screen.getByText('Click to Upload')).toBeInTheDocument();
  });

  test('renders upload component with custom trigger', () => {
    render(
      <Upload>
        <button>Custom Upload</button>
      </Upload>
    );
    
    expect(screen.getByText('Custom Upload')).toBeInTheDocument();
  });

  test('handles file selection', async () => {
    const onChange = jest.fn();
    render(<Upload onChange={onChange} />);
    
    const input = screen.getByTestId('upload-input');
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });
    
    fireEvent.change(input, {
      target: {
        files: [file],
      },
    });
    
    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  test('handles multiple file selection', async () => {
    const onChange = jest.fn();
    render(<Upload multiple onChange={onChange} />);
    
    const input = screen.getByTestId('upload-input');
    const file1 = new File(['test1'], 'test1.txt', { type: 'text/plain' });
    const file2 = new File(['test2'], 'test2.txt', { type: 'text/plain' });
    
    fireEvent.change(input, {
      target: {
        files: [file1, file2],
      },
    });
    
    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  test('handles file removal', () => {
    const onRemove = jest.fn();
    const onChange = jest.fn();
    const fileList = [
      {
        uid: '1',
        name: 'test.txt',
        status: 'done' as const,
        url: 'http://example.com/test.txt',
      },
    ];
    
    render(
      <Upload
        fileList={fileList}
        onRemove={onRemove}
        onChange={onChange}
      />
    );
    
    const removeButton = screen.getByText('×');
    fireEvent.click(removeButton);
    
    expect(onRemove).toHaveBeenCalledWith(fileList[0]);
    expect(onChange).toHaveBeenCalled();
  });

  test('disables upload when disabled prop is true', () => {
    render(<Upload disabled />);
    
    const trigger = screen.getByText('Click to Upload').closest('div')?.parentElement;
    expect(trigger).toHaveClass('disabled');
  });

  test('respects accept prop', () => {
    render(<Upload accept="image/*" />);
    
    const input = screen.getByTestId('upload-input');
    expect(input).toHaveAttribute('accept', 'image/*');
  });

  test('respects multiple prop', () => {
    render(<Upload multiple />);
    
    const input = screen.getByTestId('upload-input');
    expect(input).toHaveAttribute('multiple');
  });
});
