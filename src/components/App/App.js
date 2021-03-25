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
        isDone: false
      },
      {
        value: 'Talk to my friend.',
        isDone: true
      },
      {
        value: 'Make one more step closer to my goal.',
        isDone: true
      }
    ]
  };

    render() {
  return (
    <div className = {styles.base}>
      <h1 className = {styles.title}>Important cases: </h1>
      <InputItem /> 
      <ItemList items = {this.state.items}/>
      <Footer count = {1} />
    </div>);
  }
}

export default App;
