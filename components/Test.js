import { Field, FieldArray, Form, Formik } from 'formik';
import Test2 from './Test2';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { populate } from '@/store/slice/userSlice';
import moment from 'moment';

const Test = () => {
  const [value, setValue] = useState({
    date: null,
  });
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Choose Starting Date"
        value={value.date}
        onChange={(e) => setValue({ date: e })}
        views={['year', 'month']}
      />
    </LocalizationProvider>
  );
};

export default Test;
