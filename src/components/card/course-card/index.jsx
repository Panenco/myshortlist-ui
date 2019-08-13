import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'components/card/base';
import { CourseRating } from 'components/card/rating';
import { CardChips } from 'components/card/chips';
import { PrimaryButton, SecondaryButton } from 'components/button';
import cx from 'classnames';
import { CardHeader } from '../header';
import s from './styles.scss';

const CourseCard = ({ title, imgSrc, newPrice, price, bought, added, voted, rating, className }) => {
  return (
    <Card className={cx(s.card, className)}>
      <div className={s.cardImg}>
        <img src={imgSrc} className={s.cardImg} alt="img" />
      </div>

      <div className={s.cardDownPart}>
        <CardHeader
          title={title}
          subTitle={bought ? `Bought ${bought}` : added}
          subTitleStatus={!bought && 'default'}
          className={s.cardHeader}
        />
        <div className={s.cardAuthor}>Bavo Goosens</div>

        <CourseRating rating={rating} voted={voted} className={s.cardRating} />

        {price === 0 && !bought && (
          <div className={s.cardFooter}>
            <CardChips className={s.cardFooterFree}>free</CardChips>
            <PrimaryButton className={s.cardFooterPurchase}>purchase for free</PrimaryButton>
          </div>
        )}
        {!newPrice && price > 0 && !bought && (
          <div className={s.cardFooter}>
            <span className={s.cardFooterPrice}>{price}€</span>
            <PrimaryButton className={s.cardFooterPurchase}>purchase for {price}€</PrimaryButton>
          </div>
        )}
        {bought && (
          <div className={s.cardFooter}>
            <span className={s.cardFooterPurchased}>Purchased</span>
            <SecondaryButton className={s.cardFooterPurchase}>continue learning</SecondaryButton>
          </div>
        )}
        {newPrice && !bought && (
          <div className={s.cardFooter}>
            <div className={s.cardFooterPackage}>
              <CardChips className={s.cardFooterPackageChips}>package</CardChips>
              <span className={s.cardFooterPackagePrice}>{price}€</span>
              <span className={s.cardFooterPackageNewPrice}>{newPrice}€</span>
            </div>
            <PrimaryButton className={s.cardFooterPurchase}>purchase for {newPrice}€</PrimaryButton>
          </div>
        )}
      </div>
    </Card>
  );
};

CourseCard.propTypes = {
  className: PropTypes.string,
  title: CardHeader.propTypes.title,
  subTitle: CardHeader.propTypes.subTitle,
  price: PropTypes.number,
  newPrice: PropTypes.number,
  rating: CourseRating.propTypes.rating,
  voted: CourseRating.propTypes.voted,
  bought: PropTypes.string,
  added: PropTypes.string,
  imgSrc: PropTypes.string,
};

CourseCard.defaultProps = {
  className: null,
  title: CardHeader.defaultProps.title,
  subTitle: CardHeader.defaultProps.subTitle,
  price: null,
  newPrice: null,
  rating: CourseRating.defaultProps.rating,
  voted: CourseRating.defaultProps.voted,
  bought: null,
  added: '15/02/2018',
  imgSrc: 'https://ru.reactjs.org/logo-og.png',
};

export { CourseCard };
