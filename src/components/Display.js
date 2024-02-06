import React, { useState } from 'react';

let styles = {
  color: 'rgb(0, 2, 129)'
}

const Display = () => {
  const [isActive, setIsActive] = useState(false)
  const [text, setText] = useState('Asan')

  const handleClick = () => {
    setIsActive(!isActive)//сокращенный вариант
//-_______setIsActive(isActive => isActive === false ? true : false) 
  }
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <h1>{isActive ? '' : text}</h1>
      <h1 style={{ ...styles, display: isActive ? 'none' : 'block' }}>Style варианты</h1>
      <h1 className={isActive ? 'displayNone' : 'displayBlock'}>className APP.CSS</h1>
    </div>
  );
};

export default Display;