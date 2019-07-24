import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'components/card/base';
import { CardChips } from 'components/card/chips';
import { PrimaryButton, SecondaryButton } from 'components/button';
import cx from 'classnames';
import { CardHeader } from '../header';
import s from './styles.scss';

const CourseCard = ({ info, imgSrc, newPrice, price, bought, className, ...props }) => {
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
            <CardChips className={s.cardFooterFree}>free</CardChips>
            <PrimaryButton className={s.cardFooterPurchase}>purchase for free</PrimaryButton>
          </div>
        )}

        {!newPrice && price > 0 && (
          <div className={s.cardFooter}>
            <span className={s.cardFooterPrice}>${price}Є</span>
            <PrimaryButton className={s.cardFooterPurchase}>purchase for ${price}Є</PrimaryButton>
          </div>
        )}

        {bought && (
          <div className={s.cardFooter}>
            <span className={s.cardFooterPurchased}>Purchased</span>
            <SecondaryButton className={s.cardFooterPurchase}>continue learning</SecondaryButton>
          </div>
        )}

        {newPrice && (
          <div className={s.cardFooter}>
            <div className={s.cardFooterPackage}>
              <CardChips className={s.cardFooterPackageChips}>package</CardChips>
              <span className={s.cardFooterPackagePrice}>${price}Є</span>
              <span className={s.cardFooterPackageNewPrice}>{newPrice}Є</span>
            </div>
            <PrimaryButton className={s.cardFooterPurchase}>purchase for {newPrice}Є</PrimaryButton>
          </div>
        )}
      </div>
    </Card>
  );
};

CourseCard.propTypes = {
  className: PropTypes.string,
  price: PropTypes.number,
  newPrice: PropTypes.number,
  bought: PropTypes.bool,
  imgSrc: PropTypes.string,
};

CourseCard.defaultProps = {
  className: null,
  price: null,
  newPrice: null,
  bought: false,
  imgSrc: 'https://ru.reactjs.org/logo-og.png',
};

export { CourseCard };
