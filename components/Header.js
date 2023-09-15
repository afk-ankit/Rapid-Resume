import Image from "next/image";
import React from "react";
import styles from "@/styles/Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <h1>
        Rapid{" "}
        <span
          style={{
            color: "#FF9300",
          }}
        >
          Resume
        </span>
      </h1>
    </nav>
  );
};

export default Header;
