import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'components/card/base';
import { PrimaryButton } from 'components/button';
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
      <div className={s.cardFooter}>
        <span className={s.cardFooterFree}>free</span>
        <PrimaryButton className={s.cardFooterPurchase}>purchase for free</PrimaryButton>
      </div>
    ) : (
      <div className={s.cardFooter}>
        <span className={s.cardFooterPrice}>14,99Є</span>
        <PrimaryButton className={s.cardFooterPurchase}>purchase for 14,99Є</PrimaryButton>
      </div>
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
