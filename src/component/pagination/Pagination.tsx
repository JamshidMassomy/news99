import classNames from 'classnames';
import React, { useState } from 'react';
import { ButtonType } from '../base/button/Button';
import Button from '../base/button/Buttons';
import './Pagination.scss';

interface IPaginiation {
  currentPage: number | 1;
  onPageChange: (page: number) => void;
  totalPages: number | 1;
}

const Pagination = (props: IPaginiation) => {
  const { currentPage, totalPages, onPageChange } = props;
  const [visiblePages, setVisiblePages] = useState([]);
  const MAX_VISIBLE_PAGES = 5;

  const generateVisiblePages = () => {
    let startPage, endPage;
    if (totalPages <= MAX_VISIBLE_PAGES) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const maxPagesBeforeCurrentPage = Math.floor(MAX_VISIBLE_PAGES / 2);
      const maxPagesAfterCurrentPage = Math.ceil(MAX_VISIBLE_PAGES / 2) - 1;

      if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = MAX_VISIBLE_PAGES;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - MAX_VISIBLE_PAGES + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    const pages = Array.from(
      Array(endPage - startPage + 1),
      (_, i) => startPage + i
    );

    setVisiblePages(pages);
  };

  React.useEffect(() => {
    generateVisiblePages();
  }, [currentPage, totalPages]);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <nav>
      <ul className='pagination inline-flex -space-x-px'>
        <li className='page-item'>
          <Button
            type={ButtonType.BTN_BACK}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
        </li>

        {visiblePages.map((page) => (
          <li
            key={page}
            className={classNames(
              'page-item',
              currentPage === page
                ? 'z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                : 'px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            )}
          >
            <button
              onClick={() => handlePageChange(page)}
              className='page-link'
            >
              {page}
            </button>
          </li>
        ))}

        <li className='page-item inline-flex items-center'>
          <Button
            type={ButtonType.BTN_NEXT}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
