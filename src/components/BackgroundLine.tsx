import React from 'react';
import styles from '@/styles/BackgroundLine.module.css';

export const BackgroundLine = () => {
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
