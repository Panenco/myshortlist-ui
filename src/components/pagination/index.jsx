import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { PaginationLinkOutlined as Item, PaginationLink as CurrentItem } from '../button';
import { Icon } from '../icon';
import s from './styles.scss';

const Pagination = ({ className, style, current, totalItems, itemsPerPage, formatUrl }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const displayPages = Math.min(5, totalPages);
  const startPage = current - (current % displayPages);

  let endPage = startPage + displayPages - 1;

  if (endPage >= totalPages) {
    endPage = totalPages - 1;
  }

  let previous;
  const previousPage = current;
  if (previousPage > 0) {
    previous = (
      <Item className={s.paginationPreviousWrapper} to={formatUrl(previousPage)}>
        <Icon className={s.paginationPrevious} icon={Icon.icons.drill} />
      </Item>
    );
  }

  let first;
  if (current > displayPages) {
    first = <Item to={formatUrl(1)}>{1}</Item>;
  }

  const pages = [];

  for (let i = startPage; i <= endPage; i += 1) {
    const page = i + 1;

    pages.push(
      current === i ? (
        <CurrentItem key={page} to={formatUrl(page)}>
          {page}
        </CurrentItem>
      ) : (
        <Item key={page} to={formatUrl(page)}>
          {page}
        </Item>
      ),
    );
  }

  let next;
  const nextPage = current + 2;
  if (nextPage <= totalPages) {
    next = (
      <Item className={s.paginationNextWrapper} to={formatUrl(nextPage)}>
        <Icon className={s.paginationNext} icon={Icon.icons.drill} />
      </Item>
    );
  }

  let last;
  if (
    Math.ceil(endPage / displayPages) < Math.ceil(totalPages / displayPages) &&
    totalPages > 1 &&
    endPage !== startPage
  ) {
    last = <Item to={formatUrl(totalPages)}>{totalPages}</Item>;
  }

  let backspace;
  if (current >= displayPages) {
    backspace = <Item to={formatUrl(startPage)}>...</Item>;
  }

  let forwardspace;

  if (pages.length >= displayPages && endPage < totalPages - 1) {
    forwardspace = <Item to={formatUrl(endPage + 2)}>...</Item>;
  }
  return (
    <div className={cx(s.pagination, className)} style={style}>
      {totalItems > 0 ? (
        <div className={s.pageLink}>
          {previous}
          {first}
          {backspace}
          {pages}
          {forwardspace}
          {last}
          {next}
        </div>
      ) : (
        <div className={s.pageLink}>
          <CurrentItem to={formatUrl(1)}>1</CurrentItem>
        </div>
      )}
    </div>
  );
};

Pagination.defaultProps = {
  style: null,
  className: null,
};

Pagination.propTypes = {
  /* eslint-disable-next-line */
  style: PropTypes.object,
  className: PropTypes.string,
  current: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  formatUrl: PropTypes.func.isRequired,
};

export { Pagination };
