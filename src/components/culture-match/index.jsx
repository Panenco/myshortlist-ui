import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/icon';
import s from './styles.scss';

const CultureMatch = ({ children, matched, percent, className }) => {
  const style = {
    width: percent >= 0 && percent <= 100 && `${percent}%`,
  };
  return (
    <div className={cx(s.match, className)}>
      <div className={cx(s.matchHeader)}>
        <div className={s.matchHeaderLeft}>
          <span className={s.matchHeaderLeftCulture}>{children}</span>
          <span>{percent}%</span>
        </div>
        <Icon
          icon={Icon.icons.matched}
          className={percent > 50 ? cx(s.matchHeaderMatched) : cx(s.matchHeaderNotMatched)}
        />
      </div>
      <div className={s.matchScale}>
        <div className={s.matchScaleRate} style={style} />
      </div>
    </div>
  );
};

CultureMatch.propTypes = {
  children: PropTypes.node.isRequired,
  matched: PropTypes.bool,
  percent: PropTypes.number,
  className: PropTypes.string,
};

CultureMatch.defaultProps = {
  matched: false,
  percent: 0,
  className: null,
};

export { CultureMatch };
