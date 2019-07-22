import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'components/card/base';
import { PrimaryButton, SecondaryButton } from 'components/button';
import cx from 'classnames';
import s from './styles.scss';

const CourseCard = ({ info, free, price, bought, className }) => {
  return (
    <Card className={cx(s.card, className)}>
      <div className={s.cardImg}>
        <img src="https://ru.reactjs.org/logo-og.png" className={s.cardImg} alt="img" />
      </div>

      <div className={s.cardDownPart}>
        <div className={s.cardHeader}>
          <div className={s.cardHeaderTitle}>React for beginners</div>
          <div className={cx(s.cardHeaderDate, bought && s.cardHeaderDateBought)}>{bought && 'Bought '}09/07/2018</div>
          <div className={s.cardHeaderAuthor}>Bavo Goosens</div>
          <div className={s.cardHeaderRating}>4,5 (150)</div>
        </div>

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
            <span className={s.cardFooterBought}>Purchased</span>
            <SecondaryButton className={s.cardFooterPurchase}>continue learning</SecondaryButton>
          </div>
        )}
      </div>
    </Card>
  );
};

CourseCard.propTypes = {
  className: PropTypes.string,
  price: PropTypes.number,
  bought: PropTypes.bool,
  free: PropTypes.bool,
};

CourseCard.defaultProps = {
  className: null,
  price: null,
  bought: false,
  free: false,
};

export { CourseCard };
