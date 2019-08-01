import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'components/icon';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const Item = ({ className, children, to, icon }) => {
  return (
    <NavLink to={to} className={cx(s.item, className)} activeClassName={s.activeItem}>
      <div className={s.itemContent}>
        <Icon.Large className={s.itemContentIcon} icon={icon} />
        <span className={s.itemContentName}>{children}</span>
      </div>
    </NavLink>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.values(Icon.icons)).isRequired,
};

Item.defaultProps = {
  className: null,
};

export { Item };
