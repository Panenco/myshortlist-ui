import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// import { publicImageURL } from 'constants/application';

import s from './styles.scss';

const Avatar = ({ imgSrc, firstname, lastname, style, header }) => (
  <div
    className={cx(s.avatar, header && s.avatarHeader, style)}
    style={
      imgSrc && {
        backgroundImage: `url(
    ${imgSrc}
    )`,
      }
    }
  >
    {!imgSrc && (
      <div className={cx(s.avatarFallback, header && s.avatarFallbackHeader)}>{`${firstname
        .charAt(0)
        .toUpperCase()}${lastname.charAt(0).toUpperCase()}`}</div>
    )}
  </div>
);

Avatar.defaultProps = {
  style: null,
  imgSrc: null,
  firstname: 'Universal',
  lastname: 'User',
  header: false,
};

Avatar.propTypes = {
  /* eslint-disable-next-line */
  style: PropTypes.string,
  imgSrc: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  header: PropTypes.bool,
};

export { Avatar };
