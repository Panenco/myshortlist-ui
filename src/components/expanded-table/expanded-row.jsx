import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/icon';
import AnimatedHeight from 'react-animate-height';
import { Cell } from './cell';

import s from './styles.scss';

class ExpandedRow extends React.Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
    };
  }

  handleExpandRow = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  };

  render() {
    const { className, children, content } = this.props;
    const { isExpanded } = this.state;

    return (
      <div className={cx(className, s.handleExpandedRow)}>
        <div
          className={cx(s.tableRow, s.tableRowExpanded, !isExpanded && s.tableRowNotExpanded)}
          onClick={this.handleExpandRow}
        >
          {children}
        </div>
        <AnimatedHeight duration={500} height={isExpanded ? 'auto' : 0}>
          {content}
        </AnimatedHeight>
      </div>
    );
  }
}

ExpandedRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ExpandedRow.defaultProps = {
  className: null,
  children: null,
};

export { ExpandedRow };
