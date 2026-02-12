import { render } from '@testing-library/react';
import Watermark from '../index';

describe('Watermark Component', () => {
  test('renders correctly with default props', () => {
    const { container } = render(
      <Watermark>
        <div>Test content</div>
      </Watermark>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders correctly with custom content', () => {
    const { container } = render(
      <Watermark content="Custom Watermark">
        <div>Test content</div>
      </Watermark>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders correctly with custom color', () => {
    const { container } = render(
      <Watermark content="Custom Color" color="rgba(255, 0, 0, 0.3)">
        <div>Test content</div>
      </Watermark>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders correctly with custom fontSize', () => {
    const { container } = render(
      <Watermark content="Custom Font Size" fontSize={20}>
        <div>Test content</div>
      </Watermark>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders correctly with custom gap', () => {
    const { container } = render(
      <Watermark content="Custom Gap" gap={[80, 80]}>
        <div>Test content</div>
      </Watermark>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders correctly with custom rotate', () => {
    const { container } = render(
      <Watermark content="Custom Rotate" rotate={45}>
        <div>Test content</div>
      </Watermark>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
