/* eslint react/prop-types: 0 */

import React from 'react';
import { connect } from 'react-redux';
import CardsList from '../../components/CardsList/CardsList';
import DoneCardsList from '../../components/DoneCardsList/DoneCardsList';
import Header from '../../components/Header/Header';
import CreateQuestButton from '../../components/CreateQuestButton/CreateQuestButton';
import { userSelectors } from '../../redux/user';
import s from './Dashboard.module.css';

const DashboardPage = ({ today, tomorrow, done, allTheRest }) => (
  <div className={s.dashboardContainer}>
    <Header />
    <CardsList name="today" arr={today} type="today" />
    <CardsList name="tomorrow" arr={tomorrow} />
    <CardsList name="all the rest" arr={allTheRest} />
    <DoneCardsList name="done" arr={done} />
    <CreateQuestButton />
  </div>
);

const mapStateToProps = state => ({
  today: userSelectors.getTodayList(state),
  tomorrow: userSelectors.getTomorrowList(state),
  allTheRest: userSelectors.getAllTheRestList(state),
  done: userSelectors.getDoneList(state)
});

export default connect(mapStateToProps)(DashboardPage);
