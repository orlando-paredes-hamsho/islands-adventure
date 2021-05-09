import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import './styles.css';

const SizeInputContainer = observer(({ name, children }) => {
  if (!name) return null;
  return (
    <label className="sizeInputContainer" data-testid="sizeInputContainer" htmlFor={name}>
      {name}
      {children}
    </label>
  );
});

SizeInputContainer.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  changeAction: PropTypes.func,
};

SizeInputContainer.defaultProps = {
  name: '',
  value: 0,
  changeAction: () => {},
};

export default SizeInputContainer;
