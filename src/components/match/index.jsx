import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/icon';
import s from './styles.scss';

const Match = ({ matched, children, ...props }) => (
  <button className={cx(s.match, matched && s.matchIsOk)} {...props}>
    {children}
    {matched && <Icon icon={Icon.icons.matched} className={cx(s.matchedIcon)} />}
  </button>
);

Match.propTypes = {
  matched: PropTypes.bool,
  children: PropTypes.node,
};

Match.defaultProps = {
  matched: false,
  children: null,
};

export { Match };
