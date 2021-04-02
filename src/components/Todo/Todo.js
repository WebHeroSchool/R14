import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
    const initialState = {
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
    ],
    count: 3
  };

  const [items, setItems] = useState (initialState.items);
  const [count, setCount] = useState (initialState.count);

  useEffect(() => {console.log('mount');}, []);
  useEffect(() => {console.log('update');});

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemList);
  };

  
  const onClickDelete = id => {
    const newItemList = items.filter(item =>{
    return item.id !== id; 
      });
      setItems(newItemList)
      setCount(count - 1)
  };
  
  const onClickAdd = value => {
    setItems (
      [...items,
        {
          value,
          isDone: false,
          id: count + 1
    }]);
      setCount(count + 1)
    }
    
  return (
    <CardContent>
      <h1 className = {styles.title}>Important tasks: </h1>
      <InputItem onClickAdd = {onClickAdd} /> 
      <ItemList 
      items = {items} 
      onClickDone={onClickDone} 
      onClickDelete={onClickDelete}/>
      <Footer count = {count} />
    </CardContent>
  );
}

export default Todo; 