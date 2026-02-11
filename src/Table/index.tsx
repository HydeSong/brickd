import React from 'react';
import styles from './Table.module.css';

interface TableColumn {
  title: React.ReactNode;
  dataIndex: string;
  key?: string;
  width?: string | number;
  render?: (text: any, record: any, index: number) => React.ReactNode;
  sorter?: boolean | ((a: any, b: any) => number);
  defaultSortOrder?: 'ascend' | 'descend';
  className?: string;
  style?: React.CSSProperties;
}

interface TableProps {
  columns: TableColumn[];
  dataSource: any[];
  rowKey?: string | ((record: any) => string);
  loading?: boolean;
  pagination?: boolean | any;
  size?: 'small' | 'middle' | 'large';
  bordered?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  scroll?: { x?: number | string; y?: number | string };
  className?: string;
  style?: React.CSSProperties;
}

const Table: React.FC<TableProps> = ({
  columns,
  dataSource,
  rowKey = 'key',
  loading = false,
  pagination = false,
  size = 'middle',
  bordered = false,
  striped = false,
  hoverable = false,
  scroll,
  className,
  style,
}) => {
  const getRowKey = (record: any, index: number) => {
    if (typeof rowKey === 'function') {
      return rowKey(record);
    }
    return record[rowKey] || index;
  };

  return (
    <div
      className={`${styles.tableContainer} ${className || ''}`}
      style={{
        ...style,
        overflow: scroll ? 'auto' : 'visible',
      }}
    >
      <table
        className={`${styles.table} ${size === 'small' ? styles.small : size === 'large' ? styles.large : ''} ${bordered ? styles.bordered : ''} ${striped ? styles.striped : ''} ${hoverable ? styles.hoverable : ''}`}
        style={scroll}
      >
        <thead className={styles.tableHead}>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key || column.dataIndex}
                className={column.className}
                style={{
                  width: column.width,
                  ...column.style,
                }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className={styles.loadingCell}>
                Loading...
              </td>
            </tr>
          ) : dataSource.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className={styles.emptyCell}>
                No data
              </td>
            </tr>
          ) : (
            dataSource.map((record, index) => (
              <tr key={getRowKey(record, index)}>
                {columns.map((column) => (
                  <td
                    key={column.key || column.dataIndex}
                    className={column.className}
                    style={column.style}
                  >
                    {column.render ? column.render(record[column.dataIndex], record, index) : record[column.dataIndex]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      {pagination && (
        <div className={styles.pagination}>
          {/* 简化版分页，实际项目中应该使用 Pagination 组件 */}
          <span>1-10 of 100</span>
          <button>Prev</button>
          <button>Next</button>
        </div>
      )}
    </div>
  );
};

export default Table;