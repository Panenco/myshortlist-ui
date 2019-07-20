import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/icon';
import { TextInput } from 'components/input/text';
import s from './styles.scss';

const WithIconInput = ({ className, inputStyles, before, after, afterIconStyles, ...props }) => (
  <div className={cx(s.withIcon)}>
    {before && <Icon.Large icon={before} className={cx(s.icon, s.iconBefore)} />}
    <TextInput {...props} className={before ? s.withIconBeforeInput : s.withIconAfterInput} />
    {after && <Icon.Large icon={after} className={cx(s.icon, s.iconAfter)} />}
  </div>
);

WithIconInput.propTypes = {
  className: PropTypes.string,
  inputStyles: PropTypes.string,
  before: PropTypes.string.isRequired,
  after: PropTypes.string.isRequired,
  afterIconStyles: PropTypes.string.isRequired,
};

WithIconInput.defaultProps = {
  className: null,
  inputStyles: null,
};

export { WithIconInput };
