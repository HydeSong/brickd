import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Modal from '../index';

describe('Modal Component', () => {
  test('renders modal when visible is true', () => {
    render(
      <Modal
        visible={true}
        onCancel={() => {}}
        title="Test Modal"
      >
        Modal Content
      </Modal>
    );

    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
    expect(screen.getByText('取消')).toBeInTheDocument();
    expect(screen.getByText('确定')).toBeInTheDocument();
  });

  test('does not render modal when visible is false', () => {
    render(
      <Modal
        visible={false}
        onCancel={() => {}}
        title="Test Modal"
      >
        Modal Content
      </Modal>
    );

    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  test('calls onCancel when cancel button is clicked', () => {
    const onCancel = jest.fn();
    render(
      <Modal
        visible={true}
        onCancel={onCancel}
        title="Test Modal"
      >
        Modal Content
      </Modal>
    );

    fireEvent.click(screen.getByText('取消'));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  test('calls onOk when ok button is clicked', () => {
    const onOk = jest.fn();
    const onCancel = jest.fn();
    render(
      <Modal
        visible={true}
        onCancel={onCancel}
        onOk={onOk}
        title="Test Modal"
      >
        Modal Content
      </Modal>
    );

    fireEvent.click(screen.getByText('确定'));
    expect(onOk).toHaveBeenCalledTimes(1);
  });

  test('calls onCancel when close button is clicked', () => {
    const onCancel = jest.fn();
    render(
      <Modal
        visible={true}
        onCancel={onCancel}
        title="Test Modal"
      >
        Modal Content
      </Modal>
    );

    fireEvent.click(screen.getByLabelText('Close'));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  test('calls onCancel when mask is clicked and maskClosable is true', () => {
    const onCancel = jest.fn();
    render(
      <Modal
        visible={true}
        onCancel={onCancel}
        maskClosable={true}
        title="Test Modal"
      >
        Modal Content
      </Modal>
    );

    const mask = screen.getByRole('presentation');
    fireEvent.click(mask);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  test('does not call onCancel when mask is clicked and maskClosable is false', () => {
    const onCancel = jest.fn();
    render(
      <Modal
        visible={true}
        onCancel={onCancel}
        maskClosable={false}
        title="Test Modal"
      >
        Modal Content
      </Modal>
    );

    const mask = screen.getByRole('presentation');
    fireEvent.click(mask);
    expect(onCancel).not.toHaveBeenCalled();
  });

  test('displays custom footer when provided', () => {
    render(
      <Modal
        visible={true}
        onCancel={() => {}}
        title="Test Modal"
        footer={<button data-testid="custom-button">Custom Button</button>}
      >
        Modal Content
      </Modal>
    );

    expect(screen.getByTestId('custom-button')).toBeInTheDocument();
    expect(screen.queryByText('取消')).not.toBeInTheDocument();
    expect(screen.queryByText('确定')).not.toBeInTheDocument();
  });

  test('displays loading state when confirmLoading is true', () => {
    render(
      <Modal
        visible={true}
        onCancel={() => {}}
        confirmLoading={true}
        title="Test Modal"
      >
        Modal Content
      </Modal>
    );

    expect(screen.getByText('加载中...')).toBeInTheDocument();
  });

  test('handles keyboard events when keyboard is true', () => {
    const onCancel = jest.fn();
    render(
      <Modal
        visible={true}
        onCancel={onCancel}
        keyboard={true}
        title="Test Modal"
      >
        Modal Content
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  test('does not handle keyboard events when keyboard is false', () => {
    const onCancel = jest.fn();
    render(
      <Modal
        visible={true}
        onCancel={onCancel}
        keyboard={false}
        title="Test Modal"
      >
        Modal Content
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onCancel).not.toHaveBeenCalled();
  });
});