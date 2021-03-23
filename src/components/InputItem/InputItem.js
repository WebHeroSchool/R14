import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

const InputItem = () => (<div>
  <TextField 
    id="filled-full-width"
    label="Enter a new case"
    style={{ margin: 8 }}
    //placeholder="Placeholder"
    //helperText="Full width!"
    fullWidth
    margin="normal"
    InputLabelProps={{
      shrink: true,
    }}
    variant="filled"
  />
</div>);

export default InputItem;