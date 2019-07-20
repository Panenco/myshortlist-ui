import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton, SecondaryButton } from 'components/button';
import s from './styles.scss';

const TeamDelete = ({ name, type, onClose, onDelete, deleteContent }) => (
  <div className={s.page}>
    {deleteContent || (
      <p>
        This action cannot be undone, <span>{type}</span> <span>{name}</span> and all corresponding <span>{type}</span>{' '}
        data will be deleted. Are you sure you want to continue?
      </p>
    )}

    <div className={s.pageButtons}>
      <SecondaryButton onClick={onClose}>CANCEL</SecondaryButton>
      <PrimaryButton onClick={() => onDelete(type)}>DELETE</PrimaryButton>
    </div>
  </div>
);

TeamDelete.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  deleteContent: PropTypes.string.isRequired,
};

export { TeamDelete };
