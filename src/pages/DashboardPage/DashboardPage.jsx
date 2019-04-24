/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardsRow from '../../components/CardsRow/CardsRow';
import Header from '../../components/Header/Header';
import CreateQuestButton from '../../components/CreateQuestButton/CreateQuestButton';
import { userSelectors } from '../../redux/user';

class DashboardPage extends Component {
  state = {};

  render() {
    const { today, tomorrow, done, allTheRest, addMode } = this.props;
    return (
      <>
        <Header />
        <CardsRow name="today" arr={today} type="today" addMode={addMode} />
        <CardsRow name="tomorrow" arr={tomorrow} />
        <CardsRow name="all the rest" arr={allTheRest} />
        <CardsRow name="done" arr={done} />
        <CreateQuestButton />
      </>
    );
  }
}

const mapStateToProps = state => ({
  today: userSelectors.getTodayList(state),
  tomorrow: userSelectors.getTomorrowList(state),
  allTheRest: userSelectors.getAllTheRestList(state),
  done: userSelectors.getDoneList(state),
  addMode: userSelectors.getAddMode(state)
});

export default connect(mapStateToProps)(DashboardPage);
