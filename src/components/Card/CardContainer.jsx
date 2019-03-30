import React, { Component } from 'react';
// import { connect } from 'react-redux';
import CardView from './CardView';

class CardContainer extends Component {
  componentDidUpdate() {}

  render() {
    return <CardView />;
  }
}

export default CardContainer;

// redux
// export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
