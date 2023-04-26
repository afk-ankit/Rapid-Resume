import { Field, FieldArray, Form, Formik } from 'formik';
import Test2 from './Test2';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { populate } from '@/store/slice/userSlice';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { PanZoom } from 'react-easy-panzoom';
const Test = () => {
  const [value, setValue] = useState({
    date: moment(),
  });

  console.log(value);
  return (
    <div
      style={{
        width: '500px',
        height: '500px',
        outline: '1px solid red',
        overflow: 'scroll',
      }}
    >
      <PanZoom preventPan={() => true}>
        <img src="dp.png" />
      </PanZoom>
    </div>
  );
};

export default Test;
