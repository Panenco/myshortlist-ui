import React from 'react';
import PropTypes from 'prop-types';
import { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import { ButtonIcon } from 'components/button-icon';
import { WithIconInput } from 'components/input';
import { Icon } from 'components/icon';
import s from 'components/datepicker/styles.scss';

class DatePickerMulti extends React.Component {
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

  render() {
    const { value, hasRange } = this.props;

    const { from, to, singleDate } = this.state;
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

    return (
      <div>
        <DayPickerInput
          component={props => <WithIconInput after={Icon.icons.calendar} {...this.props} {...props} />}
          classNames={{ container: s.input }}
          dayPickerProps={{
            numberOfMonths: 2,
            hasRange,
            selectedDays: hasRange ? [from, { from, to }] : singleDate,
            modifiers,
            locale: 'en-gb',
            // classNames: reactDayPickerClassNames,
            navbarElement: Navbar,
            handleDayClick(day, { selected }) {
              this.setState({
                singleDate: selected ? null : day,
              });
            },
          }}
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder={`${formatDate(new Date(), 'L', 'en-gb')}`}
          onDayChange={hasRange ? this.handleDayRange : this.handleDay}
          value={value}
          hideOnDayClick={hasRange ? from : true}
          {...this.props}
        />
      </div>
    );
  }
}

export { DatePickerMulti };
