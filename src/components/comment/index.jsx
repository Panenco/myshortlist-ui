import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const Comment = ({ children, className }) => (
  <div className={cx(s.commentBox, className)}>
    <div>{children}</div>
  </div>
);

Comment.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
Comment.defaultProps = {
  className: null,
};

Comment.Large = ({ children, className }) => <Comment className={cx(s.commentBoxLarge, className)}>{children}</Comment>;

Comment.Large.propTypes = Comment.propTypes;
Comment.Large.defaultProps = Comment.defaultProps;

export { Comment };
