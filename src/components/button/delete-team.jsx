import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/icon';
import s from './styles.scss';

export const DeleteTeamBtn = ({ children, leaveIcon, ...props }) => (
  <button type="button" className={cx(s.button, s.buttonDeleteTeam)} {...props}>
    {children}
    {leaveIcon && <Icon icon={Icon.icons.leave} className={cx(s.exitTeamIcon)} />}
  </button>
);

DeleteTeamBtn.propTypes = {
  children: PropTypes.node.isRequired,
  leaveIcon: PropTypes.bool.isRequired,
};
