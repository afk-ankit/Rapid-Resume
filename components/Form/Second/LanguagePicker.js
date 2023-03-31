import { useEffect, useState } from 'react';
import language from '@/public/languageNames.json';
import styles from '@/styles/LanguagePicker.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import softSkill from '@/public/softSkill.json';
import technicalSkill from '@/public/technicalSkill.json';

import {
  Button,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  IconButton,
  FormGroup,
  FormControl,
} from '@mui/material';
const languageArr = Object.entries(language);

const LanguagePicker = ({ label1, label2 }) => {
  const [array, setArray] = useState([{ language: '', rating: 0 }]);

  const buttonHandler = () => {
    setArray([...array, { language: '', rating: 0 }]);
  };

  const buttonRemover = (count) => {
    const newArr = [...array];
    newArr.splice(count, 1);
    setArray(newArr);
  };

  const handleInput = (event, index) => {
    console.log('🔥', event.target.value);
  };

  let skill;
  label1 === 'Soft-Skills' ? (skill = softSkill) : (skill = technicalSkill);

  return (
    <div>
      <Button onClick={buttonHandler}>Add {label1}</Button>
      {array.map((item, count) => (
        <div key={count} className={styles.languageContainer}>
          <div className={styles.language}>
            <FormControl fullWidth>
              <InputLabel id="language-select">{label1}</InputLabel>
              <Select
                labelId="language-select"
                id="language-select"
                label="Select Language"
                style={{ background: '#E2F2FF' }}
              >
                {label1 == 'Language'
                  ? languageArr.map((value, count1) => (
                      <MenuItem value={value[1].name} key={count1}>
                        {value[1].name}
                      </MenuItem>
                    ))
                  : skill.map((value, count1) => (
                      <MenuItem value={value} key={count1}>
                        {value}
                      </MenuItem>
                    ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <InputLabel id="rating-select">{label2}</InputLabel>
            <Rating
              name="simple-controlled"
              size="large"
              labelId="rating-select"
              onChange={(e) => {
                console.log('❤️', e.target.value);
              }}
            />
          </div>

          <IconButton
            className={styles.delete}
            size="large"
            color="primary"
            onClick={() => buttonRemover(count)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default LanguagePicker;
