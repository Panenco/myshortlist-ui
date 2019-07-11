import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const Comment = ({ children }) => (
  <div className={cx(s.commentBox)}>
    <div>{children}</div>
  </div>
);

Comment.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Comment };
