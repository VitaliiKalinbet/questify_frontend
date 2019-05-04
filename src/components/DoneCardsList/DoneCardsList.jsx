import React, { Component } from 'react';
import dropDowmArrowIcon from '../../assets/images/icons/drop-down-arrow.png';
import CardContainer from '../CardContainer/CardContainer';
import s from './DoneCardsList.module.css';

class DoneCardsList extends Component {
  state = {
    isDoneCardsListOpen: true
  };

  toggleDoneCardsList = () => {
    this.setState(prevState => ({
      isDoneCardsListOpen: !prevState.isDoneCardsListOpen
    }));
  };

  render() {
    const { name, arr, type, addMode } = this.props;
    const { isDoneCardsListOpen } = this.state;
    return (
      <section className={s.section}>
        {arr.length > 0 && (
          <div className={s.nameAndArrowContainer} onClick={this.toggleDoneCardsList}>
            <p className={isDoneCardsListOpen ? s.name : `${s.name} ${s.lightName}`}>{name}</p>
            <img
              className={isDoneCardsListOpen ? s.dropDowmArrowIconRotate : s.dropDowmArrowIcon}
              src={dropDowmArrowIcon}
              alt="dropDowmArrow"
            />
          </div>
        )}
        {isDoneCardsListOpen && (
          <div className={s.container}>
            {/* {type === 'today' && addMode && <CardContainer mode="newQuest" />} */}
            {arr.map(task => (
              <CardContainer mode="render" task={task} key={task.dueDate} />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default DoneCardsList;
