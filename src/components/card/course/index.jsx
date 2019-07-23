import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'components/card/base';
import { PrimaryButton, SecondaryButton } from 'components/button';
import cx from 'classnames';
import { CardHeader } from '../header';
import s from './styles.scss';

const CourseCard = ({ info, imgSrc, price, bought, className, ...props }) => {
  return (
    <Card className={cx(s.card, className)}>
      <div className={s.cardImg}>
        <img src={imgSrc} className={s.cardImg} alt="img" />
      </div>

      <div className={s.cardDownPart}>
        <CardHeader subTitleStatus={(price || price === 0) && 'default'} className={s.cardHeader} {...props} />

        <div className={s.cardAuthor}>Bavo Goosens</div>
        <div className={s.cardRating}>4,5 (150)</div>

        {price === 0 && (
          <div className={s.cardFooter}>
            <span className={s.cardFooterFree}>free</span>
            <PrimaryButton className={s.cardFooterPurchase}>purchase for free</PrimaryButton>
          </div>
        )}

        {price > 0 && (
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
  imgSrc: PropTypes.string,
};

CourseCard.defaultProps = {
  className: null,
  price: null,
  bought: false,
  imgSrc: 'https://ru.reactjs.org/logo-og.png',
};

export { CourseCard };
