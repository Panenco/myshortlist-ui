import React from 'react';
import PropTypes from 'prop-types';

import { ButtonIcon } from '../button';
import s from './styles.scss';

const Modal = ({ title, onClose, children }) => (
  <div className={s.backLog}>
    <div className={s.modal}>
      <div className={s.modalTitle}>
        <span>{title}</span>
        <ButtonIcon icon={ButtonIcon.icons.cross} onClick={onClose} />
      </div>
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  title: '',
  children: null,
};

export { Modal };
