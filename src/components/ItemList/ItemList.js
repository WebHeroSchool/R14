import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = ({ items, onClickDone }) => (<ul className={styles.list}>
    {items.map(item => <li key={item.value}>
      <Item 
        value = {item.value} 
        isDone = {item.isDone}
        id = {item.id}
        onClickDone = {onClickDone}
      />
      <IconButton aria-label="delete" className={styles.delete}>
        <DeleteIcon 
        />
      </IconButton></li>)}
</ul>);

export default ItemList;