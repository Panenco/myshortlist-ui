import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './styles.scss';

export const FluidPreloader = ({ className }) => (
  <div className={cx(s.fluidContainer, className)}>
    <div className={cx(s.spinner)} />
  </div>
);

FluidPreloader.propTypes = {
  className: PropTypes.string,
};

FluidPreloader.defaultProps = {
  className: null,
};

export const RelativePreloader = ({ className }) => (
  <div className={cx(s.relativeContainer, className)}>
    <div className={cx(s.spinner)} />
  </div>
);

RelativePreloader.propTypes = {
  className: PropTypes.string,
};

RelativePreloader.defaultProps = {
  className: null,
};

export const SmallPreloader = ({ className }) => (
  <div className={cx(s.relativeContainer, className)}>
    <div className={cx(s.spinner_small)} />
  </div>
);

SmallPreloader.propTypes = {
  className: PropTypes.string,
};

SmallPreloader.defaultProps = {
  className: null,
};
