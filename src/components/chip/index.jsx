import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/icon';
import { ButtonIcon } from 'components/button-icon';
import s from './styles.scss';

const Chip = ({ onDelete, children, className }) => (
  <div className={cx(s.chip, className)}>
    <div className={s.chipText}>{children}</div>
    <ButtonIcon icon={Icon.icons.cross} onClick={onDelete} className={s.chipIcon} />
  </div>
);

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
Chip.defaultProps = {
  className: null,
};

Chip.Large = ({ children, className }) => <Chip className={cx(s.ChipBoxLarge, className)}>{children}</Chip>;

Chip.Large.propTypes = Chip.propTypes;
Chip.Large.defaultProps = Chip.defaultProps;

export { Chip };
