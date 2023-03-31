import React from 'react';
import styles from '@/styles/DesignOne.module.scss';

const DesignOne = () => {
  return (
    <div className={styles.page}>
      <div className={styles.headingContainer}>
        <div className={styles.imageContainer}>
          <img src="/dp.png" alt="none" />
        </div>
        <div className={styles.headingBox}>
          <h1 className={styles.headingName}>Name</h1>
          <h2 className={styles.headingWork}>Work</h2>
          <p className={styles.headingDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ut laudantium, suscipit adipisci ex assumenda repellendus expedita
            tempora aperiam obcaecati!
          </p>
        </div>
      </div>
      <div className={styles.blueBar}>
        <div className={styles.links}>
          <i className="bi bi-geo-alt-fill" style={{ color: 'white' }}></i>
          <a href="/#">ankitsharmagh093@gmail.com</a>
        </div>
        <div className={styles.links}>
          <i className="bi bi-geo-alt-fill" style={{ color: 'white' }}></i>
          <a href="/#">ankitsharmagh093@gmail.com</a>
        </div>
        <div className={styles.links}>
          <i className="bi bi-geo-alt-fill" style={{ color: 'white' }}></i>
          <a href="/#">ankitsharmagh093@gmail.com</a>
        </div>
        <div className={styles.links}>
          <i className="bi bi-geo-alt-fill" style={{ color: 'white' }}></i>
          <a href="/#">ankitsharmagh093@gmail.com</a>
        </div>
      </div>
      <main className={styles.main}>
        <div>
          <h1 className={styles.heading}>Work Experience</h1>
          <h2 className={styles.subHeadingBold}>VIP/Key Account Manager</h2>
          <h2 className={styles.subHeadingLight}>
            Mr Green - Part of WIlliam Hill
          </h2>
          <div className={styles.dateLocation}>
            <h3 className={styles.date}>10/2023 - 12/2024</h3>
            <h3 className={styles.date}>Matla</h3>
          </div>
          <h3 className={styles.date}>Achievements/Tasks</h3>
          <ul className={`${styles.list} ${styles.normalDescription}`}>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              sit itaque, error natus vero sapiente officia sint aspernatur
              magni eaque.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              sit itaque, error natus vero sapiente officia sint aspernatur
              magni eaque.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              sit itaque, error natus vero sapiente officia sint aspernatur
              magni eaque.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              sit itaque, error natus vero sapiente officia sint aspernatur
              magni eaque.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default DesignOne;
