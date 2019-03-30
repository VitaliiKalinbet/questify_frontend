import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import CardView from './CardView';

// { isQuest: true,
//   _id: 5c9d9fa51f9b5b1fb73691a2,
//   name: 'Create your first quest',
//   group: 'Learning',
//   difficulty: 'Normal',
//   dueData: 124,
//   done: false,
//   updatedAt: 2019-03-29T10:12:08.484Z,
//   createdAt: 2019-03-29T10:12:08.484Z },

class CardContainer extends Component {
  state = {
    name: '',
    difficulty: '',
    group: '',
    createMode: false,
    editMode: false,
    completeModal: false,
    deleteQuestModal: false,
    agreedDeleting: false,
    isStarActive: false
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
    this.hideDeleteQuestModal();
  };

  handleAgreedDeleting = () => {
    this.setState({ agreedDeleting: true });
    this.handleDeleteCard();
  };

  handleCancelDeleting = () => {
    // this.setState({ agreedDeleting: false });
    this.hideDeleteQuestModal();
  };

  handleCreateCard = e => {
    e.preventDefault();
    // this.props.createCard({...this.state, Date.now, ....})
    this.showCompletedModal();
  };

  handleStarClick = () => {
    this.setState(prevState => ({
      isStarActive: !prevState.isStarActive
    }));
  };

  handleSaveSelectedItemDifficulties = (item, dest) => {
    if (dest) {
      this.setState({ group: item });
    } else {
      this.setState({ difficulty: item });
    }
  };

  render() {
    const { mode } = this.props;
    const { isStarActive } = this.state;
    return mode === 'render' ? (
      <CardView {...this.props} isStarActive={isStarActive} mode={mode} onStarClick={this.handleStarClick} />
    ) : (
      <CardView
        {...this.state}
        mode={mode}
        onChange={this.handleChange}
        onStarClick={this.handleStarClick}
        onCreateCard={this.handleCreateCard}
        onSaveSelectedItemDifficulties={this.handleSaveSelectedItemDifficulties}
        onHideCompletedModal={this.hideCompletedModal}
        showDelQuestModal={this.showDeleteQuestModal}
        onAgreedDel={this.handleAgreedDeleting}
        onCancelDel={this.handleCancelDeleting}
      />
    );
  }
}

CardContainer.propTypes = {
  _id: PropTypes.string,
  mode: PropTypes.string
};

CardContainer.defaultProps = {
  _id: '',
  mode: ''
};

export default CardContainer;

// redux
// export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
