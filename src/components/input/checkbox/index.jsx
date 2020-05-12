import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/icon';
import s from './styles.scss';

const Checkbox = ({ disabled, id, name, labelLeft, labelRight, className, ...props }) => (
  <label htmlFor={id} className={cx(s.label, className)}>
    {labelLeft && (
      <span className={cx(s.labelTitle, s.labelTitleLeft, disabled && s.labelTitleDisabled)}>{labelLeft}</span>
    )}
    <input type="checkbox" className={s.checkbox} name={name} disabled={disabled} id={id} {...props} />
    <div className={s.container}>
      <Icon icon={Icon.icons.matched} className={s.tick} />
    </div>
    {labelRight && (
      <span className={cx(s.labelTitle, s.labelTitleRight, disabled && s.labelTitleDisabled)}>{labelRight}</span>
    )}
  </label>
);

Checkbox.propTypes = {
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  labelLeft: null,
  labelRight: null,
  disabled: false,
  id: null,
  className: null,
};

export { Checkbox };
