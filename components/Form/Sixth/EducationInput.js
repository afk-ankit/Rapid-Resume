import { Button, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styles from '@/styles/Sixth.module.scss';

const EducationInput = ({ variant, setArr }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Name of School/Educational place"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Field of study, i.e. Gymnasium or University degree"
        variant="outlined"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={styles.flex}>
          <DatePicker
            label="Choose Starting Date"
            views={['year', 'month']}
            className={styles.fullWidth}
          />
          <DatePicker
            label="Choose Ending Date"
            views={['year', 'month']}
            className={styles.fullWidth}
          />
        </div>
        <h3 className={styles.label}>Three things you are proud of</h3>
        <TextField
          id="outlined-basic"
          placeholder="Top grades in English"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          placeholder="Part student advisory board"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          placeholder="Received school award for outstanding result"
          variant="outlined"
        />
      </LocalizationProvider>

      {variant != 'first' && (
        <Button variant="contained" fullWidth style={{ background: 'red' }}>
          Delete
        </Button>
      )}
    </>
  );
};

export default EducationInput;
