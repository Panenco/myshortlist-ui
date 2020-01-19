import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/icon';
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
          type="button"
          className={cx(s.tableRow, s.tableRowExpanded, !isExpanded && s.tableRowNotExpanded)}
          onClick={this.handleExpandRow}
        >
          {children}
        </div>
        {isExpanded && (
          <div className={cx(s.tableRowExpandedContent)}>
            {Object.keys(content) &&
              Object.keys(content).map(contentItem => (
                <div key={contentItem} className={s.tableRowExpandedContentColumn}>
                  <span className={s.tableRowExpandedContentHeader}>{`${contentItem
                    .charAt(0)
                    .toUpperCase()}${contentItem.slice(1)}`}</span>
                  <div>
                    {content[contentItem] && (
                      <span className={s.tableRowExpandedContentSpan}>{content[contentItem]}</span>
                    )}
                  </div>
                </div>
              ))}
          </div>
        )}
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
