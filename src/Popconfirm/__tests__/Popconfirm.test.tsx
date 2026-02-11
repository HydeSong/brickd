
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Popconfirm from '../index';

describe('Popconfirm Component', () => {
  test('renders popconfirm trigger', () => {
    render(
      <Popconfirm
        title="Are you sure?"
        onConfirm={() => {}}
      >
        <button>Delete</button>
      </Popconfirm>
    );

    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  test('shows popover when trigger is clicked', () => {
    render(
      <Popconfirm
        title="Are you sure?"
        onConfirm={() => {}}
      >
        <button>Delete</button>
      </Popconfirm>
    );

    fireEvent.click(screen.getByText('Delete'));
    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
    expect(screen.getByText('取消')).toBeInTheDocument();
    expect(screen.getByText('确定')).toBeInTheDocument();
  });

  test('hides popover when confirm is clicked', () => {
    const onConfirm = jest.fn();
    render(
      <Popconfirm
        title="Are you sure?"
        onConfirm={onConfirm}
      >
        <button>Delete</button>
      </Popconfirm>
    );

    fireEvent.click(screen.getByText('Delete'));
    fireEvent.click(screen.getByText('确定'));
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
  });

  test('hides popover when cancel is clicked', () => {
    const onCancel = jest.fn();
    render(
      <Popconfirm
        title="Are you sure?"
        onConfirm={() => {}}
        onCancel={onCancel}
      >
        <button>Delete</button>
      </Popconfirm>
    );

    fireEvent.click(screen.getByText('Delete'));
    fireEvent.click(screen.getByText('取消'));
    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
  });

  test('hides popover when clicked outside', () => {
    render(
      <Popconfirm
        title="Are you sure?"
        onConfirm={() => {}}
      >
        <button>Delete</button>
      </Popconfirm>
    );

    fireEvent.click(screen.getByText('Delete'));
    expect(screen.getByText('Are you sure?')).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
  });

  test('shows popover on hover when trigger is hover', () => {
    render(
      <Popconfirm
        title="Are you sure?"
        onConfirm={() => {}}
        trigger="hover"
      >
        <button>Delete</button>
      </Popconfirm>
    );

    fireEvent.mouseEnter(screen.getByText('Delete'));
    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
  });

  test('hides popover on leave when trigger is hover', () => {
    render(
      <Popconfirm
        title="Are you sure?"
        onConfirm={() => {}}
        trigger="hover"
      >
        <button>Delete</button>
      </Popconfirm>
    );

    fireEvent.mouseEnter(screen.getByText('Delete'));
    expect(screen.getByText('Are you sure?')).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByText('Delete'));
    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
  });

  test('does not show popover when disabled', () => {
    render(
      <Popconfirm
        title="Are you sure?"
        onConfirm={() => {}}
        disabled
      >
        <button>Delete</button>
      </Popconfirm>
    );

    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
  });

  test('displays custom ok and cancel text', () => {
    render(
      <Popconfirm
        title="Are you sure?"
        onConfirm={() => {}}
        okText="Yes"
        cancelText="No"
      >
        <button>Delete</button>
      </Popconfirm>
    );

    fireEvent.click(screen.getByText('Delete'));
    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('No')).toBeInTheDocument();
  });

  test('displays description when provided', () => {
    render(
      <Popconfirm
        title="Are you sure?"
        description="This action cannot be undone"
        onConfirm={() => {}}
      >
        <button>Delete</button>
      </Popconfirm>
    );

    fireEvent.click(screen.getByText('Delete'));
    expect(screen.getByText('This action cannot be undone')).toBeInTheDocument();
  });
});