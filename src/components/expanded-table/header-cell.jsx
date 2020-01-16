import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/icon';
import { Cell } from './cell';
import s from './styles.scss';

class HeaderCell extends React.Component {
  handleSortClick = name => () => {
    this.props.handleSort(name);
  };

  render() {
    const { className, children, name, sort, ...props } = this.props;
    const asc = sort && sort.direction === 'asc' && sort.sort === name;
    const desc = sort && sort.direction === 'desc' && sort.sort === name;

    return (
      <Cell className={cx(s.tableHeaderCell, className)} {...props}>
        <button
          name={name}
          type="button"
          className={cx(s.tableHeaderCellContent, !name && s.tableHeaderCellContentDisable)}
        >
          <div className={cx(s.tableHeaderCellContentText, (asc || desc) && s.tableHeaderCellContentTextActive)}>
            {children}
          </div>
          {sort && (
            <div className={cx(s.tableHeaderCellContentSquare, !name && s.tableHeaderCellContentSquareHide)}>
              <Icon
                icon={Icon.icons.bin}
                className={cx(
                  s.tableHeaderCellContentSquareIcon,
                  asc && s.tableHeaderCellContentSquareIconActive,
                  !name && s.tableHeaderCellContentSquareHide,
                )}
              />
            </div>
          )}
        </button>
      </Cell>
    );
  }
}

HeaderCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

HeaderCell.defaultProps = {
  className: null,
  children: null,
};

export { HeaderCell };
