import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const Footer = ({ count }) => (
  <div><div className = {styles.footer}>Cases left: {count} </div>
    <div className={styles.button}>
      <Button variant="outlined" className = {styles.all}>All</Button>
      <Button variant="outlined" color="primary">
        Active
      </Button>
      <Button variant="outlined" color="secondary">
        Completed
      </Button>
      <Button variant="outlined">
        Clear Completed
      </Button>
    </div>
  </div>
);

Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;