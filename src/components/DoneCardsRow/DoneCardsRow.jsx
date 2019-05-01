import React, { Component } from 'react';
import dropDowmArrowIcon from '../../assets/images/icons/drop-down-arrow.png';
import CardContainer from '../CardContainer/CardContainer';
import s from './DoneCardsRow.module.css';

class DoneCardsRow extends Component {
  state = {
    isDoneCardsRowOpen: true
  };

  toggleDoneCardsRow = () => {
    this.setState(prevState => ({
      isDoneCardsRowOpen: !prevState.isDoneCardsRowOpen
    }));
  };

  render() {
    const { name, arr, type, addMode } = this.props;
    const { isDoneCardsRowOpen } = this.state;
    return (
      <section className={s.section}>
        {arr.length > 0 && (
          <div className={s.nameAndArrowContainer} onClick={this.toggleDoneCardsRow}>
            <p className={isDoneCardsRowOpen ? s.name : `${s.name} ${s.lightName}`}>{name}</p>
            <img
              className={isDoneCardsRowOpen ? s.dropDowmArrowIconRotate : s.dropDowmArrowIcon}
              src={dropDowmArrowIcon}
              alt="dropDowmArrow"
            />
          </div>
        )}
        {isDoneCardsRowOpen && (
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

export default DoneCardsRow;
