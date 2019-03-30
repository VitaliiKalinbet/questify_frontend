import React, { Component } from 'react';
// import { connect } from 'react-redux';
import CardView from './CardView';

class CardContainer extends Component {
  state = {
    name: '',
    difficulty: null,
    group: null,
    editMode: false,
    completeModal: false,
    deleteQuestModal: false,
    agreedDeleting: false
  };

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  showCompletedModal = () => {
    this.setState({ completeModal: true });
  };

  hideCompletedModal = () => {
    this.setState({ completeModal: false });
  };

  showDeleteQuestModal = () => {
    this.setState({ deleteQuestModal: true });
  };

  hideDeleteQuestModal = () => {
    this.setState({ deleteQuestModal: false });
  };

  startEditMode = () => {
    this.setState({ editMode: true });
  };

  handleDeleteCard = () => {
    // this.props.deleteCard(id);
  };

  handleAgreedDeleting = () => {
    this.setState({ agreedDeleting: true });
    handleDeleteCard();
  };

  handleCancelDeleting = () => {
    this.setState({ agreedDeleting: false });
    hideDeleteQuestModal();
  };

  handleCreateCard = e => {
    e.preventDefault();
    // this.props.createCard({...this.state, Date.now, ....})
    showCompletedModal();
  };

  render() {
    return <CardView {...this.state} onChange={this.handleChange} />;
  }
}

export default CardContainer;

// redux
// export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
