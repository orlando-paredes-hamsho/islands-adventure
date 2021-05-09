import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import { toInt } from '../../utils';

const SizeInput = observer(({ name, value, changeAction }) => {
  if (!name) return null;
  return (
    <input
      type="number"
      id={name}
      name={name}
      value={value}
      data-testid="sizeInput"
      onChange={({ target }) => { changeAction(toInt(target.value)); }}
    />
  );
});

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
