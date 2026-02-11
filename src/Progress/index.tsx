
import styles from './Progress.module.css';

interface ProgressProps {
  percent: number;
  type?: 'line' | 'circle';
  status?: 'success' | 'active' | 'exception';
  strokeWidth?: number;
  showInfo?: boolean;
  format?: (percent: number) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  strokeColor?: string;
  trailColor?: string;
}

const Progress: React.FC<ProgressProps> = ({
  percent,
  type = 'line',
  status,
  strokeWidth = 8,
  showInfo = true,
  format,
  className = '',
  style = {},
  strokeColor,
  trailColor,
}) => {
  const clampedPercent = Math.max(0, Math.min(100, percent));

  const getStatusColor = () => {
    if (strokeColor) {
      return strokeColor;
    }
    if (status === 'success') {
      return '#52c41a';
    }
    if (status === 'exception') {
      return '#ff4d4f';
    }
    return '#1890ff';
  };

  const renderLineProgress = () => {
    const progressStyle = {
      width: `${clampedPercent}%`,
      backgroundColor: getStatusColor(),
      height: `${strokeWidth}px`,
    };

    const trailStyle = {
      backgroundColor: trailColor || '#f0f0f0',
      height: `${strokeWidth}px`,
    };

    return (
      <div className={`${styles.progressLine} ${className}`} style={style}>
        <div className={styles.progressTrail} style={trailStyle}>
          <div className={styles.progressBar} style={progressStyle} />
        </div>
        {showInfo && (
          <div className={styles.progressInfo}>
            {format ? format(clampedPercent) : `${Math.round(clampedPercent)}%`}
          </div>
        )}
      </div>
    );
  };

  const renderCircleProgress = () => {
    const radius = 50 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference * (1 - clampedPercent / 100);

    const circleStyle = {
      stroke: getStatusColor(),
      strokeWidth,
      strokeDasharray,
      strokeDashoffset,
      transform: 'rotate(-90deg)',
      transformOrigin: '50% 50%',
    };

    const trailStyle = {
      stroke: trailColor || '#f0f0f0',
      strokeWidth,
    };

    return (
      <div className={`${styles.progressCircle} ${className}`} style={style}>
        <div className={styles.progressCircleContainer}>
          <svg width="100" height="100" className={styles.progressCircleSvg}>
            <circle
              cx="50"
              cy="50"
              r={radius}
              className={styles.progressCircleTrail}
              style={trailStyle}
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              className={styles.progressCircleBar}
              style={circleStyle}
            />
          </svg>
          {showInfo && (
            <div className={styles.progressCircleInfo}>
              {format ? format(clampedPercent) : `${Math.round(clampedPercent)}%`}
            </div>
          )}
        </div>
      </div>
    );
  };

  return type === 'line' ? renderLineProgress() : renderCircleProgress();
};

export default Progress;