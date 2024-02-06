import React from 'react';
import { useForm } from 'react-hook-form';
import MyInput from './MyInput';
import MyButton from './MyButton';

const FormHook = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <form className='my-input' onSubmit={handleSubmit(onSubmit)}>
      <MyInput
        register={register}
        error={errors}
        errorMessage='Пожалуйста, введите ваше логин'
        type='text'
        placeholder={'Введите логин'}
        value={'username'} />
      <MyInput
        register={register}
        error={errors}
        errorMessage='Пожалуйста, подтвердите ваше пароль'
        type='password'
        placeholder={'Подтвердите Пароль'}
        value={'password'} />
      <MyButton color={'#8F00FF'} title={'Зарегистроватся'} >Register</MyButton>
    </form>
  );
};

export default FormHook;

