import React from 'react';
import s from './Message.module.css'
import { theme } from '../../../utils/theme';

const Message = () => {
  return (
    <div className={s.block}>
      {/* Если не написать класс в CSS то класс не отображается */}
      <div className={s.item}>Message</div>
      <div style={theme.item} className={s.item1}>Общий стиль Message</div>
      <div className={s.item2}>
        <div className={s.item3}>One</div>
        <div className={s.item3}>Two</div>
        <div style={theme.flexCard} className={s.item4}>Tree</div>
        <div style={theme.flexCard} className={s.item4}>Four</div>
      </div>
    </div>
  );
};

export default Message;