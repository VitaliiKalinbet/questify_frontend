/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../../components/Lists/conteiner';
import Header from '../../components/Header/Header';
import CreateQuestButton from '../../components/CreateQuestButton/CreateQuestButton';
import { userSelectors } from '../../redux/user';

class DashboardPage extends Component {
  state = {};

  render() {
    const { today, tomorrow, done, allTheRest } = this.props;
    return (
      <div>
        <Header />
        <Container arr={today} />
        <Container arr={tomorrow} />
        <Container arr={allTheRest} />
        <Container arr={done} />
        <CreateQuestButton />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  today: userSelectors.getTodayList(sate),
  tomorrow: userSelectors.getTomorrowList(state),
  allTheRest: userSelectors.getAllTheRestList(state),
  done: userSelectors.getDoneList(state)
});

export default connect(mapStateToProps)(DashboardPage);
