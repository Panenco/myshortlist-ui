import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cx from 'classnames';
import styles from './styles.scss';

const useDatePickerStyles = makeStyles(() => ({
  root: {
    '& .Mui-focused': {
      // outline: 'none !important',
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
  overrides: {
    MuiPickersDay: {
      current: {
        color: '#26a69a',
      },
      // day: {
      //   background: 'red !important',
      // },
      daySelected: {
        background: '#26a69a !important',
      },
    },
    MuiButton: {
      textPrimary: { color: '#26a69a !important' },
    },
  },
};
const theme = createMuiTheme(appTheme);

const MaterialDatePicker = props => {
  const s = useDatePickerStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="outlined"
          format="MM/dd/yyyy"
          // margin="normal"
          id="date-picker-inline"
          // label="Date picker inline"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          {...props}
          className={cx(styles.root, s.root)}
        />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
};

export { MaterialDatePicker };
