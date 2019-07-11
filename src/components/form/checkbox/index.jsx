import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../../icon';
import s from './styles.scss';

export const CheckboxFactory = (Container = 'label') => {
  const Checkbox = ({ label, disabled, id, name, className, ...props }) => (
    <Container className={cx(s.label, className)}>
      <input type="checkbox" className={s.checkbox} name={name} disabled={disabled} id={id} {...props} />
      <div className={s.container}>
        <Icon icon={Icon.icons.matchedSmall} className={s.tick} />
      </div>
      <span className={s.labelTitle}>{label}</span>
    </Container>
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

  return Checkbox;
};

const Checkbox = CheckboxFactory();

export { Checkbox };
