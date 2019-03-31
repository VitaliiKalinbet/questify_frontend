import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import CardView from './CardView';

class CardContainer extends Component {
  state = {
    name: '',
    difficulty: 'Normal',
    group: 'Stuff',
    date: new Date(),
    createMode: false,
    editMode: false,
    completeModal: false,
    deleteQuestModal: false,
    agreedDeleting: false,
    isStarActive: false,
    isSelectorDifficultiesOpen: false,
    isSelectorGroupsOpen: false,
    done: false
  };

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handlePickerSet = date => {
    console.log(Number(date));
    this.setState({
      date
    });
  };

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

  handleDeleteCard = id => {
    console.log(id);
    // this.props.deleteCard(id);
    this.hideDeleteQuestModal();
  };

  handleAgreedDeleting = id => {
    this.setState({ agreedDeleting: true });
    this.handleDeleteCard(id);
  };

  handleCancelDeleting = () => {
    // this.setState({ agreedDeleting: false });
    this.hideDeleteQuestModal();
  };

  handleCreateCard = () => {
    // this.props.createCard({...this.state, Date.now, ....})
    const { name, group, difficulty, date, done, isStarActive } = this.state;
    const unixDate = Number(date);
    const newQuest = {
      name,
      group,
      difficulty,
      unixDate,
      done,
      isStarActive
    };
    console.log(newQuest);
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
    const { isStarActive, date } = this.state;
    return mode === 'render' ? (
      <CardView {...this.props} isStarActive={isStarActive} mode={mode} onStarClick={this.handleStarClick} />
    ) : (
      <CardView
        {...this.state}
        startDate={date}
        mode={mode}
        onChange={this.handleChange}
        onStarClick={this.handleStarClick}
        onCreateCard={this.handleCreateCard}
        onPickerSet={this.handlePickerSet}
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
