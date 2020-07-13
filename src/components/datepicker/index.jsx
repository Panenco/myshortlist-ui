import React from 'react';
import PropTypes from 'prop-types';
import { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { ButtonIcon } from 'components/button-icon';
import { WithIconInput, SelectInput } from 'components/input';
import { Icon } from 'components/icon';
import { years } from './years';

import s from './styles.scss';

class DatePicker extends React.Component {
  static propTypes = {
    hasRange: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    hasRange: false,
  };

  state = {
    from: '',
    to: '',
    singleDate: '',
    currentMonth: new Date(),
    autoFocus: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      if (this.props.hasRange) {
        const { from, to } = this.state;
        this.props.onChange({
          from,
          to,
        });
      } else {
        const { singleDate } = this.state;
        this.props.onChange(singleDate);
      }
    }
  }

  handleDayRange = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };

  handleDay = day => {
    this.setState({ singleDate: day });
  };

  handleAutofocus = focus => {
    this.setState({ autoFocus: !focus });
  };

  render() {
    const { value, hasRange } = this.props;

    const { from, to, singleDate, currentMonth, autoFocus } = this.state;
    const modifiers = { start: from, end: to };
    //

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

    const CaptionElement = ({ date, localeUtils, onChange }) => {
      const months = localeUtils.getMonths();

      const handleChange = year => {
        onChange(new Date(date.setFullYear(year.value)));
      };

      return (
        <div className="DayPicker-Caption">
          <div className={s.pickk}>
            <div>{months[date.getMonth()]}</div>
            <SelectInput
              value={date.getFullYear() && years.find(o => o.value === date.getFullYear())}
              className={s.select}
              options={years}
              onChange={handleChange}
            />
          </div>
        </div>
      );
    };

    const changeYear = date => {
      this.setState({ currentMonth: date });
    };

    return (
      <div>
        {console.log('312312', this.props)}
        <DayPickerInput
          component={props => {
            return (
              <WithIconInput
                autoFocus={autoFocus}
                after={Icon.icons.calendar}
                {...this.props}
                {...props}
                onBlur={() => {
                  this.handleAutofocus(true);
                }}
                onClick={() => {
                  this.handleAutofocus(false);
                }}
              />
            );
          }}
          classNames={{ container: s.input }}
          dayPickerProps={{
            captionElement: ({ date, localeUtils }) => (
              <CaptionElement date={date} localeUtils={localeUtils} currentDate={currentMonth} onChange={changeYear} />
            ),
            numberOfMonths: 2,
            hasRange,
            month: currentMonth,
            selectedDays: hasRange ? [from, { from, to }] : singleDate,
            modifiers,
            navbarElement: Navbar,
            handleDayClick(day, { selected }) {
              this.setState({
                singleDate: selected ? null : day,
              });
            },
          }}
          onDayChange={hasRange ? this.handleDayRange : this.handleDay}
          value={value}
          hideOnDayClick={hasRange ? from : true}
          // keepFocus
          {...this.props}
        />
      </div>
    );
  }
}

export { DatePicker };
