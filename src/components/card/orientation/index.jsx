import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'components/card/base';
import cx from 'classnames';
import s from './styles.scss';

const OrientationCard = ({ children, info, bought, free, className }) => (
  <Card className={cx(s.card, className)}>
    <div className={s.cardHeader}>
      <div className={s.cardHeaderTitle}>Your personal brand</div>
      <div className={cx(s.cardHeaderDate, bought && s.cardHeaderDateBought)}>{bought && 'Bought '}09/07/2018</div>
    </div>

    <div className={s.cardBody}>{children}</div>

    {free ? (
      <button className={s.cardFooterFree}>
        <span className={s.cardFooterFreePurchase}>purchase for</span> free
      </button>
    ) : (
      <div className={s.cardFooter}>14,99Є</div>
    )}
  </Card>
);

OrientationCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

OrientationCard.defaultProps = {
  className: null,
};

export { OrientationCard };
