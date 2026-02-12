import styles from './Timeline.module.css';

export interface TimelineItemProps {
  children: React.ReactNode;
  color?: string;
  dot?: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface TimelineProps {
  children: React.ReactNode;
  mode?: 'left' | 'alternate' | 'right';
  pending?: boolean | React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  color,
  dot,
  extra,
  className,
  style,
}) => {
  const itemClassName = [styles.timelineItem, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={itemClassName} style={style}>
      <div className={styles.timelineItemTail} />
      <div
        className={styles.timelineItemDot}
        style={{ backgroundColor: color }}
      >
        {dot}
      </div>
      <div className={styles.timelineItemContent}>
        <div className={styles.timelineItemContentInner}>{children}</div>
        {extra && <div className={styles.timelineItemExtra}>{extra}</div>}
      </div>
    </div>
  );
};

interface TimelineComponent extends React.FC<TimelineProps> {
  Item: React.FC<TimelineItemProps>;
}

const Timeline: TimelineComponent = ({
  children,
  mode = 'left',
  pending = false,
  className,
  style,
}) => {
  const timelineClassName = [
    styles.timeline,
    styles[`timeline-${mode}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={timelineClassName} style={style}>
      {children}
      {pending && (
        <div className={styles.timelinePending}>
          <div className={styles.timelineItemTail} />
          <div className={styles.timelineItemDot}>
            {typeof pending === 'boolean' ? (
              <span className={styles.timelinePendingDot} />
            ) : (
              pending
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Timeline.Item = TimelineItem;

export default Timeline;
