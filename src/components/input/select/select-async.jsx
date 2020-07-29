import React from 'react';
import PropTypes from 'prop-types';
import AsyncPaginate from 'react-select-async-paginate';
import { components } from 'react-select';
import cx from 'classnames';
import { Icon } from 'components/icon';
import s from './styles.scss';

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

const customStyles = {
  container: provided => ({
    ...provided,
    // marginBottom: '40px',
    // position: 'relative',
  }),
  control: (provided, state) => ({
    ...provided,
    border: '1px solid #3d3d3d',
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
  placeholder: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? '#a5a5a5' : '#000000',
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
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#dff2f1' : '#ffffff',
    boxShadow: 'none',
    color: state.isSelected ? '#000000' : '#000000',
    cursor: 'pointer',
    fontSize: '14px',
    borderBottom: state.isSelected ? '1px solid transparent' : '1px solid #ececec',
    ':hover': {
      backgroundColor: '#f7fBfA',
      borderBottom: '1px solid transparent',
    },
    ':last-child': {
      borderBottom: '1px solid transparent',
    },
  }),
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
};

const customClearIndicator = ({ ...props }) => (
  <components.ClearIndicator {...props}>
    <Icon.Large icon={Icon.icons.cross} className={cx(s.crossClearSearch)} />
  </components.ClearIndicator>
);

const SelectSearch = ({ onSearch, index, customeComponents, ...props }) => (
  <React.Fragment>
    <AsyncPaginate
      styles={customStyles}
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

SelectSearch.propTypes = {
  isMulti: PropTypes.bool,
  disabled: PropTypes.bool,
  labelText: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

SelectSearch.defaultProps = {
  isMulti: false,
  disabled: false,
  labelText: '',
};

export { SelectSearch };
