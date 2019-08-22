import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton, SecondaryButton } from 'components/button';
import { CompletionRate } from 'components/card/completion-rate';
import { CardHeader } from 'components/card/header';
import { Card } from 'components/card/base';
import cx from 'classnames';
import s from './styles.scss';

const MindMapCard = ({ title, children, completion, sections, className }) => {
  const status = {
    7: 'Completed 02/07/2019',
    0: 'Not started ',
    started: 'Started 02/07/2019',
  };

  const progressStatus = {
    0: <div className={s.cardProgress}>Start questionnaire to get results.</div>,
    continue: (
      <div className={cx(s.cardProgress, s.cardProgressAlmostFinished)}>
        Almost completed! <div>Finish questionnaire to get results.</div>
      </div>
    ),
  };

  const buttons = {
    7: 'view details results',
    0: 'start questionnaire',
    continue: 'continue questionnaire',
  };

  const testsToDo = completion > 0 && completion < sections;
  const completed = completion === sections;
  const notStarted = completion === 0;

  return (
    <Card className={cx(s.card, testsToDo && s.cardStarted, className)}>
      <CardHeader
        title={title}
        subTitle={testsToDo ? status.started : status[completion]}
        subTitleStatus={notStarted && 'notStarted'}
        className={s.cardHeader}
      >
        <SecondaryButton className={cx(s.cardHeaderRestartBtn, notStarted && s.cardHeaderRestartBtnNotStarted)}>
          restart
        </SecondaryButton>
      </CardHeader>

      <div className={cx(s.cardBody, completed && s.cardBodyDone)}>{children}</div>

      {testsToDo ? progressStatus.continue : progressStatus[completion]}

      <div className={s.cardFooter}>
        <CompletionRate
          completion={completion}
          sections={sections}
          className={cx(s.cardFooterRate, testsToDo && s.cardFooterRateTodo)}
        />

        <PrimaryButton className={s.cardFooterBtn}>{testsToDo ? buttons.continue : buttons[completion]}</PrimaryButton>
      </div>
    </Card>
  );
};

MindMapCard.propTypes = {
  title: CardHeader.propTypes.title,
  children: PropTypes.node.isRequired,
  completion: PropTypes.number.isRequired,
  sections: PropTypes.number.isRequired,
  className: PropTypes.string,
};

MindMapCard.defaultProps = {
  title: CardHeader.defaultProps.title,
  className: null,
};

export { MindMapCard };
