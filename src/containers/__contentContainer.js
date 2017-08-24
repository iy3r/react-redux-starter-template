import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../redux/actions';
import Content from '../components/Layout/__content';

class ContentContainer extends Component {
  render() {
    return (
      <Content quote={this.props.quote} fetch={this.props.fetch} />
    )
  }
}

const mapStateToProps = state => {
  return {
    quote: state.quote
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(ActionCreators.fetchQuote())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);