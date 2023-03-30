import { useEffect, useState } from 'react';
import language from '@/public/languageNames.json';
import styles from '@/styles/LanguagePicker.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
const {
  Button,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  IconButton,
} = require('@mui/material');
const languageArr = Object.entries(language);

const LanguagePicker = () => {
  const [counter, setCount] = useState(1);
  const [arr, setArray] = useState([]);
  useEffect(() => {
    const array = new Array(counter).fill(0);
    setArray(array);
  }, [counter]);

  const buttonHandler = () => {
    setCount((prev) => prev + 1);
  };

  //   languageArr.forEach((item) => console.log(item[1].name));
  return (
    <div>
      <Button onClick={buttonHandler}>Add Language</Button>
      {arr.map((item, count) => (
        <div key={count} className={styles.languageContainer}>
          <div className={styles.language}>
            <InputLabel id="language-select">Language</InputLabel>
            <Select
              fullWidth
              labelId="language-select"
              id="language-select"
              label="Select Language"
              style={{ background: '#E2F2FF' }}
            >
              {languageArr.map((value, count) => (
                <MenuItem value={value[1].name} key={count}>
                  {value[1].name}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <InputLabel id="rating-select">Fluency</InputLabel>
            <Rating
              name="simple-controlled"
              size="large"
              labelId="rating-select"
            />
          </div>
          <IconButton
            className={styles.delete}
            size="large"
            color="primary"
            onClick={() => {
              console.log('I am delete');
              setCount((prev) => prev - 1);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default LanguagePicker;
