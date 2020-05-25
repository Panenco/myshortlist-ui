import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/icon';
import { Cell } from './cell';
import s from './styles.scss';

class HeaderCell extends React.Component {
  handleSortClick = (name, direction) => () => {
    this.props.handleSort(name, direction);
  };

  render() {
    const { className, children, name, sort, ...props } = this.props;
    const asc = sort && sort.direction === 'asc' && sort.sort === name;
    const desc = sort && sort.direction === 'desc' && sort.sort === name;

    return (
      <Cell className={cx(s.tableHeaderCell, className)} {...props}>
        <button
          name={name}
          onClick={this.handleSortClick(name, sort?.direction)}
          className={cx(s.tableHeaderCellContent, !name && s.tableHeaderCellContentDisable)}
        >
          <div className={cx(s.tableHeaderCellContentText, (asc || desc) && s.tableHeaderCellContentTextActive)}>
            {children}
          </div>
          {sort && sort.name && (
            <div className={cx(s.tableHeaderCellContentSquare, !name && s.tableHeaderCellContentSquareHide)}>
              <Icon
                icon={Icon.icons[sort.name && sort.name]}
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
  handleSort: PropTypes.func.isRequired,
  name: PropTypes.string,
  sort: PropTypes.shape({
    sort: PropTypes.string,
    direction: PropTypes.string,
    name: PropTypes.string,
  }),
};

HeaderCell.defaultProps = {
  className: null,
  children: null,
  name: null,
  sort: {
    sort: '',
    direction: '',
    name: '',
  },
};

export { HeaderCell };
