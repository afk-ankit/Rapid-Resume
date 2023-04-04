import React from 'react';
import styles from '@/styles/DesignOne.module.scss';
import { useSelector } from 'react-redux';

const DesignOne = () => {
  // const { firstName, lastName, email, about, job, phoneNumber, country } =
  //   useSelector((state) => state.user);

  const initialState = {
    firstName: 'Ankit',
    lastName: 'Sharma',
    email: 'ankitsharmagh093@gmail.com',
    country: 'India',
    phoneNumber: '6901775738',
    language: [
      { name: 'Hindi', rating: 5 },
      { name: 'English', rating: 3 },
    ],
    softSkill: [
      {
        name: 'LeaderShip',
        rating: 4,
      },
      {
        name: 'Loyalty',
        rating: 2,
      },
    ],
    technicalSkill: [
      {
        name: 'Microsoft Excel',
        rating: 5,
      },
      {
        name: 'Microsoft Paint',
        rating: 2,
      },
    ],
    about:
      'This is me ankit sharma and I am glab to be the part of this industry this and that sdfsdf sdf jalsdf asd falsdfj lasdf jlasdf lsdf lasdf lsdlfj asdlfkskkkkkkkkkkkkkkkk',
    education: [
      {
        name: 'Tezpur University',
        field: 'B. Tech',
        startDate: '03/2002',
        endDate: '05/500',
        proud: [
          'I fucked one girl in niribilli',
          'I punched a professor',
          'Fuck off',
        ],
      },
      {
        name: 'Vivekananda Kendra Vidyalaya',
        field: '12th',
        startDate: '03/2002',
        endDate: '05/500',
        proud: ['I was good', 'I punched a professor', 'Fuck off'],
      },
    ],
    job: [
      {
        name: 'Full Stack Developer',
        field: 'Stark Industies',
        startDate: '02/3003',
        endDate: '04/4003',
        proud: [
          'I have always wanted to become successfull',
          'I only did hard work nothing else',
          'I have made Ai robots in the jungle',
        ],
      },
      {
        name: 'Web Architecht',
        field: 'Red postive private limited',
        startDate: '02/3003',
        endDate: '23/235',
        proud: [
          'I have always wanted to become successfull',
          'I only did hard work nothing else',
          'I have made Ai robots in the jungle',
        ],
      },
    ],
    hobby: [''],
  };

  const { firstName, lastName, job, about, email, phoneNumber, country } =
    initialState;

  return (
    <div className={styles.page}>
      <div className={styles.headingContainer}>
        <div className={styles.imageContainer}>
          <img src="/dp.png" alt="none" />
        </div>
        <div className={styles.headingBox}>
          <h1 className={styles.headingName}>
            {firstName} {lastName}
          </h1>
          <h2 className={styles.headingWork}>{job[0].name}</h2>
          <p className={styles.headingDescription}>{about}</p>
        </div>
      </div>
      <div className={styles.blueBar}>
        <div className={styles.links}>
          <i className="bi bi-envelope-fill" style={{ color: 'white' }}></i>
          <a href="/#">{email}</a>
        </div>
        <div className={styles.links}>
          <i className="bi bi-phone-fill" style={{ color: 'white' }}></i>
          <a href="/#">{phoneNumber}</a>
        </div>
        <div className={styles.links}>
          <i className="bi bi-geo-alt-fill" style={{ color: 'white' }}></i>
          <a href="/#">{country}</a>
        </div>
        <div className={styles.links}>
          <i className="bi bi-geo-alt-fill" style={{ color: 'white' }}></i>
          <a href="/#">ankitsharmagh093@gmail.com</a>
        </div>
      </div>
      <main className={styles.main}>
        <div>
          <h1 className={styles.heading}>Work Experience</h1>
          {job.map((item) => {
            return (
              <div style={{ marginBottom: '1rem' }}>
                <h2 className={styles.subHeadingBold}>{item.name}</h2>
                <h2 className={styles.subHeadingLight}>{item.field}</h2>
                <div className={styles.dateLocation}>
                  <h3 className={styles.date}>
                    {item.startDate} - {item.endDate}
                  </h3>
                  <h3 className={styles.date}>Matla</h3>
                </div>
                <h3 className={styles.date}>Achievements/Tasks</h3>
                <ul className={`${styles.list} ${styles.normalDescription}`}>
                  {item.proud.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default DesignOne;
