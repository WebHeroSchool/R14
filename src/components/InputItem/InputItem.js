import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: ""
  };

  onButtonClick = () => {
    this.setState ({
      inputValue: ''
    });

    this.props.onClickAdd(this.state.inputValue);
  }

  render (){
    const { onClickAdd } = this.props;

    return (
      <div>
        <TextField 
          id="filled-full-width"
          label="Enter a new task"
          style={{ margin: 8 }}
          fullWidth
          value = {this.state.inputValue}
          onChange={event => this.setState({inputValue: event.target.value})}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <Button 
          variant="contained" 
          color="primary"
          fullWidth
          onClick = {this.onButtonClick}
          disabled={!this.state.inputValue}
          >
          Add a task
        </Button>
      </div>
    )
  }

}


export default InputItem;