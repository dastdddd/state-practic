import React, { useState } from 'react';
let styles = {
  fontFamily: 'Arial',
  color: 'green',
  fontSize: '45px',
  fontWeight: '400',
}
let login = 'Asan';
let password = '1234';

const InputPractik = () => {
  //-----------------------состояние------------------------
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [text1, setText1] = useState('')//Фамилия
  const [text2, setText2] = useState('')//Имя
  const [text3, setText3] = useState('')//login passowrd
  const [index, setIndex] = useState(null)
  //-------------------Берем input value---------------------
  const handleChange1 = (event) => {
    setValue1(event.target.value)
  }
  const handleChange2 = (event) => {
    setValue2(event.target.value)
  }
  const handleChange3 = (event) => {
    setValue3(event.target.value)
  }
  const handleChange4 = (event) => {
    setValue4(event.target.value)
  }
  //------------------button клик событие-------------------------
  const handleClick = () => {
    if (value1, value2) {
      setText1(value1)
      setText2(value2)
      setValue1('')//очистка инпут после клика
      setValue2('')
    } else {
      alert('Pustoi')
    }
  }



  const handleClick2 = () => {
    if (value3 === login && value4 === password) {
      setText3('loading...')
      setTimeout(() => {
        setText3('Welcome')
      }, 3000)//После 3 секунды появится
    } else {
      setIndex(1)
      const interval = setInterval(() => {
          setIndex(prevIndex => {
            if(prevIndex === 3) {
              clearInterval(interval)
              return null
            } else {
              return prevIndex + 1
            }
          });//Счетчик рядос с Error
      }, 1000)
      setText3('Error')
      setTimeout(() => {
        setText3('')
      }, 3000)
      return () => clearInterval(interval)//После return код не работает
    }

  }
  //-----------------Тело-----------------------
  return (
    <div>
      <input
        onChange={handleChange1}
        placeholder='Фамилия'
        value={value1}
        type="text" />
      <input
        onChange={handleChange2}
        placeholder='Имя'
        value={value2}
        type="text" />
      <button onClick={handleClick}>add</button>
      <h1 >Фамилия: <span style={styles}>{text1}</span></h1>
      <h1 >Имя: <span style={styles}>{text2}</span></h1>
      <hr />
      <br />
      <input
        onChange={handleChange3}
        value={value3}
        placeholder='login'
        type="text" />
      <input
        onChange={handleChange4}
        value={value4}
        placeholder='password'
        type="text" />
      <button onClick={handleClick2}>Войти</button>
      <h1>Акаунт: <span style={styles}>{text3} {index}</span></h1>
    </div>
  );
};

export default InputPractik;