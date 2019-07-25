import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import s from './styles.scss';

const FormControl = ({
  labelText,
  labelSubText,
  footerText,
  inputComponent,
  className,
  error,
  touched,
  shared,
  innerRef,
  ...props
}) => {
  const Input = inputComponent;
  return (
    <div className={cx(s.formControl, className)}>
      {labelText && (
        <div className={s.formControlLabelWrapper}>
          {/* eslint-disable-next-line */}
          <label htmlFor={props.id} className={cx(s.formControlLabel, shared && s.formControlLabelShared, props.disabled && s.formControlLabelDisabled)}>
            {labelText}
          </label>

          {labelSubText && <div className={s.formControlLabelSubText}>{labelSubText}</div>}
        </div>
      )}
      <Input
        {...props}
        ref={innerRef}
        error={touched && error}
        className={cx(
          s.formControlInput,
          error && touched && s.formControlInputError,
          shared && s.formControlInputShared,
        )}
      />
      {error && touched && <div className={s.formControlError}>{error}</div>}
      {footerText && <div className={s.formControlFooter}>{footerText}</div>}
    </div>
  );
};

FormControl.defaultProps = {
  className: null,
  children: null,
  labelText: null,
  labelSubText: null,
  footerText: null,
  error: null,
  shared: false,
  innerRef: null,
  touched: false,
};

FormControl.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  labelText: PropTypes.string,
  labelSubText: PropTypes.string,
  footerText: PropTypes.string,
  inputComponent: PropTypes.func.isRequired,
  error: PropTypes.string,
  shared: PropTypes.bool,
  innerRef: PropTypes.func,
  touched: PropTypes.bool,
};

export { FormControl };
