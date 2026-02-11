import React from 'react';
import { render, screen } from '@testing-library/react';
import Typography from '../index';

const { Text, Title, Paragraph } = Typography;

describe('Typography Component', () => {
  it('should render Text correctly', () => {
    render(<Text>Test text</Text>);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });

  it('should render Title correctly', () => {
    render(<Title level={1}>Test Title</Title>);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('should render Paragraph correctly', () => {
    render(<Paragraph>Test paragraph</Paragraph>);
    expect(screen.getByText('Test paragraph')).toBeInTheDocument();
  });

  it('should support different text variants', () => {
    render(
      <>
        <Text strong>Strong text</Text>
        <Text italic>Italic text</Text>
        <Text underline>Underline text</Text>
        <Text delete>Deleted text</Text>
      </>
    );
    
    expect(screen.getByText('Strong text')).toBeInTheDocument();
    expect(screen.getByText('Italic text')).toBeInTheDocument();
    expect(screen.getByText('Underline text')).toBeInTheDocument();
    expect(screen.getByText('Deleted text')).toBeInTheDocument();
  });

  it('should support different title levels', () => {
    render(
      <>
        <Title level={1}>Level 1</Title>
        <Title level={2}>Level 2</Title>
        <Title level={3}>Level 3</Title>
        <Title level={4}>Level 4</Title>
        <Title level={5}>Level 5</Title>
      </>
    );
    
    expect(screen.getByText('Level 1')).toBeInTheDocument();
    expect(screen.getByText('Level 2')).toBeInTheDocument();
    expect(screen.getByText('Level 3')).toBeInTheDocument();
    expect(screen.getByText('Level 4')).toBeInTheDocument();
    expect(screen.getByText('Level 5')).toBeInTheDocument();
  });
});