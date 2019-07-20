import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ButtonIcon } from 'components/button-icon';
import s from './styles.scss';

const Divider = ({ object, showHide, isOpened }) => {
  return (
    <div className={s.pageDivider}>
      <div className={s.pageDividerPart} />
      <span className={s.pageDividerWord}>
        {isOpened ? `Hide ${object} details` : `Show ${object} details`}
        <ButtonIcon
          icon={ButtonIcon.icons.drill}
          onClick={showHide}
          className={cx(isOpened ? s.pageDividerWordBtnUp : s.pageDividerWordBtnDown)}
        />
      </span>
      <div className={s.pageDividerPart} />
    </div>
  );
};

Divider.propTypes = {
  object: PropTypes.string,
  showHide: PropTypes.func.isRequired,
  isOpened: PropTypes.bool,
};

Divider.defaultProps = {
  object: '',
  isOpened: false,
};

export { Divider };
