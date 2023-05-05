import React, { useEffect, useRef } from "react";
import styles from "@/styles/DesignTwo.module.scss";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import ReactToPrint from "react-to-print";

const DesignTwo = ({ handleRef, theme }) => {
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
      arr[1] = componentRef;
      return arr;
    });
  }, []);
  const handleTheme = (theme) => {
    switch (theme) {
      case "0":
        return `${styles.page} ${styles.default}`;
      case "1":
        return `${styles.page} ${styles.primary}`;
      case "2":
        return `${styles.page} ${styles.secondary}`;
    }
  };
  return (
    <div className={styles.scale}>
      <div className={handleTheme(theme)} ref={componentRef}>
        <div className={styles.sidebar}>
          <div></div>
          <div></div>
          <div className={styles.sidebarContainer}>
            {url && <img src={url} className={styles.img} />}
            <div className={styles.fullwidth}>
              <div className={styles.flex}>
                <i
                  class="bi bi-headset-vr"
                  style={{ color: "white", fontSize: "1.8rem" }}
                ></i>
                <h1 className={styles.skillsHeading}>Skills</h1>
              </div>
              <div
                className={styles.skillsCollection}
                style={{ color: "white" }}
              >
                <h3 className={styles.subHeadingLight}>Soft-Skills</h3>
                {softSkill.map((item, index) => (
                  <span className={styles.skills} key={index}>
                    {item.name}
                  </span>
                ))}
                <h3
                  className={styles.subHeadingLight}
                  style={{ color: "white" }}
                >
                  Technical-Skills
                </h3>
                {technicalSkill.map((item, index) => (
                  <span className={styles.skills} key={index}>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.fullwidth}>
              <div className={styles.flex}>
                <i
                  class="bi bi-translate"
                  style={{ color: "white", fontSize: "1.8rem" }}
                ></i>
                <h1 className={styles.skillsHeading}>Languages</h1>
              </div>
              <div>
                {sortedLanguage.map((item, index) => {
                  const arr1 = new Array(Number(item.rating)).fill(0);
                  const arr2 = new Array(5 - Number(item.rating)).fill(0);
                  return (
                    <div key={index}>
                      <h3 className={styles.language}>{item.name}</h3>
                      <div className={styles.ratingContainer}>
                        {arr1.map((item) => (
                          <i
                            class="bi bi-circle-fill"
                            style={{ fontSize: "0.8rem" }}
                          ></i>
                        ))}
                        {arr2.map((item) => (
                          <i
                            class="bi bi-circle"
                            style={{ fontSize: "0.8rem" }}
                          ></i>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.fullwidth}>
              <div className={styles.flex}>
                <i
                  class="bi bi-joystick"
                  style={{ color: "white", fontSize: "1.8rem" }}
                ></i>
                <h1 className={styles.skillsHeading}>Interests</h1>
              </div>
              <div className={styles.interestCollection}>
                {hobby.map((item) => (
                  <span className={styles.interest}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <main className={styles.main}>
          <div className={styles.nameContainer}>
            <h1>
              {firstName} {lastName}
            </h1>
            <h2>{job[0].name}</h2>
            <p>{about}</p>
          </div>
          <div className={styles.blueBox}>
            <div className={styles.links} style={{ gridArea: "a" }}>
              <i className="bi bi-envelope-fill" style={{ color: "white" }}></i>
              <a href="/#">{email}</a>
            </div>
            <div className={styles.links}>
              <i className="bi bi-phone-fill" style={{ color: "white" }}></i>
              <a href="/#">{phoneNumber}</a>
            </div>
            <div className={styles.links}>
              <i className="bi bi-geo-alt-fill" style={{ color: "white" }}></i>
              <a href="/#">{country}</a>
            </div>
          </div>
          <div className={styles.workContainer}>
            <h1 className={styles.heading}>Work Experience</h1>
            {job.map((item) => (
              <>
                <h2 className={styles.subHeadingBold}>{item.name}</h2>
                <h2 className={styles.subHeadingLight}>{item.field}</h2>
                <h3 className={styles.date}>
                  {item.pStartDate}-
                  {item.currWorking ? "Present" : item.pEndDate}
                </h3>
                {item[0] && (
                  <h3 className={styles.date}>Achievements/results</h3>
                )}
                <ul className={styles.description}>
                  {item.proud.map((item) => Boolean(item) && <li>{item}</li>)}
                </ul>
              </>
            ))}
          </div>
          <div className={styles.workContainer}>
            <h1 className={styles.heading}>Education</h1>
            {education.map((item) => (
              <>
                <h2 className={styles.subHeadingBold}>{item.name}</h2>
                <h2 className={styles.subHeadingLight}>{item.field}</h2>
                <h3 className={styles.date}>
                  {item.pStartDate}-
                  {item.currWorking ? "Present" : item.pEndDate}
                </h3>
                {item[0] && (
                  <h3 className={styles.date}>Achievements/results</h3>
                )}
                <ul className={styles.description}>
                  {item.proud.map((item) => item && <li>{item}</li>)}
                </ul>
              </>
            ))}
          </div>
        </main>
        <img src="/company-logo.png" className={styles.waterMark} />
      </div>
    </div>
  );
};

export default DesignTwo;
