import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (
<span>
<Checkbox
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

// Item.defaultProps = {
//   value: "Нет задачи"
// };

// Item.propTypes = {
//   value: PropTypes.oneOfType([
//   PropTypes.string,
//   PropTypes.number
// ])};

export default Item;

