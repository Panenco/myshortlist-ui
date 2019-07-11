import React from 'react';
import PropTypes from 'prop-types';

import { FormControl } from './control';

class FormField extends React.Component {
  static propTypes = {
    field: PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.any,
      onChange: PropTypes.func,
      onBlur: PropTypes.func,
    }).isRequired,
    form: PropTypes.shape({
      setFieldValue: PropTypes.func,
      setFieldError: PropTypes.func,
      setFieldTouched: PropTypes.func,
      touched: PropTypes.object,
      errors: PropTypes.object,
    }).isRequired,
    onBlurAdapter: PropTypes.func,
    valueAdapter: PropTypes.func,
    onChangeAdapter: PropTypes.func,
  };

  static defaultProps = {
    onBlurAdapter: null,
    onChangeAdapter: null,
    valueAdapter: value => value,
  };

  onChange = (...args) => {
    const { form, field, onChangeAdapter } = this.props;
    form.setFieldValue(field.name, onChangeAdapter(...args));
  };

  onBlur = (...args) => {
    const { form, field, onBlurAdapter } = this.props;
    form.setFieldTouched(field.name, onBlurAdapter(...args));
  };

  extractFieldProps = () => {
    const {
      field,
      form: { errors, setFieldValue, setFieldError, touched },
      onChangeAdapter,
      onBlurAdapter,
      valueAdapter,
      ...props
    } = this.props;

    let error = null;
    let touchedField = null;
    if (field.name.includes('.')) {
      const keys = field.name.split('.');
      error = keys.reduce((previous, current) => {
        return previous && previous[current];
      }, errors);
      touchedField = keys.reduce((previous, current) => {
        return previous && previous[current];
      }, touched);
    } else {
      error = errors[field.name];
      touchedField = touched[field.name];
    }

    const fieldProps = {
      ...field,
      ...props,
      error,
      touched: touchedField,
      value: valueAdapter(field.value),
      setFieldValue,
      setFieldError,
    };

    if (onChangeAdapter) {
      fieldProps.onChange = this.onChange;
    }

    if (onBlurAdapter) {
      fieldProps.onBlur = this.onBlur;
    }

    return fieldProps;
  };

  render() {
    return <FormControl {...this.extractFieldProps()} />;
  }
}

export { FormField };
