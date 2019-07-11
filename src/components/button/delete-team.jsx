import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from 'components/core/icon';
import s from './styles.scss';

export const DelTeamButton = ({ children, ...props }) => (
  <button type="button" className={cx(s.button, s.buttonDelTeam)} {...props}>
    {children}
    {props.leaveIcon && <Icon icon={Icon.icons.leaveSmall} className={cx(s.exitTeamIcon)} />}
  </button>
);

DelTeamButton.propTypes = {
  children: PropTypes.node.isRequired,
  leaveIcon: PropTypes.bool.isRequired,
};
