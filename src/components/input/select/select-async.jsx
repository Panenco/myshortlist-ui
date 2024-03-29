import React from 'react';
import PropTypes from 'prop-types';
import { AsyncPaginate } from 'react-select-async-paginate';
import { components } from 'react-select';
import cx from 'classnames';
import { Icon } from 'components/icon';
import s from './styles.scss';

export const additionalStyles = (element, styles, ...arg) => (styles?.[element] ? styles[element](...arg) : {});

export const debounce = (inner, ms = 0) => {
  let timer = null;
  let resolves = [];

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const result = inner(...args);
      resolves.forEach(r => r(result));
      resolves = [];
    }, ms);

    return new Promise(r => resolves.push(r));
  };
};

const customStyles = styles => ({
  container: provided => ({
    ...provided,
    // marginBottom: '40px',
    // position: 'relative',
  }),
  control: (provided, state) => ({
    ...provided,
    border: '1px solid #3d3d3d',
    backgroundColor: '#fff',
    opacity: state.isDisabled && '0.3',
    borderRadius: '2px',
    boxShadow: state.isFocused ? 'transparent' : 'transparent',
    color: '#000000',
    fontSize: '14px',
    ':hover': {
      border: '1px solid #3d3d3d',
    },
    width: '100%',
    position: 'relative',
    padding: '0 5px 0 5px',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#a5a5a5',
  }),
  dropDownIndicator: provided => ({
    ...provided,
    position: 'absolute',
    top: '0',
    left: '0',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0',
    paddingRight: '20px',
  }),
  option: (provided, state) => {
    const customOptionStyles = {
      backgroundColor: state.isSelected ? '#dff2f1' : '#ffffff',
      boxShadow: 'none',
      color: state.isSelected ? '#000000' : '#000000',
      cursor: 'pointer',
      fontSize: '14px',
      borderBottom: '1px solid transparent',
      ':hover': {
        backgroundColor: '#f7fBfA',
      },
    };

    return {
      ...provided,
      ...customOptionStyles,
      ...additionalStyles('option', styles, { ...provided, ...customOptionStyles }, state),
    };
  },
  multiValueRemove: (provided, state) => {
    const customMVRStyles = {
      backgroundColor: 'transparent',
      color: 'black',
      '&:hover': {
        color: 'black',
        cursor: 'pointer',
        backgroundColor: 'transparent',
      },
    };

    return {
      ...provided,
      ...customMVRStyles,
      ...additionalStyles('multiValueRemove', styles, { ...provided, ...customMVRStyles }, state),
    };
  },
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  clearIndicator: provided => ({
    ...provided,
    color: '#3d3d3d',
    padding: '0',
    cursor: 'pointer',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '2px',
    borderTop: 'none',
    marginTop: '0',
    // position: 'absolute',
    width: '100%',
  }),
  menuList: provided => ({
    ...provided,
    textAlign: 'left',
  }),
  group: provided => ({
    ...provided,
    paddingBottom: 'unset',
  }),
});

const errorStyles = styles => ({
  ...customStyles(styles),
  control: (provided, state) => ({
    ...provided,
    border: '2px solid #ff431f',
    borderRadius: '2px',
    boxShadow: state.isFocused ? 'transparent' : 'transparent',
    flexWrap: 'nowrap',
    fontSize: '14px',
    maxHeight: state.isMulti ? null : '32px',
    minHeight: '36px',
    ':hover': {
      border: '2px solid #ff431f',
    },
    paddingLeft: state.isMulti ? '5px' : '11px',
    paddingRight: state.isMulti ? '0' : '5px',
    width: '100%',
  }),
});

const customClearIndicator = ({ ...props }) => (
  <components.ClearIndicator {...props}>
    <Icon.Large icon={Icon.icons.cross} className={cx(s.crossClearSearch)} />
  </components.ClearIndicator>
);

const SelectSearch = ({ onSearch, error, index, styles, customeComponents, ...props }) => {
  return (
    <React.Fragment>
      <AsyncPaginate
        styles={error ? errorStyles(styles) : customStyles(styles)}
        // loadOptions={debounce(onSearch, 500)}
        additional={index}
        components={{
          DropdownIndicator: null,
          ClearIndicator: customClearIndicator,
          ...customeComponents,
        }}
        {...props}
      />
    </React.Fragment>
  );
};

SelectSearch.propTypes = {
  isMulti: PropTypes.bool,
  disabled: PropTypes.bool,
  labelText: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  error: PropTypes.string,
  styles: PropTypes.shape({}),
  customeComponents: PropTypes.shape({}),
};

SelectSearch.defaultProps = {
  isMulti: false,
  disabled: false,
  labelText: '',
  error: '',
  styles: {},
  customeComponents: {},
};

export { SelectSearch };
