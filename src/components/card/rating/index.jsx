import React from 'react';
import { Icon } from 'components/icon';
import cx from 'classnames';
import PropTypes from 'prop-types';
import s from './styles.scss';

const CourseRating = ({ rating, voted, className }) => {
  const stars = new Array(5).fill(null).map((_, i) => {
    if (i + 1 <= rating || (rating > i && rating % i > 0.75)) {
      return <Icon className={s.ratingStarsItem} icon={Icon.icons.star} />;
    }
    if (rating > i && rating % i > 0.25) {
      return <Icon className={s.ratingStarsItem} icon={Icon.icons.halfstar} />;
    }
    return <Icon className={cx(s.ratingStarsItem)} icon={Icon.icons.emptystar} />;
  });
  return (
    <div className={cx(s.rating, className)}>
      <span className={s.ratingNumber}>{rating}</span>
      <div className={s.ratingStars}>{stars}</div> ({voted})
    </div>
  );
};

CourseRating.propTypes = {
  rating: PropTypes.number.isRequired,
  voted: PropTypes.number,
  className: PropTypes.string,
};

CourseRating.defaultProps = {
  voted: 0,
  className: null,
};

export { CourseRating };
