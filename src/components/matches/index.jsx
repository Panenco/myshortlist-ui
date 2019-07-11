import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../icon';
import s from './styles.scss';

const Matches = ({ matched, children, ...props }) => (
  <button className={cx(s.match, matched && s.matchIsOk)} {...props}>
    {children}
    {matched && <Icon icon={Icon.icons.matchedSmall} className={cx(s.matchedIcon)} />}
  </button>
);

Matches.propTypes = {
  matched: PropTypes.bool,
  children: PropTypes.node,
};

Matches.defaultProps = {
  matched: false,
  children: null,
};

export { Matches };
