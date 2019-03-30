import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import CardView from './CardView';

class CardContainer extends Component {
  state = {
    name: '',
    difficulty: 'Normal',
    group: 'Stuff',
    date: null,
    createMode: false,
    editMode: false,
    completeModal: false,
    deleteQuestModal: false,
    agreedDeleting: false,
    isStarActive: false,
    isSelectorDifficultiesOpen: false,
    isSelectorGroupsOpen: false
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

  handleSaveSelectedItem = (item, group) => {
    if (group) {
      this.setState(prevState => ({ group: item, isSelectorGroupsOpen: !prevState.isSelectorGroupsOpen }));
    } else {
      this.setState(prevState => ({
        difficulty: item,
        isSelectorDifficultiesOpen: !prevState.isSelectorDifficultiesOpen
      }));
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
        onSaveSelectedItem={this.handleSaveSelectedItem}
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
