import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul className={styles.list}>
    {items.map(item => <li key={item.id}>
      <Item 
        value = {item.value} 
        isDone = {item.isDone}
        id = {item.id}
        onClickDone = {onClickDone}
        onClickDelete = {onClickDelete}
      />
      </li>)}
</ul>);

ItemList.defaultProps = {
  items: [{
      value: 'No tasks are entered',
      isDone: false
  }]
}

export default ItemList;