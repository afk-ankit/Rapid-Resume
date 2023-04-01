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
  FormControl,
} from '@mui/material';
const languageArr = Object.entries(language);

const LanguagePicker = ({ label1, label2 }) => {
  const [inputFields, setInputFields] = useState([
    { value: 'Dutch', rating: 0 },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ value: '' });
    setInputFields(values);
  };

  const handleDeleteFields = (index) => {
    const values = [...inputFields];
    if (inputFields.length >= 2) {
      values.splice(index, 1);
    }
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    console.log('sexy', event.target.value);
    setInputFields(values);
  };

  const handleRatingChange = (index, event) => {
    const values = [...inputFields];
    values[index].rating = Number(event.target.value);
    setInputFields(values);
  };

  let skill;
  label1 === 'Soft-Skills' ? (skill = softSkill) : (skill = technicalSkill);

  return (
    <div>
      <Button
        onClick={handleAddFields}
        variant="contained"
        fullWidth
        style={{ marginBottom: '1rem' }}
      >
        Add {label1}
      </Button>
      {inputFields.map((inputField, index) => (
        <div key={index} className={styles.languageContainer}>
          <div className={styles.language}>
            <FormControl fullWidth>
              <InputLabel id="language-select">{label1}</InputLabel>
              <Select
                labelId="language-select"
                id="language-select"
                label="Select Language"
                value={inputField.value}
                onChange={(event) => handleInputChange(index, event)}
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
              value={inputField.rating}
              onChange={(event) => handleRatingChange(index, event)}
            />
          </div>

          <IconButton
            className={styles.delete}
            size="large"
            color="primary"
            onClick={() => handleDeleteFields(index)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default LanguagePicker;
