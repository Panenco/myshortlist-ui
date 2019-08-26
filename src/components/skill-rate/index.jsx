import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './styles.scss';

const SkillRate = ({ name = 'rating', id, from, to, step, value = 0, onChange = console.log }) => {
  // console.log(name);
  const [val, setValue] = useState(value);
  const handleChange = e => setValue(e.target.value);

  useEffect(() => {
    onChange(val);
  }, [val]);

  const circles = new Array(to - from + 1)
    .fill(null)
    .map((_, i) => {
      return (
        <React.Fragment>
          <input id={`${id + i}`} name={name} type="radio" value={from + i * step} onChange={handleChange} />
          <label htmlFor={`${id + i}`}>{from + i * step}</label>
        </React.Fragment>
      );
    })
    .reverse();

  return <div className={s.numberRate}>{circles}</div>;
};

SkillRate.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  from: PropTypes.number,
  to: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

SkillRate.defaultProps = {
  from: 1,
  to: 5,
  step: 1,
};

export { SkillRate };
