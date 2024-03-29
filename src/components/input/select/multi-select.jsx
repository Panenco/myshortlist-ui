import React from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import cx from 'classnames';
import { Icon } from 'components/icon';
import { Chip } from 'components/chip';
import s from './styles.scss';

const customStyles = {
  container: provided => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    // border: state.isMulti ? '1px solid #a5a5a5' : '1px solid #3d3d3d',
    backgroundColor: '#fff',
    border: '1px solid #3d3d3d',
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
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
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

const Option = ({ children, value, selectProps: { activeOptions }, options, isSelected, label, ...props }) => {
  const showIcon = activeOptions?.some(option => option.value === value) || isSelected;
  return (
    <components.Option {...props}>
      {children}
      {showIcon && <Icon icon={Icon.icons.accepted} />}
    </components.Option>
  );
};

Option.propTypes = {
  selectProps: PropTypes.shape({
    activeOptions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.shape({}).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isSelected: PropTypes.bool.isRequired,
};

const SelectInputOutsideChips = React.forwardRef(
  ({ isSearchable, disabled, options, borders, error, activeOptions, onDelete, ...props }, ref) => {
    return (
      <>
        <Select
          options={options}
          activeOptions={activeOptions}
          placeholder="Select item"
          styles={error ? errorStyles : customStyles}
          ref={ref}
          isDisabled={disabled}
          isSearchable={isSearchable}
          borders={borders}
          // onChange={handleChange}
          // value={null}
          components={{
            DropdownIndicator: customDropDownIndicator,
            ClearIndicator: null,
            Option,
          }}
          {...props}
        />
        {activeOptions?.length > 0 && (
          <div className={s.chips}>
            {activeOptions.map(activeOption => {
              return <Chip onDelete={onDelete(activeOption.value)}>{activeOption.label}</Chip>;
            })}
          </div>
        )}
      </>
    );
  },
);

SelectInputOutsideChips.propTypes = {
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
  activeOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};

SelectInputOutsideChips.defaultProps = {
  isMulti: false,
  disabled: false,
  borders: false,
  error: false,
  isSearchable: false,
};

export { SelectInputOutsideChips };
