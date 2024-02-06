import React, {useState} from 'react';

const InputValue = () => {
  const [value, setValue] = useState ('')
  const [text, setText] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const handleClick = () => {
    if (value){
      setText(value)
      setValue('')//очистка инпут после клика
    }else {
      alert('Pustoi')
    }
    
  }
//-----------------------------------------------------------------------------------
  return (
    <div>
      <input 
        //onChange={(event) =>setValue(event.target.value)} - однострочный вариант
        onChange={handleChange}
        value={value}
        type="text" />
      <button onClick={handleClick}>Add</button>
      <h1 style={{fontSize: '50px', color: 'blue'}}>{value}</h1>
      <h1 style={{fontSize: '50px', color: 'red'}}>Тексt:{text}</h1>
      <br />
    </div>
  );
};

export default InputValue;