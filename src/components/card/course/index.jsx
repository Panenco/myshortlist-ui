import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/icon';
import { Card } from 'components/card/base';
import { CardChips } from 'components/card/chips';
import { PrimaryButton, SecondaryButton } from 'components/button';
import cx from 'classnames';
import { CardHeader } from '../header';
import s from './styles.scss';

const CourseCard = ({ info, rating, imgSrc, newPrice, price, bought, className, ...props }) => {
  const emptyStars = Array.from(Array(5 - Math.floor(rating)).keys());
  const stars = Array.from(Array(Math.floor(rating)).keys());

  return (
    <Card className={cx(s.card, className)}>
      <div className={s.cardImg}>
        <img src={imgSrc} className={s.cardImg} alt="img" />
      </div>

      <div className={s.cardDownPart}>
        <CardHeader subTitleStatus={(price || price === 0) && 'default'} className={s.cardHeader} {...props} />

        <div className={s.cardAuthor}>Bavo Goosens</div>

        <div className={s.cardRating}>
          <span className={s.cardRatingNumber}>{rating}</span>
          <div className={s.cardRatingStars}>
            {stars.map(el => (
              <Icon className={s.cardRatingStarsItem} key={el} icon={Icon.icons.star} />
            ))}
            {emptyStars.map(el => (
              <Icon
                className={cx(s.cardRatingStarsItem, s.cardRatingStarsItemEmpty)}
                key={el}
                icon={Icon.icons.emptystar}
              />
            ))}
          </div>
          (150)
        </div>

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
  rating: PropTypes.number,
  bought: PropTypes.bool,
  imgSrc: PropTypes.string,
};

CourseCard.defaultProps = {
  className: null,
  price: null,
  newPrice: null,
  rating: null,
  bought: false,
  imgSrc: 'https://ru.reactjs.org/logo-og.png',
};

export { CourseCard };
