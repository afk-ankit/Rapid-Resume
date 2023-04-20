import styles from '@/styles/Home.module.scss';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';

export default function Home() {
  const clickHandler = () => {
    console.log('hello');
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Lav dit CV</h1>
      <p className={styles.description}>
        Brug vores enkle, gratis CV-værktøj til at lave dit engelske CV. Du skal
        bare udfylde kasserne undervejs – når du er færdig, har du et
        professionelt CV.
      </p>
      <div className={styles.button}>
        <Link
          href="/form/first"
          style={{
            textDecoration: 'none',
          }}
        >
          <Button
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            style={{
              background: '#FF9300',
            }}
            onClick={clickHandler}
          >
            Lav gratis CV
          </Button>
        </Link>
      </div>
    </main>
  );
}
