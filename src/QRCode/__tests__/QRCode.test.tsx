
import { render, screen } from '@testing-library/react';
import QRCode from '../index';

describe('QRCode Component', () => {
  test('renders QRCode component', () => {
    render(<QRCode value="https://example.com" />);
    
    expect(screen.getByAltText('QR Code')).toBeInTheDocument();
  });

  test('renders QRCode with custom size', () => {
    render(<QRCode value="https://example.com" size={200} />);
    
    const qrcode = screen.getByAltText('QR Code').closest('div');
    expect(qrcode).toHaveStyle('width: 200px');
    expect(qrcode).toHaveStyle('height: 200px');
  });

  test('renders QRCode with custom colors', () => {
    render(
      <QRCode 
        value="https://example.com" 
        color="#ff0000" 
        backgroundColor="#ffffff" 
      />
    );
    
    expect(screen.getByAltText('QR Code')).toBeInTheDocument();
  });

  test('renders QRCode with custom className', () => {
    render(
      <QRCode 
        value="https://example.com" 
        className="custom-qrcode" 
      />
    );
    
    const qrcode = screen.getByAltText('QR Code').closest('div');
    expect(qrcode).toHaveClass('custom-qrcode');
  });

  test('renders QRCode with custom style', () => {
    render(
      <QRCode 
        value="https://example.com" 
        style={{ border: '2px solid red' }} 
      />
    );
    
    const qrcode = screen.getByAltText('QR Code').closest('div');
    expect(qrcode).toHaveStyle('border: 2px solid red');
  });
});
