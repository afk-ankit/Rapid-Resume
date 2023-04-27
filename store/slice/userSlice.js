import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  phoneNumber: '',
  language: [{ name: '', rating: 0 }],
  softSkill: [
    {
      name: '',
      rating: 0,
    },
  ],
  technicalSkill: [
    {
      name: '',
      rating: 0,
    },
  ],
  about: '',
  education: [
    {
      name: '',
      field: '',
      startDate: null,
      endDate: null,
      pStartDate: null,
      pEndDate: null,
      currWorking: false,
      proud: ['', '', ''],
    },
  ],
  job: [
    {
      name: '',
      field: '',
      startDate: null,
      endDate: null,
      pStartDate: null,
      pEndDate: null,
      currWorking: false,
      proud: ['', '', ''],
    },
  ],
  hobby: [''],
  url: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    populate: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { populate } = userSlice.actions;

export default userSlice.reducer;
