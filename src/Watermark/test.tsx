import React from 'react';
import Watermark from './index';

const WatermarkTest = () => {
  return (
    <div>
      <h1>Watermark 测试</h1>
      
      <h2>测试 1: 基本水印</h2>
      <Watermark>
        <div style={{ padding: '50px', background: '#f5f5f5', marginBottom: '30px' }}>
          <p>这是一段测试文本，水印应该显示在这段文本之上。</p>
          <p>如果您能看到水印，说明Watermark组件工作正常。</p>
        </div>
      </Watermark>
      
      <h2>测试 2: 明显的水印</h2>
      <Watermark 
        content="测试水印" 
        color="rgba(255, 0, 0, 0.3)" 
        fontSize={20} 
        gap={[80, 80]}
      >
        <div style={{ padding: '50px', background: '#f5f5f5', marginBottom: '30px' }}>
          <p>这是一段测试文本，红色水印应该清晰可见。</p>
        </div>
      </Watermark>
      
      <h2>测试 3: 无旋转水印</h2>
      <Watermark 
        content="无旋转水印" 
        rotate={0} 
        color="rgba(0, 0, 255, 0.3)"
      >
        <div style={{ padding: '50px', background: '#f5f5f5', marginBottom: '30px' }}>
          <p>这是一段测试文本，蓝色水平水印应该清晰可见。</p>
        </div>
      </Watermark>
    </div>
  );
};

export default WatermarkTest;