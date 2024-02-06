import React from 'react';

const MyButton = ({children, onClick = () => {console.log('defult')}}) => {
  return (
    <button onClick={onClick} type='submit'>
      {children}
      {/* children - дается чтобы компонент писать в откр. и закр. теге и есть плюсы в этом методе */}
    </button>
  );
};

export default MyButton;