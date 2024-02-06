import React from 'react';
import s from './Profile.module.css'
import { theme } from '../../../utils/theme';

const Profile = () => {
  return (
    <div className={s.block}>
      {/* Если не написать класс в CSS то класс не отображается */}
      <div className={s.item}>Profile</div>
      {/*Message_item__E7+7M - дается рандомный класс  */}
      <div style={theme.item} className={s.item1}>Общий стиль Profile</div>
      <hr />
      <div className={s.item2}>
        <div className={s.item3}>1</div>
        <div className={s.item3}>2</div>
        <div style={theme.flexCard1} className={s.item3}>3</div>
        <div style={theme.flexCard1} className={s.item3}>4</div>
      </div>
    </div>
  );
};

export default Profile;