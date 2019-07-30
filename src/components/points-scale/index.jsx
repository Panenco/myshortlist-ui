import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const PointsScale = ({ used, className }) => {
  const width = { width: used > 100 ? `100%` : `${used}%` };
  const position = { left: used > 100 ? `97%` : `${used}%` };
  return (
    <div className={cx(s.container, className)}>
      <div className={s.scale}>
        <div className={s.scaleUsed} style={width} />
        <div className={s.scaleLeft} style={position}>
          <p className={s.scaleLeftText}>{100 - used} points left </p>
        </div>
      </div>
    </div>
  );
};

PointsScale.propTypes = {
  used: PropTypes.number.isRequired,
  className: PropTypes.string,
};

PointsScale.defaultProps = {
  className: null,
};

export { PointsScale };
