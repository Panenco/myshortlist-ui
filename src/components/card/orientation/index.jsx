import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'components/card/base';
import { CardHeader } from 'components/card/header';
import { DoneRate } from 'components/card/done-rate';
import { PrimaryButton, SecondaryButton } from 'components/button';
import cx from 'classnames';
import s from './styles.scss';

const OrientationCard = ({ children, info, price, bought, done, className, ...props }) => {
  return (
    <Card className={cx(s.card, className)}>
      <CardHeader subTitleStatus={(price || price === 0) && 'default'} className={s.cardHeader} {...props} />

      <div className={s.cardBody}>{children}</div>

      <Link to="/" className={s.cardMore}>
        Show more
      </Link>

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
          <DoneRate done={done} className={s.cardFooterRate} />
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
};

OrientationCard.defaultProps = {
  className: null,
  price: null,
  done: null,
  bought: false,
};

export { OrientationCard };
