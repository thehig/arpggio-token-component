import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Token extends PureComponent {
  render() {
    return <div>name: {name}</div>;
  }
}

Token.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string
};

Token.defaultProps = {
  name: 'Unknown'
};

export default Token;