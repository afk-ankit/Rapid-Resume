import React, { useEffect, useRef } from 'react';
import styles from '@/styles/DesignOne.module.scss';
import { useSelector } from 'react-redux';

const DesignOne = ({ handleRef, theme }) => {
  const {
    firstName,
    lastName,
    email,
    about,
    job,
    phoneNumber,
    country,
    hobby,
    language,
    softSkill,
    technicalSkill,
    education,
    url,
  } = useSelector((state) => state);

  const componentRef = useRef();

  const sortedLanguage = [...language].sort((a, b) => {
    if (a.rating === b.rating) {
      // If the ratings are the same, sort alphabetically by name
      return a.name.localeCompare(b.name);
    } else {
      // Otherwise, sort by rating
      return b.rating - a.rating;
    }
  });

  useEffect(() => {
    handleRef((prev) => {
      const arr = [prev];
      arr[0] = componentRef;
      return arr;
    });
  }, []);

  const handleTheme = (theme) => {
    switch (theme) {
      case '0':
        return `${styles.page} ${styles.default}`;
      case '1':
        return `${styles.page} ${styles.primary}`;
      case '2':
        return `${styles.page} ${styles.secondary}`;
    }
  };

  return (
    <>
      <div className={handleTheme(theme)} ref={componentRef}>
        <div className={styles.headingContainer}>
          {url && (
            <div className={styles.imageContainer}>
              <img src={url} />
            </div>
          )}

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
        </div>
        <main className={styles.main}>
          <div>
            <div>
              <h1 className={styles.heading}>Work Experience</h1>
              {job.map((item) => {
                return (
                  <div style={{ marginBottom: '1rem' }}>
                    <h2 className={styles.subHeadingBold}>{item.name}</h2>
                    <h2 className={styles.subHeadingLight}>{item.field}</h2>
                    <div className={styles.dateLocation}>
                      <h3 className={styles.date}>
                        {item.pStartDate} - {item.pEndDate}
                      </h3>
                    </div>
                    {item.proud[0] && (
                      <h3 className={styles.date}>Achievements/Tasks</h3>
                    )}
                    <ul
                      className={`${styles.list} ${styles.normalDescription}`}
                    >
                      {item.proud.map((item) => {
                        if (item) {
                          return <li>{item}</li>;
                        }
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div>
              <h1 className={styles.heading}>Education</h1>
              {education.map((item) => {
                return (
                  <div style={{ marginBottom: '1rem' }}>
                    <h2 className={styles.subHeadingBold}>{item.name}</h2>
                    <h2 className={styles.subHeadingLight}>{item.field}</h2>
                    <div className={styles.dateLocation}>
                      <h3 className={styles.date}>
                        {item.pStartDate} - {item.pEndDate}
                      </h3>
                    </div>
                    {item.proud[0] && (
                      <h3 className={styles.date}>Achievements/Tasks</h3>
                    )}
                    <ul
                      className={`${styles.list} ${styles.normalDescription}`}
                    >
                      {item.proud.map((item) => {
                        if (item) return <li>{item}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div>
              <div style={{ marginBottom: '16px' }}>
                <h1 className={styles.heading}>Soft-Skills</h1>
                <div
                  className={`${styles.skillsContainer} ${styles.normalDescription}`}
                >
                  {softSkill.map((item) => (
                    <span className={`${styles.skills}`}>{item.name}</span>
                  ))}
                </div>
              </div>
              <div>
                <h1 className={styles.heading}>Technical-Skills</h1>
                <div
                  className={`${styles.skillsContainer} ${styles.normalDescription}`}
                >
                  {technicalSkill.map((item) => (
                    <span className={`${styles.skills}`}>{item.name}</span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h1 className={styles.heading}>Languages</h1>
              <div className={styles.languageContainer}>
                {sortedLanguage.map((item) => {
                  const arr1 = new Array(Number(item.rating)).fill(0);
                  const arr2 = new Array(5 - Number(item.rating)).fill(0);
                  return (
                    <div className={styles.language}>
                      <h3 className={styles.normalDescription}>{item.name}</h3>
                      <div className={styles.rating}>
                        {arr1.map((item) => (
                          <i class="bi bi-circle-fill"></i>
                        ))}
                        {arr2.map((item) => (
                          <i class="bi bi-circle"></i>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h1 className={styles.heading}>Interests</h1>
              <div
                className={`${styles.skillsContainer} ${styles.normalDescription}`}
              >
                {hobby.map((item) => (
                  <span className={`${styles.hobby}`}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </main>
        <img src="/company-logo.png" className={styles.waterMark} />
      </div>
    </>
  );
};

export default DesignOne;
