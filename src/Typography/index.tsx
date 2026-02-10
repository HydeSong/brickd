import React from 'react';
import styles from './Typography.module.css';

// 基础文本接口
interface BaseTypographyProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// 标题接口
interface TitleProps extends BaseTypographyProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  strong?: boolean;
}

// 段落接口
interface ParagraphProps extends BaseTypographyProps {
  ellipsis?: boolean;
  rows?: number;
}

// 文本接口
interface TextProps extends BaseTypographyProps {
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  strong?: boolean;
  italic?: boolean;
  underline?: boolean;
  delete?: boolean;
  code?: boolean;
}

// 标题组件
const Title: React.FC<TitleProps> = ({ level = 1, strong = false, className, style, children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={`
        ${styles.title}
        ${styles[`title-${level}`]}
        ${strong ? styles.strong : ''}
        ${className || ''}
      `}
      style={style}
    >
      {children}
    </Tag>
  );
};

// 段落组件
const Paragraph: React.FC<ParagraphProps> = ({ ellipsis = false, rows, className, style, children }) => {
  return (
    <p
      className={`
        ${styles.paragraph}
        ${ellipsis ? styles.ellipsis : ''}
        ${rows ? styles[`ellipsis-${rows}`] : ''}
        ${className || ''}
      `}
      style={{
        ...style,
        WebkitLineClamp: rows,
      }}
    >
      {children}
    </p>
  );
};

// 文本组件
const Text: React.FC<TextProps> = ({
  type = 'secondary',
  strong = false,
  italic = false,
  underline = false,
  delete: del = false,
  code = false,
  className,
  style,
  children,
}) => {
  return (
    <span
      className={`
        ${styles.text}
        ${styles[`text-${type}`]}
        ${strong ? styles.strong : ''}
        ${italic ? styles.italic : ''}
        ${underline ? styles.underline : ''}
        ${del ? styles.delete : ''}
        ${code ? styles.code : ''}
        ${className || ''}
      `}
      style={style}
    >
      {children}
    </span>
  );
};

// 排版组件集合
const Typography = {
  Title,
  Paragraph,
  Text,
};

export default Typography;
export { Title, Paragraph, Text };
