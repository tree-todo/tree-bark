import React, { Component } from 'react';
import { connect } from 'react-redux';

class Auth extends Component {
  render() {
    return (
      <p>hi</p>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);