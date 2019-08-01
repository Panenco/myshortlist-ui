import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import { ButtonIcon } from 'components/button-icon';
import { WithIconInput } from 'components/input';
import { Icon } from 'components/icon';
import s from 'components/datepicker/styles.scss';

class DatePickerMulti extends React.Component {
  state = {
    from: undefined,
    to: undefined,
  };

  handleFromChange = from => {
    this.setState({ from });
  };

  handleToChange = to => {
    this.setState({ to });
  };

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    const Navbar = ({ onPreviousClick, onNextClick, className }) => {
      const prevClick = () => onPreviousClick();
      const nextClick = () => onNextClick();

      return (
        <div className={className}>
          <ButtonIcon onClick={prevClick} className="DayPicker-NavBar-Prev" icon={ButtonIcon.icons.arrowDown} />
          <ButtonIcon onClick={nextClick} icon={ButtonIcon.icons.arrowDown} className="DayPicker-NavBar-Next" />
        </div>
      );
    };

    return (
      <div className={s.multiPicker}>
        <DayPickerInput
          component={props => <WithIconInput after={Icon.icons.calendar} {...this.props} {...props} />}
          value={from}
          placeholder="From"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            locale: 'en-gb',
            numberOfMonths: 2,
            navbarElement: Navbar,
            onDayClick: this.handleFromChange,
          }}
          classNames={{ container: s.input }}
          {...this.props}
        />
        <h4>-</h4>
        <DayPickerInput
          value={to}
          component={props => <WithIconInput after={Icon.icons.calendar} {...this.props} {...props} />}
          placeholder="To"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { before: from },
            modifiers,
            locale: 'en-gb',
            month: from,
            fromMonth: from,
            numberOfMonths: 2,
            navbarElement: Navbar,
            onDayClick: this.handleToChange,
          }}
          classNames={{ container: s.input }}
          {...this.props}
        />
      </div>
    );
  }
}

export { DatePickerMulti };
