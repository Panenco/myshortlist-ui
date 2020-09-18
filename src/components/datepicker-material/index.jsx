import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { LocalizationProvider, DatePicker } from '@material-ui/pickers';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cx from 'classnames';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const useDatePickerStyles = makeStyles(() => ({
  root: {
    '& .Mui-focused': {
      outline: '2px solid #26a69a',
    },
    '& .MuiFormHelperText-root': {
      display: 'none',
    },
    '& .MuiSvgIcon-root': {
      width: '20px',
      height: '20px',
    },
  },
}));

export const appTheme = {
  // fontSize:'14px',
  typography: {
    subtitle1: { fontSize: '14px' },
  },

  palette: {
    primary: {
      lighter: '#26a69a',
      dark: '#26a69a',
      main: '#26a69a',
    },
    error: {
      lighter: '#dd2c00',
      dark: '#dd2c00',
      main: '#dd2c00',
    },
  },
  overrides: {
    MuiPickersDay: {
      root: {
        color: '#26a69a',
        fontSize: '10px !important',
      },
    },

    MuiButton: {
      textPrimary: { color: '#26a69a !important' },
    },
    MuiFormControl: {
      root: {
        height: '37px !important',
        marginBottom: '0 !important',
        marginTop: '0 !important',
        width: '100%',
        fontSize: '14px',
      },
    },
    MuiInputBase: {
      root: {
        height: '37px !important',
        '&$focused': {
          border: 'none !important',
          outline: 'none !important',
        },
      },
    },
    MuiPickersCalendarHeader: {
      monthTitleContainer: {
        alignItems: 'center !important',
      },
    },
  },
};
const theme = createMuiTheme(appTheme);

const MaterialDatePicker = ({ className, value, error, helperText, ...props }) => {
  const s = useDatePickerStyles();
  const formats = {
    normalDate: 'dd/MM/yyyy',
    keyboardDate: 'dd/MM/yyyy',
  };
  // const [selectedDate, handleDateChange] = React.useState('');
  return (
    <MuiThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={DateFnsUtils} dateFormats={formats}>
        <DatePicker
          clearable
          variant="inline"
          renderInput={renderProps => (
            <TextField
              {...renderProps}
              helperText={error && (helperText || 'Invalid Date')}
              color="primary"
              variant="outlined"
              error={error}
            />
          )}
          // value={selectedDate}
          // onChange={date => handleDateChange(date)}
          value={value || ''}
          {...props}
          className={cx(styles.root, s.root, className)}
        />
      </LocalizationProvider>
    </MuiThemeProvider>
  );
};
MaterialDatePicker.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.string,
};

MaterialDatePicker.defaultProps = {
  className: null,
  value: '',
  helperText: 'Invalid date',
  error: false,
};

export { MaterialDatePicker };
