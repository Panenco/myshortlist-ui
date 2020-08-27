import React from 'react';
import PropTypes from 'prop-types';
import { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { ButtonIcon } from 'components/button-icon';
import { WithIconInput, SelectInput } from 'components/input';
import { Icon } from 'components/icon';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { years } from './years';
import s from './styles.scss';

const FORMAT = 'DD/MM/YYYY';

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, FORMAT, new Date());
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, FORMAT, { locale });
}

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
    let dayPickerInputRef = null;

    return (
      <div name="main-container">
        <DayPickerInput
          ref={ref => (dayPickerInputRef = ref)}
          placeholder="D/M/YYYY"
          formatDate={formatDate}
          format={FORMAT}
          parseDate={parseDate}
          keepFocus={false}
          component={props => {
            return (
              <WithIconInput
                autoFocus={autoFocus}
                after={Icon.icons.calendar}
                {...this.props}
                {...props}
                onBlur={() => {
                  props.onBlur();
                  this.handleAutofocus(true);
                }}
                onClick={() => {
                  props.onClick();

                  this.handleAutofocus(false);
                }}
              />
            );
          }}
          classNames={{ container: s.input }}
          dayPickerProps={{
            onBlur: () => {
              setTimeout(() => {
                const elClicked = document.activeElement;
                const container = document.getElementsByName(`main-container`);
                if (container && !container[0].contains(elClicked)) {
                  dayPickerInputRef?.hideDayPicker();
                }
              }, 1);
            },
            captionElement: ({ date, localeUtils }) => (
              <CaptionElement date={date} localeUtils={localeUtils} currentDate={currentMonth} onChange={changeYear} />
            ),
            // numberOfMonths: 2,
            numberOfMonths: 1,
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
          // overlayHasFocus={false}
          onDayChange={hasRange ? this.handleDayRange : this.handleDay}
          value={value}
          hideOnDayClick={hasRange ? from : true}
          {...this.props}
        />
      </div>
    );
  }
}

export { DatePicker };
