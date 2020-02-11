import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './styles.scss';

const TextArea = forwardRef((props, ref) => {
  const { onChange, form, autoresize, minHeight, error, className, ...restProps } = props;
  const textAreaRef = useRef(null);

  useImperativeHandle(ref, () => textAreaRef.current);

  const onChangeInner = (...args) => {
    textAreaRef.current.style.height = 'inherit';
    const computed = window.getComputedStyle(textAreaRef.current);
    const height =
      textAreaRef.current.scrollHeight -
      parseInt(computed.getPropertyValue('padding-top'), 10) -
      parseInt(computed.getPropertyValue('padding-bottom'), 10);
    textAreaRef.current.style.height = `${height}px`;
    onChange(...args);
  };

  return (
    <textarea
      ref={textAreaRef}
      onChange={autoresize ? onChangeInner : onChange}
      {...restProps}
      className={cx(s.inputTextArea, className, error && s.inputTextAreaError)}
      style={{ minHeight: `${minHeight}px` }}
    />
  );
});

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  form: PropTypes.object, // eslint-disable-line
  autoresize: PropTypes.bool,
  minHeight: PropTypes.number,
  error: PropTypes.string,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  autoresize: false,
  minHeight: 52,
  error: null,
  className: null,
}

export { TextArea };
