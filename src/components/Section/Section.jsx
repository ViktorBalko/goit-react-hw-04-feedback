import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ children }) => {
  return <div className={styles.MainSection}>{children}</div>;
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
