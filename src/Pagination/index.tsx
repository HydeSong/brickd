import React, { useState } from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
  current?: number;
  pageSize?: number;
  total?: number;
  pageSizeOptions?: number[];
  onChange?: (page: number, pageSize: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Pagination: React.FC<PaginationProps> = ({
  current = 1,
  pageSize = 10,
  total = 0,
  pageSizeOptions = [10, 20, 50, 100],
  onChange,
  className,
  style,
}) => {
  const [currentPage, setCurrentPage] = useState(current);
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);

  const totalPages = Math.ceil(total / currentPageSize);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (onChange) {
      onChange(page, currentPageSize);
    }
  };

  const handlePageSizeChange = (size: number) => {
    setCurrentPageSize(size);
    setCurrentPage(1);
    if (onChange) {
      onChange(1, size);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    if (start > 1) {
      pages.push(
        <button type="button" key="first" className={styles.pageButton} onClick={() => handlePageChange(1)}>
          1
        </button>
      );
      if (start > 2) {
        pages.push(<span key="ellipsis-start" className={styles.ellipsis}>...</span>);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          type="button"
          key={i}
          className={`
            ${styles.pageButton}
            ${i === currentPage ? styles.active : ''}
          `}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push(<span key="ellipsis-end" className={styles.ellipsis}>...</span>);
      }
      pages.push(
        <button type="button" key="last" className={styles.pageButton} onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={`${styles.pagination} ${className || ''}`} style={style}>
      <div className={styles.paginationLeft}>
        <span className={styles.total}>共 {total} 条</span>
        <select
          className={styles.pageSizeSelect}
          value={currentPageSize}
          onChange={(e) => handlePageSizeChange(Number(e.target.value))}
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size} 条/页
            </option>
          ))}
        </select>
      </div>
      <div className={styles.paginationRight}>
        <button
          type="button"
          className={`${styles.pageButton} ${styles.previous}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          上一页
        </button>
        {renderPageNumbers()}
        <button
          type="button"
          className={`${styles.pageButton} ${styles.next}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          下一页
        </button>
      </div>
    </div>
  );
};

export default Pagination;
