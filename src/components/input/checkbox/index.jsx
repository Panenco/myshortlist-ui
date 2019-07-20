import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/icon';
import s from './styles.scss';

const Checkbox = ({ label, disabled, id, name, className, ...props }) => (
  <label htmlFor={id} className={cx(s.label, className)}>
    <input type="checkbox" className={s.checkbox} name={name} disabled={disabled} id={id} {...props} />
    <div className={s.container}>
      <Icon icon={Icon.icons.matched} className={s.tick} />
    </div>
    <span className={s.labelTitle}>{label}</span>
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.node,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  label: null,
  disabled: false,
  id: null,
  className: null,
};

export { Checkbox };
