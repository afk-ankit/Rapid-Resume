import React, { useRef } from 'react';
import styles from '@/styles/DesignThree.module.scss';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import ReactToPrint from 'react-to-print';

const DesignThree = () => {
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
  return (
    <>
      <ReactToPrint
        trigger={() => (
          <div
            style={{
              width: 'fit-content',
              margin: '2rem auto',
            }}
          >
            <Button variant="contained">Print</Button>
          </div>
        )}
        content={() => componentRef.current}
      />
      <div className={styles.page} ref={componentRef}>
        <div className={styles.headingContainer}>
          <div>
            <div>
              {url && <img src={url} alt="no image" />}
              <h1>
                {firstName} {lastName}
              </h1>
            </div>
            <div>
              <div className={styles.link}>
                <h2>{email}</h2>
                <i
                  className="bi bi-envelope-fill"
                  style={{ color: '#10514B' }}
                ></i>
              </div>
              <div className={styles.link}>
                <h2>{phoneNumber}</h2>
                <i
                  className="bi bi-phone-fill"
                  style={{ color: '#10514B' }}
                ></i>
              </div>
              <div className={styles.link}>
                <h2>{country}</h2>
                <i
                  className="bi bi-geo-alt-fill"
                  style={{ color: '#10514B' }}
                ></i>
              </div>
            </div>
          </div>
          <div>
            <p>{about}</p>
          </div>
        </div>
        <main className={styles.main}>
          <div>
            <div>
              <div className={styles.mainHeading}>
                <h1>Work Experience</h1>
                <hr />
              </div>
              {job.map((item) => (
                <div>
                  <h2 className={styles.subHeadingBold}>{item.name}</h2>
                  <h3 className={styles.subHeadingLight}>{item.field}</h3>
                  <h3 className={styles.date}>
                    {item.pStartDate} - {item.pEndDate}
                  </h3>
                  {item.proud[0] && (
                    <h3 className={styles.date}>Achievements/Tasks</h3>
                  )}
                  <ul className={`${styles.list} ${styles.normalDescription}`}>
                    {item.proud.map((item) => {
                      if (item) return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <div className={styles.mainHeading}>
                <h1>Education</h1>
                <hr />
              </div>
              {education.map((item) => (
                <div>
                  <h2 className={styles.subHeadingBold}>{item.name}</h2>
                  <h3 className={styles.subHeadingLight}>{item.field}</h3>
                  <h3 className={styles.date}>
                    {item.pStartDate} - {item.pEndDate}
                  </h3>
                  {item.proud[0] && (
                    <h3 className={styles.date}>Achievements/Tasks</h3>
                  )}
                  <ul className={`${styles.list} ${styles.normalDescription}`}>
                    {item.proud.map((item) => {
                      if (item) return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <div className={styles.mainHeading}>
                <h1>Soft-skills</h1>
                <hr />
              </div>
              <div
                className={`${styles.skillsContainer} ${styles.normalDescription}`}
              >
                {softSkill.map((item) => (
                  <span className={`${styles.skills}`}>{item.name}</span>
                ))}
              </div>
            </div>
            <div>
              <div className={styles.mainHeading}>
                <h1>Technical-skills</h1>
                <hr />
              </div>
              <div
                className={`${styles.skillsContainer} ${styles.normalDescription}`}
              >
                {technicalSkill.map((item) => (
                  <span className={`${styles.skills}`}>{item.name}</span>
                ))}
              </div>
            </div>
            <div>
              <div className={styles.mainHeading}>
                <h1>Languages</h1>
                <hr />
              </div>
              <div className={styles.languageContainer}>
                {language.map((item) => {
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
              <div className={styles.mainHeading}>
                <h1>Interests</h1>
                <hr />
                <div
                  className={`${styles.skillsContainer} ${styles.normalDescription}`}
                  style={{ marginTop: '16px' }}
                >
                  {hobby.map((item) => (
                    <span className={`${styles.hobby}`}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <img src="/company-logo.png" className={styles.waterMark} />
      </div>
    </>
  );
};

export default DesignThree;
