import React, { useState } from 'react';

function Test() {
  const [inputFields, setInputFields] = useState([{ value: '' }]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ value: '' });
    setInputFields(values);
  };

  const handleDeleteFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  return (
    <div>
      {inputFields.map((inputField, index) => (
        <div key={index}>
          <input
            type="text"
            value={inputField.value}
            onChange={(event) => handleInputChange(index, event)}
          />
          <button onClick={() => handleDeleteFields(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddFields}>Add Input Field</button>
    </div>
  );
}

export default Test;
