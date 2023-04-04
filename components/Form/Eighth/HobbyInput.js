import { Button, IconButton, TextField } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Field } from 'formik';

const HobbyInput = ({ form, push, remove }) => {
  const { values } = form;
  const { hobby } = values;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {hobby.map((item, index) => {
        return (
          <div key={index} style={{ display: 'flex', gap: '1rem' }}>
            <Field name={`hobby[${index}]`}>
              {({ field, meta }) => {
                return (
                  <TextField
                    label="Hobby"
                    variant="outlined"
                    fullWidth
                    {...field}
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                  />
                );
              }}
            </Field>
            {hobby.length > 1 && (
              <IconButton
                size="large"
                color="primary"
                onClick={() => {
                  remove(index);
                }}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </div>
        );
      })}
      <Button
        variant="contained"
        onClick={() => push('')}
        style={{ alignSelf: 'center' }}
      >
        ADD More Hobby
      </Button>
    </div>
  );
};

export default HobbyInput;
