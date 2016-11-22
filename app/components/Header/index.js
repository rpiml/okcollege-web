/*
 * Navbar for whole application
 * keeps track of which page is active
 */
import React, { PropTypes } from 'react';

import {Link} from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './styles.css';

const navClasses = `${styles.navLinks} ${styles.nonTitles}`;
const titleClasses = `${styles.navLinks} ${styles.title}`;

const Header = (props) => {
  return <header className={styles.header}>
    <Link className={titleClasses} to='/'>
      <h2> OkCollege </h2>
    </Link>
    <Link 
      className={navClasses} 
      to='login'
      onClick={props.onClickLogin}>
      Login
    </Link>
    <Link className={navClasses}to='about'>About</Link>
  </header>
}

export default Header;
