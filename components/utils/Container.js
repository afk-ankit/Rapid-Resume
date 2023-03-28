import React from 'react';
import styles from '@/styles/Container.module.scss';

const Container = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default Container;
