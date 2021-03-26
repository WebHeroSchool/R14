import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {

  state = {
    items: [
      {
        value: 'Create a new application.',
        isDone: false,
        id: 1
      },
      {
        value: 'Talk to my friend.',
        isDone: true,
        id: 2
      },
      {
        value: 'Make one more step closer to my goal.',
        isDone: true,
        id: 3
      }
    ]
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({ items: newItemList});
  };

  render() {
    return (
      <div className = {styles.base}>
        <h1 className = {styles.title}>Important cases: </h1>
        <InputItem /> 
        <ItemList items = {this.state.items} onClickDone={this.onClickDone} />
        <Footer count = {1} />
      </div>);
  }
}

export default App;
