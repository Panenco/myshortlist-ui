import React from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import cx from 'classnames';
import { Icon } from 'components/icon';
import s from './styles.scss';

const customStyles = {
  container: provided => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    // border: state.isMulti ? '1px solid #a5a5a5' : '1px solid #3d3d3d',
    backgroundColor: '#fff',
    border: state.isFocused ? '2px solid #26a69a' : '1px solid #3d3d3d',
    borderRadius: '2px',
    boxShadow: state.isFocused ? 'transparent' : 'transparent',
    color: '#000000',
    fontSize: '14px',
    minHeight: '36px',
    ':hover': {
      border: state.isMulti ? '1px solid #3d3d3d' : '1px solid #3d3d3d',
    },
    opacity: state.isDisabled && '0.3',
    width: '100%',
    padding: state.isMulti ? '2px 6px 2px 6px' : '0 6px 0 12px',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#a5a5a5',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0',
  }),
  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    backgroundColor: isSelected || isFocused ? '#dff2f1' : '#ffffff',
    boxShadow: 'none',
    color: isSelected ? '#000000' : '#000000',
    cursor: 'pointer',
    fontSize: '14px',
    // borderBottom: isSelected ? '1px solid transparent' : '1px solid #ececec',
    borderBottom: '1px solid transparent',
    ':hover': {
      backgroundColor: isSelected ? '#dff2f1' : '#f7fBfA',
      borderBottom: '1px solid transparent',
    },
    ':last-child': {
      borderBottom: '1px solid transparent',
    },
  }),
  multiValue: provided => ({
    ...provided,
    backgroundColor: '#ffe0b2',
    fontSize: '14px', // 12 is too small, discuss it
    padding: '3px 6px 3px 6px',
    marginRight: '6px',
    marginLeft: '0',
  }),
  multiValueRemove: provided => ({
    ...provided,
    cursor: 'pointer',
    ':hover': 'none',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    zIndex: '10',
    borderRadius: '2px',
    borderTop: 'none',
    marginTop: '0',
    border: '1px solid #ececec',
    boxShadow: 'none',
    textAlign: 'left',
    width: '100%',
  }),
};

// const noBordersStyles = {
//   container: provided => ({
//     ...provided,
//     minHeight: '36px',
//     // marginBottom: '40px',
//   }),
//   control: (provided, state) => ({
//     ...provided,
//     border: 'none',
//     minHeight: '36px',
//     borderRadius: '2px',
//     boxShadow: state.isFocused ? 'transparent' : 'transparent',
//     // outline: state.isFocused ? '2px solid #26A69A' : 'none',
//     color: '#000000',
//     fontSize: '14px',
//     width: '100%',
//     padding: '0 3px 0 16px',
//   }),
//   placeholder: (provided, state) => ({
//     ...provided,
//     color: state.isMulti ? '#a5a5a5' : '#000000',
//   }),
//   valueContainer: provided => ({
//     ...provided,
//     padding: '0',
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isSelected ? '#dff2f1' : '#ffffff',
//     boxShadow: 'none',
//     color: state.isSelected ? '#000000' : '#000000',
//     cursor: 'pointer',
//     fontSize: '14px',
//     borderBottom: state.isSelected ? '1px solid transparent' : '1px solid #ececec',
//     ':hover': {
//       backgroundColor: '#f7fBfA',
//       borderBottom: '1px solid transparent',
//     },
//     ':last-child': {
//       borderBottom: '1px solid transparent',
//     },
//   }),
//   indicatorSeparator: provided => ({
//     ...provided,
//     display: 'none',
//   }),
//   dropdownIndicator: provided => ({
//     ...provided,
//     marginRight: '10px',
//     display: 'none',
//   }),
//   menu: provided => ({
//     ...provided,
//     zIndex: '10',
//     borderRadius: '2px',
//     border: '1px solid #ececec',
//     boxShadow: 'none',
//     marginTop: '0',
//     width: '100%',
//     ':before': {
//       content: null,
//       position: 'absolute',
//       top: '0',
//       left: '0',
//       width: '10px',
//       height: '5px',
//       backgroundColor: '#000',
//     },
//   }),
// };

const errorStyles = {
  ...customStyles,
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
};

const customDropDownIndicator = () => <Icon.Large icon={Icon.icons.arrow} className={cx(s.dropDownArrow)} />;

const customMultiValueRemove = props => (
  <components.MultiValueRemove {...props}>
    <Icon icon={Icon.icons.cross} className={cx(s.crossClose)} />
  </components.MultiValueRemove>
);

const SelectInput = ({ isMulti, isSearchable, disabled, options, borders, error, ...props }) => (
  <Select
    options={options}
    placeholder="Select item"
    styles={error ? errorStyles : customStyles}
    isMulti={isMulti}
    isDisabled={disabled}
    isSearchable={isSearchable}
    borders={borders}
    // value={value ? options.find(o => o.value === value) : null}
    // onChange={res => {
    //   onChange(res.value);
    // }}
    components={
      isMulti
        ? {
            DropdownIndicator: null,
            ClearIndicator: null,
            MultiValueRemove: customMultiValueRemove,
          }
        : {
            DropdownIndicator: customDropDownIndicator,
          }
    }
    {...props}
  />
);

SelectInput.propTypes = {
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  borders: PropTypes.bool,
  error: PropTypes.bool,
};

SelectInput.defaultProps = {
  isMulti: false,
  disabled: false,
  borders: false,
  error: false,
  isSearchable: false,
};

export { SelectInput };
