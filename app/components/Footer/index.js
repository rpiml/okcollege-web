/**
 *
 * Footer
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

const Footer = ({}) => {
  return <div id={styles.footer}>
    Created at RPI in collaboration with <a href='https://rcos.io'>RCOS</a>
  </div>
}

export default Footer;
