import React from 'react';
//import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const items = [
    {
      value: 'Написать новое приложение.',
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
  ];

return (
  <div className = {styles.base}>
    <h1 className = {styles.title}>Important cases: </h1>
    {/*<InputItem />*/} 
    <ItemList items = {items}/>
    <Footer count = {3} />
  </div>);
}
export default App;
