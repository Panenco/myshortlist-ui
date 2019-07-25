import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton, SecondaryButton } from 'components/button';
import { DoneRate } from 'components/card/done-rate';
import { CardHeader } from 'components/card/header';
import { Card } from 'components/card/base';
import cx from 'classnames';
import s from './styles.scss';

const MindMapCard = ({ title, children, done }) => {
  const status = {
    7: 'Completed 02/07/2019',
    0: 'Not started ',
    started: 'Started 02/07/2019',
  };

  const progressStatus = {
    0: <div className={s.cardProgress}>Start for getting result</div>,
    continue: (
      <div className={s.cardProgress}>
        Almost Complited! <div>Finish test for getting result</div>
      </div>
    ),
  };

  const buttons = {
    7: 'view details results',
    0: 'start testing',
    continue: 'continue testing',
  };

  const testsToDo = done > 0 && done < 7;
  const completed = done === 7;
  const notStarted = done === 0;

  return (
    <Card className={cx(s.card, testsToDo && s.cardStarted)}>
      <CardHeader
        title={title}
        subTitle={testsToDo ? status.started : status[done]}
        subTitleStatus={notStarted && 'notStarted'}
        className={s.cardHeader}
      >
        <SecondaryButton className={cx(s.cardHeaderRestartBtn, notStarted && s.cardHeaderRestartBtnNotStarted)}>
          restart
        </SecondaryButton>
      </CardHeader>

      <div className={cx(s.cardBody, completed && s.cardBodyDone)}>{children}</div>

      {testsToDo ? progressStatus.continue : progressStatus[done]}

      <div className={s.cardFooter}>
        <DoneRate done={done} className={cx(s.cardFooterRate, testsToDo && s.cardFooterRateTodo)} />

        <PrimaryButton className={s.cardFooterBtn}>{testsToDo ? buttons.continue : buttons[done]}</PrimaryButton>
      </div>
    </Card>
  );
};

MindMapCard.propTypes = {
  title: CardHeader.propTypes.title,
  children: PropTypes.node.isRequired,
  done: PropTypes.node.isRequired,
};

MindMapCard.defaultProps = {
  title: CardHeader.defaultProps.title,
};

export { MindMapCard };
