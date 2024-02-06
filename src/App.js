import React from 'react';
import './App.css'
import Count from './components/Count';
import Display from './components/Display';
import InputValue from './components/InputValue';
import InputPractik from './components/InputPractik';
import ButtonCount from './components/ButtonCount';
import FormInput from './components/FormInput';
import FormSubmit from './components/FormSubmit';
import HookForm from './components/HookForm';
import FormHook from './components/hook-components/FormHook';
import Message from './components/module-css/Message';
import Profile from './components/module-css/Profile';

const App = () => {
  return (
    <div>
      <Count/>
      <Display/>
      <hr />
      <InputValue/>
      <hr />
      <br />
      <InputPractik/>
      <ButtonCount/>
      <hr />
      <FormInput />
      <hr />
      <FormSubmit />
      <hr />
      <br />
      <HookForm />
      <hr />
      <br />
      <FormHook />
      <hr />
      <Message />
      <Profile />
    </div>
  );
};

export default App;