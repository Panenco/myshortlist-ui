import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'components/card/base';
import { CardHeader } from 'components/card/header';
import { CompletionRate } from 'components/card/completion-rate';
import { CardChips } from 'components/card/chips';
import { PrimaryButton, SecondaryButton } from 'components/button';
import cx from 'classnames';
import s from './styles.scss';

const OrientationCard = ({
  title,
  children,
  price,
  bought,
  added,
  completion,
  sections,
  link,
  className,
  completed,
}) => {
  return (
    <Card className={cx(s.card, className)}>
      <CardHeader
        title={title}
        subTitle={bought !== null ? bought : added}
        subTitleStatus={(price || price === 0) && 'default'}
        className={s.cardHeader}
      />

      <div className={s.cardBody}>{children}</div>

      <Link to={link} className={s.cardMore}>
        Show more
      </Link>

      {price === 0 && (
        <div className={s.cardFooter}>
          <CardChips className={s.cardFooterFree}>free</CardChips>
          <PrimaryButton className={s.cardFooterPurchase}>purchase for free</PrimaryButton>
        </div>
      )}

      {price > 0 && !bought && (
        <div className={s.cardFooter}>
          <span className={s.cardFooterPrice}>{price}€</span>
          <PrimaryButton className={s.cardFooterPurchase}>purchase for {price}€</PrimaryButton>
        </div>
      )}

      {bought && (
        <div className={s.cardFooter}>
          <CompletionRate completion={completion} sections={sections} className={s.cardFooterRate} />
          {!completed && <SecondaryButton className={s.cardFooterPurchase}>continue test</SecondaryButton>}
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
  completion: PropTypes.number,
  bought: PropTypes.bool,
  link: PropTypes.string,
  added: PropTypes.string,
  sections: PropTypes.string,
  completed: PropTypes.bool,
};

OrientationCard.defaultProps = {
  title: CardHeader.defaultProps.title,
  className: null,
  price: null,
  completion: null,
  bought: false,
  link: null,
  added: null,
  sections: null,
  completed: false,
};

export { OrientationCard };
