import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SizeInput = ({ name, value, changeAction }) => {
  if (!name) return null;
  return (
    <label className="sizeInput" data-testid="sizeInput" htmlFor={name}>
      {name}
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        data-testid="sizeInputChanger"
        onChange={(e) => { changeAction(e); }}
      />
    </label>
  );
};

SizeInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  changeAction: PropTypes.func,
};

SizeInput.defaultProps = {
  name: '',
  value: 0,
  changeAction: () => {},
};

export default SizeInput;
