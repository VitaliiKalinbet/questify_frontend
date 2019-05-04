/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardsList from '../../components/CardsList/CardsList';
import DoneCardsList from '../../components/DoneCardsList/DoneCardsList';
import Header from '../../components/Header/Header';
import CreateQuestButton from '../../components/CreateQuestButton/CreateQuestButton';
import { userSelectors } from '../../redux/user';
import s from './Dashboard.module.css';

class DashboardPage extends Component {
  state = {
    activeCard: ''
  };

  setActiveCard = () => {};

  render() {
    const { today, tomorrow, done, allTheRest, addMode } = this.props;
    return (
      <div className={s.dashboardContainer}>
        <Header />
        <CardsList name="today" arr={today} type="today" addMode={addMode} />
        <CardsList name="tomorrow" arr={tomorrow} />
        <CardsList name="all the rest" arr={allTheRest} />
        <DoneCardsList name="done" arr={done} />
        <CreateQuestButton />
      </div>
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
