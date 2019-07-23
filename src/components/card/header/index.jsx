import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const CardHeader = ({ title, subTitle, subTitleStatus, children, className }) => (
  <div className={cx(s.header, className)}>
    <div>
      <div className={cx(s.headerTitle, subTitleStatus === 'notStarted' && s.headerTitleBlack)}>{title}</div>
      <div
        className={cx(
          s.headerSubTitle,
          (subTitleStatus === 'notStarted' || subTitleStatus === 'default') && s.headerSubTitleBlack,
        )}
      >
        {subTitle}
      </div>
    </div>

    {children}
  </div>
);

CardHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  subTitleStatus: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

CardHeader.defaultProps = {
  title: 'Title',
  subTitle: 'SubTitle',
  subTitleStatus: null,
  children: null,
  className: null,
};

export { CardHeader };
