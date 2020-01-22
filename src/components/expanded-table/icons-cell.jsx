import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from 'components/icon';

import s from './styles.scss';

const IconsCell = ({ className, children, width, marginLeft, icons, ...props }) => (
  <div className={cx(s.tableIconsCell, className)} {...props}>
    {icons.map(iconName => {
      return <Icon className={s.tableIconsCellIcon} icon={Icon.icons[iconName]} />;
    })}
    <div className={s.tableIconsCellContainer}>{children}</div>
  </div>
);

IconsCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  marginLeft: PropTypes.bool,
  icons: PropTypes.array,
};

IconsCell.defaultProps = {
  className: null,
  children: null,
  width: '',
  marginLeft: false,
  icons: [],
};

export { IconsCell };
