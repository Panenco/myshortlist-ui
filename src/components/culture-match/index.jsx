import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../icon';
import s from './styles.scss';

const CultureMatch = ({ children, matched, percent }) => {
  const style = {
    width: `${percent}%`,
  };
  return (
    <div className={s.match}>
      <div className={cx(s.matchHeader, matched && s.matchHeaderMatched)}>
        <div className={s.matchHeaderLeft}>
          <span className={s.matchHeaderLeftCulture}>{children}</span>
          <span>{percent}%</span>
        </div>
        <Icon icon={Icon.icons.matchedSmall} className={!matched && s.matchHeaderIcon} />
      </div>
      <div className={s.matchScale}>
        <div className={s.matchScaleRate} style={style} />
      </div>
    </div>
  );
};

CultureMatch.defaultProps = {
  matched: false,
  percent: 0,
};

CultureMatch.propTypes = {
  children: PropTypes.node.isRequired,
  matched: PropTypes.bool,
  percent: PropTypes.number,
};

export { CultureMatch };
