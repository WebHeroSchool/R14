import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (
<span>
<Checkbox
        //defaultChecked
        checked={isDone}
        onClick = {() => onClickDone(id)}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
  <span className = {
    classnames({
        [styles.item]: true,
        [styles.done]: isDone,
    }) 
}>{value}</span>
<IconButton 
  aria-label="delete" 
  onClick = {() => onClickDelete(id)} 
  className={styles.delete}>
    <DeleteIcon  />
</IconButton>
</span>);

export default Item;

