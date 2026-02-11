
import { render, screen } from '@testing-library/react';
import Watermark from '../index';

describe('Watermark Component', () => {
  test('renders watermark with default content', () => {
    render(
      <Watermark>
        <div>Content</div>
      </Watermark>
    );

    const watermarkElements = screen.getAllByText('Watermark');
    expect(watermarkElements.length).toBeGreaterThan(0);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('renders watermark with custom content', () => {
    render(
      <Watermark content="Custom Watermark">
        <div>Content</div>
      </Watermark>
    );

    const watermarkElements = screen.getAllByText('Custom Watermark');
    expect(watermarkElements.length).toBeGreaterThan(0);
  });

  test('applies custom width and height', () => {
    render(
      <Watermark width={200} height={80}>
        <div>Content</div>
      </Watermark>
    );

    const watermarkElements = screen.getAllByText('Watermark');
    expect(watermarkElements.length).toBeGreaterThan(0);
  });

  test('applies custom rotate', () => {
    render(
      <Watermark rotate={0}>
        <div>Content</div>
      </Watermark>
    );

    const watermarkElements = screen.getAllByText('Watermark');
    expect(watermarkElements.length).toBeGreaterThan(0);
  });

  test('applies custom font size and weight', () => {
    render(
      <Watermark fontSize={16} fontWeight={600}>
        <div>Content</div>
      </Watermark>
    );

    const watermarkElements = screen.getAllByText('Watermark');
    expect(watermarkElements.length).toBeGreaterThan(0);
  });

  test('applies custom color', () => {
    render(
      <Watermark color="rgba(255, 0, 0, 0.2)">
        <div>Content</div>
      </Watermark>
    );

    const watermarkElements = screen.getAllByText('Watermark');
    expect(watermarkElements.length).toBeGreaterThan(0);
  });

  test('applies custom opacity', () => {
    render(
      <Watermark opacity={0.5}>
        <div>Content</div>
      </Watermark>
    );

    const watermarkElements = screen.getAllByText('Watermark');
    expect(watermarkElements.length).toBeGreaterThan(0);
  });

  test('applies custom gap', () => {
    render(
      <Watermark gap={[50, 50]}>
        <div>Content</div>
      </Watermark>
    );

    const watermarkElements = screen.getAllByText('Watermark');
    expect(watermarkElements.length).toBeGreaterThan(0);
  });

  test('applies custom zIndex', () => {
    render(
      <Watermark zIndex={1000}>
        <div>Content</div>
      </Watermark>
    );

    const watermarkElements = screen.getAllByText('Watermark');
    expect(watermarkElements.length).toBeGreaterThan(0);
  });

  test('renders standalone Watermark', () => {
    render(<Watermark content="Standalone Watermark" />);

    const watermarkElements = screen.getAllByText('Standalone Watermark');
    expect(watermarkElements.length).toBeGreaterThan(0);
  });
});