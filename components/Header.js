import Image from 'next/image';
import React from 'react';
import styles from '@/styles/Header.module.scss';

const Header = () => {
  return (
    <nav className={styles.header}>
      <Image
        src={'/company-logo.png'}
        alt="company-logo"
        width="182"
        height="49"
      />
    </nav>
  );
};

export default Header;
