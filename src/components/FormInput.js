import React, { useState } from 'react';
const initialState = {
  login: '',
  phone: '',
  email: '',
  date: '',
  gender: 'male'
}
//---------------------------------------------------------
//Submit работает только form тегами
//---------------------------------------------------------
const FormInput = () => {
  const [form, setForm] = useState(initialState);//для обработка Инпут
  const [body, setBody] = useState(initialState);//Второй Стейт для вывод текста на экран

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    //Изменение инпут данные
  }

  const handleClick = () => {
    setBody(form)//вывод на экран чтобы каждая буква не появился

    setForm(initialState)//очистка Инпут как начальный
  }
  return (
    <div>
      <input
        name='login'//Обьязательно и похожий свойства состояния initialState
        onChange={handleChange}
        value={form.login}
        placeholder='login'
        type="text" />
      <input
        name='email'//Обьязательно и похожий свойства состояния initialState
        onChange={handleChange}
        value={form.email}
        placeholder='email'
        type="text" />
      <input
        name='phone'//Обьязательно и похожий свойства состояния initialState
        onChange={handleChange}
        value={form.phone}
        placeholder='phone'
        type="text" />
      <input
        name='date'
        onChange={handleChange}
        value={form.date}
        type="date" />
      <div className='gender'>
        <label htmlFor="">male</label>
        <input
          name='gender'
          value='male'
          type="radio"
          onChange={handleChange} />
      </div>
      <div className='gender'>
        <label htmlFor="">female</label>
        <input
          name='gender'
          value='female'
          type="radio"
          onChange={handleChange} />
      </div>
      <button  onClick={handleClick}>register</button>
      <h1>login: {body.login}</h1>
      <h1>email: {body.email}</h1>
      <h1>phone: {body.phone}</h1>
      <h1>date: {body.date}</h1>
      <h1>gender: {body.gender}</h1>
    </div>
  );
};

export default FormInput;