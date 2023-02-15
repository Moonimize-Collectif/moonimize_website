import React from 'react';
import styles from '@/styles/NavbarLine.module.css';

export const NavbarLine = () => {
  return (
    <div className={styles.backgroundLine}>
      <div>
        <hr className={styles.line}></hr>
      </div>
      <div>
        <hr className={styles.line}></hr>
      </div>
      <div>
        <hr className={styles.line}></hr>
      </div>
      <div>
        <hr className={styles.line}></hr>
      </div>
      <div>
        <hr className={styles.line}></hr>
      </div>
    </div>
  )
}
