import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ value, isDone, onClickDone, id }) => (
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
</span>);

export default Item;

