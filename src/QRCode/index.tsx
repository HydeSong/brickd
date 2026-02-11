import React from 'react';
import styles from './QRCode.module.css';

interface QRCodeProps {
  value: string;
  size?: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

const QRCode: React.FC<QRCodeProps> = ({
  value,
  size = 128,
  color = '#000000',
  backgroundColor = '#FFFFFF',
  className,
  style,
}) => {
  // 简单的二维码生成实现
  // 注意：这是一个简化版的实现，实际项目中建议使用专门的二维码库
  const generateQRCodeData = (text: string, size: number) => {
    // 这里使用一个简单的方法生成二维码数据
    // 实际项目中应该使用 qrcode 等库
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // 绘制背景
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, size, size);
      
      // 绘制简单的二维码样式（实际项目中应该使用真正的二维码生成算法）
      ctx.fillStyle = color;
      const cellSize = size / 21;
      
      // 绘制定位图案
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
          if ((i === 0 || i === 6 || j === 0 || j === 6) || (i >= 2 && i <= 4 && j >= 2 && j <= 4)) {
            ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
            ctx.fillRect(i * cellSize, (20 - j) * cellSize, cellSize, cellSize);
            ctx.fillRect((20 - i) * cellSize, j * cellSize, cellSize, cellSize);
          }
        }
      }
      
      // 绘制数据区域（简单模拟）
      for (let i = 8; i < 13; i++) {
        for (let j = 8; j < 13; j++) {
          if (Math.random() > 0.5) {
            ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
          }
        }
      }
      
      return canvas.toDataURL('image/png');
    }
    
    return '';
  };

  const qrCodeUrl = generateQRCodeData(value, size);

  return (
    <div
      className={`${styles.qrcode} ${className || ''}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
    >
      <img
        src={qrCodeUrl}
        alt="QR Code"
        className={styles.qrcodeImage}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default QRCode;