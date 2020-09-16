import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { LocalizationProvider, DatePicker } from '@material-ui/pickers';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cx from 'classnames';
import TextField from '@material-ui/core/TextField';
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
// export const appTheme = {
//   overrides: {
//     MuiPickersDay: {
//       current: {
//         color: '#26a69a',
//       },
//       // day: {
//       //   background: 'red !important',
//       // },
//       daySelected: {
//         background: '#26a69a !important',
//       },
//     },
//     MuiButton: {
//       textPrimary: { color: '#26a69a !important' },
//     },
//   },
// };
export const appTheme = {
  overrides: {
    MuiPickersDay: {
      root: {
        color: '#26a69a',
      },

      today: {
        // background: '#26a69a !important',
      },

      // Mui: {
      //   selected: {
      //     background: 'red !important',
      //   },
      // },
    },

    MuiButton: {
      textPrimary: { color: '#26a69a !important' },
    },
  },
};
const theme = createMuiTheme(appTheme);

const MaterialDatePicker = props => {
  const s = useDatePickerStyles();
  const formats = {
    normalDate: 'dd/mm/yyyy',
    keyboardDate: 'dd/mm/yyyy',
  };
  return (
    <MuiThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={DateFnsUtils} dateFormats={formats}>
        <DatePicker
          clearable
          renderInput={renderProps => <TextField {...renderProps} />}
          {...props}
          className={cx(styles.root, s.root)}
        />
      </LocalizationProvider>
    </MuiThemeProvider>
  );
};

export { MaterialDatePicker };
