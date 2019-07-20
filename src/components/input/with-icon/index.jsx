import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/icon';
import { TextInput } from 'components/input/text';
import s from './styles.scss';

const WithIconInput = ({ className, before, after, error, disabled, ...props }) => (
  <div className={cx(s.withIcon, disabled && s.withIconDisabled, className)}>
    {before && <Icon.Large icon={before} className={cx(s.icon, s.iconBefore)} />}
    <TextInput
      {...props}
      className={
        before
          ? cx(s.withIconBefore, error && s.withIconBeforeError)
          : cx(s.withIconAfter, error && s.withIconAfterError)
      }
    />
    {after && <Icon.Large icon={after} className={cx(s.icon, s.iconAfter)} />}
  </div>
);

WithIconInput.propTypes = {
  className: PropTypes.string,
  before: PropTypes.string.isRequired,
  after: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

WithIconInput.defaultProps = {
  className: null,
  error: false,
  disabled: false,
};

export { WithIconInput };
