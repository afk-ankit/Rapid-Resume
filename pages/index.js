import styles from "@/styles/Home.module.scss";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";

export default function Home() {
  const clickHandler = () => {
    console.log("hello");
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Rapid Resume</h1>
      <p className={styles.description}>
        Create a resume that stands out. <br /> Create a resume that lands you
        the job.
      </p>
      <div className={styles.button}>
        <Link
          href="/form/first"
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            style={{
              background: "#FF9300",
            }}
            onClick={clickHandler}
          >
            Create Resume
          </Button>
        </Link>
      </div>
    </main>
  );
}
