import React from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import { ButtonIcon } from 'components/button-icon';
import { WithIconInput } from 'components/input';
import { Icon } from 'components/icon';
import s from 'components/datepicker/styles.scss';

class DatePickerSingle extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: undefined,
  };

  state = {
    singleDate: '',
  };

  handleDayChange = selectedDay => {
    this.setState({
      singleDate: selectedDay,
    });
  };

  render() {
    const { value } = this.props;

    const { singleDate } = this.state;

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
            selectedDays: singleDate,
            locale: 'en-gb',
            // classNames: reactDayPickerClassNames,
            navbarElement: Navbar,
            onDayClick: this.handleDayChange,
          }}
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder={`${formatDate(new Date(), 'L', 'en-gb')}`}
          value={value}
          selectedDay={this.state.singleDate}
          hideOnDayClick
          {...this.props}
        />
      </div>
    );
  }
}

export { DatePickerSingle };
