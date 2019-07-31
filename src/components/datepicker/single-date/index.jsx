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
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  state = {
    singleDate: '',
  };

  handleDay = day => {
    this.setState({ singleDate: day });
  };

  render() {
    const { value } = this.props;

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
            selectedDays: singleDate,
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
          value={value}
          hideOnDayClick
          {...this.props}
        />
      </div>
    );
  }
}

export { DatePickerSingle };
