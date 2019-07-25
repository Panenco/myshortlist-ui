import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'components/card/base';
import { CardHeader } from 'components/card/header';
import { DoneRate } from 'components/card/done-rate';
import { CardChips } from 'components/card/chips';
import { PrimaryButton, SecondaryButton } from 'components/button';
import cx from 'classnames';
import s from './styles.scss';

const OrientationCard = ({ title, children, price, bought, done, className }) => {
  return (
    <Card className={cx(s.card, className)}>
      <CardHeader
        title={title}
        subTitle={bought ? 'Bought 19/07/2019' : '19/07/2019'}
        subTitleStatus={(price || price === 0) && 'default'}
        className={s.cardHeader}
      />

      <div className={s.cardBody}>{children}</div>

      <Link to="/" className={s.cardMore}>
        Show more
      </Link>

      {price === 0 && (
        <div className={s.cardFooter}>
          <CardChips className={s.cardFooterFree}>free</CardChips>
          <PrimaryButton className={s.cardFooterPurchase}>purchase for free</PrimaryButton>
        </div>
      )}

      {price > 0 && (
        <div className={s.cardFooter}>
          <span className={s.cardFooterPrice}>{price}Є</span>
          <PrimaryButton className={s.cardFooterPurchase}>purchase for {price}Є</PrimaryButton>
        </div>
      )}

      {bought && (
        <div className={s.cardFooter}>
          <DoneRate done={done} className={s.cardFooterRate} />
          <SecondaryButton className={s.cardFooterPurchase}>continue testing</SecondaryButton>
        </div>
      )}
    </Card>
  );
};

OrientationCard.propTypes = {
  title: CardHeader.propTypes.title,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  price: PropTypes.number,
  done: PropTypes.number,
  bought: PropTypes.bool,
};

OrientationCard.defaultProps = {
  title: CardHeader.defaultProps.title,
  className: null,
  price: null,
  done: null,
  bought: false,
};

export { OrientationCard };
