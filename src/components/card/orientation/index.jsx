import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'components/card/base';
import { PrimaryButton, SecondaryButton } from 'components/button';
import cx from 'classnames';
import s from './styles.scss';

const OrientationCard = ({ children, info, free, price, bought, done, className }) => {
  const doneRate = {
    width: `${(done * 100) / 7}%`,
  };
  return (
    <Card className={cx(s.card, className)}>
      <div className={s.cardHeader}>
        <div className={s.cardHeaderTitle}>Your personal brand</div>
        <div className={cx(s.cardHeaderDate, bought && s.cardHeaderDateBought)}>{bought && 'Bought '}09/07/2018</div>
      </div>

      <div className={s.cardBody}>{children}</div>

      <Link to="/" className={s.cardMore}>
        Show more
      </Link>

      {free && (
        <div className={s.cardFooter}>
          <span className={s.cardFooterFree}>free</span>
          <PrimaryButton className={s.cardFooterPurchase}>purchase for free</PrimaryButton>
        </div>
      )}

      {price && (
        <div className={s.cardFooter}>
          <span className={s.cardFooterPrice}>14,99Є</span>
          <PrimaryButton className={s.cardFooterPurchase}>purchase for 14,99Є</PrimaryButton>
        </div>
      )}

      {bought && (
        <div className={s.cardFooter}>
          <div className={s.cardFooterRate}>
            <span className={s.cardFooterRateDone}>{done} out of 7 sections done</span>
            <div className={s.cardFooterRateIndicator}>
              <div className={s.cardFooterRateIndicatorDoneLine} style={doneRate} />
            </div>
          </div>
          <SecondaryButton className={s.cardFooterPurchase}>continue testing</SecondaryButton>
        </div>
      )}
    </Card>
  );
};

OrientationCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  price: PropTypes.number,
  done: PropTypes.number,
  bought: PropTypes.bool,
  free: PropTypes.bool,
};

OrientationCard.defaultProps = {
  className: null,
  price: null,
  done: null,
  bought: false,
  free: false,
};

export { OrientationCard };
