import React from 'react';
import styles from './Steps.module.css';

interface StepProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

interface StepsProps {
  current?: number;
  direction?: 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Step: React.FC<StepProps> = ({
  title,
  description,
  className,
  children,
}) => {
  return (
    <div className={`${styles.step} ${className || ''}`}>
      <div className={styles.stepContent}>
        <div className={styles.stepTitle}>{title}</div>
        {description && (
          <div className={styles.stepDescription}>{description}</div>
        )}
        {children}
      </div>
    </div>
  );
};

interface StepsComponent extends React.FC<StepsProps> {
  Step: React.FC<StepProps>;
}

const Steps: StepsComponent = ({
  current = 0,
  direction = 'horizontal',
  className,
  style,
  children,
}) => {
  const steps = React.Children.toArray(children);

  return (
    <div
      className={`${styles.steps} ${styles[direction]} ${className || ''}`}
      style={style}
    >
      {steps.map((step, index) => {
        const status =
          index < current ? 'completed' : index === current ? 'active' : 'wait';
        return (
          <div key={index} className={`${styles.stepItem} ${styles[status]}`}>
            <div className={styles.stepHead}>
              <div className={`${styles.stepIcon} ${styles[status]}`}>
                {index < current ? '✓' : index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={`${styles.stepLine} ${styles[status]}`} />
              )}
            </div>
            {React.cloneElement(step as React.ReactElement, {
              className: styles.stepContent,
            })}
          </div>
        );
      })}
    </div>
  );
};

Steps.Step = Step;

export default Steps;
