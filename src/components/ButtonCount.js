import React from 'react';

const ButtonCount = () => {
  const [count, setCount] = React.useState(1)//если не импортировать {useState}

  const handleClick = (number) => {
    setCount(number)
  }
  //---------------------------Меняем чз функцию на Вариант2----------------------------------
  const changeColor = (number) => {
    if (count === number) {
      return 'red'
    } else {
      return ''
    }
  }



  return (
    <div>
      {/*----------------------------------Вариант1---------------------------------------------------*/}
      <button style={{backgroundColor: count===1?'red':''}} onClick={()=>setCount(1)}>1</button>
      <button style={{backgroundColor: count===2?'red':''}} onClick={()=>setCount(2)}>2</button>
      <button style={{backgroundColor: count===3?'red':''}} onClick={()=>setCount(3)}>3</button>
      <button style={{backgroundColor: count===4?'red':''}} onClick={()=>setCount(4)}>4</button>
      <hr />

      {/* ---------------------------------Вариант2----------------------------------------------------- */}
      <button style={{ backgroundColor: changeColor(1) }} onClick={() => handleClick(1)}>1</button>
      <button style={{ backgroundColor: changeColor(2) }} onClick={() => handleClick(2)}>2</button>
      <button style={{ backgroundColor: changeColor(3) }} onClick={() => handleClick(3)}>3</button>
      <button style={{ backgroundColor: changeColor(4) }} onClick={() => handleClick(4)}>4</button>
      <hr />
      
      {/* ----------------------------------Вариант3-------------------------------------------------- */}
      <button style={{ backgroundColor: count === 1 ? 'red' : '' }} onClick={() => handleClick(1)}>1</button>
      <button style={{ backgroundColor: count === 2 ? 'red' : '' }} onClick={() => handleClick(2)}>2</button>
      <button style={{ backgroundColor: count === 3 ? 'red' : '' }} onClick={() => handleClick(3)}>3</button>
      <button style={{ backgroundColor: count === 4 ? 'red' : '' }} onClick={() => handleClick(4)}>4</button>
      
      {/* -------------------------------------------------------------------------------------- */}
      
      <h1>{count}</h1>
    </div>
  );
};

export default ButtonCount;