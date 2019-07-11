import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Input } from './input';
import { Icon } from '../icon';

import s from './styles.scss';

const InputWithIcon = ({ className, inputStyles, before, after, afterIconStyles, ...props }) => (
  <div className={cx(s.withIcon)}>
    {before && <Icon.Large icon={before} className={cx(s.icon, s.iconBefore)} />}
    <Input {...props} className={before ? s.withIconBeforeInput : s.withIconAfterInput} />
    {after && <Icon.Large icon={after} className={cx(s.icon, s.iconAfter)} />}
  </div>
);

InputWithIcon.propTypes = {
  className: PropTypes.string,
  inputStyles: PropTypes.string,
  before: PropTypes.string.isRequired,
  after: PropTypes.string.isRequired,
  afterIconStyles: PropTypes.string.isRequired,
};

InputWithIcon.defaultProps = {
  className: null,
  inputStyles: null,
};

export { InputWithIcon };
