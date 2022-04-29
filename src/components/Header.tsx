import { observer } from "mobx-react-lite";
import React from "react";
import card from '../assets/icons/card.svg'
import logo from '../assets/img/logo.svg'
import { useRootStore } from './../stores/RootStateContext';

 export const Header:React.FC = observer(() => {
   const {cartStore} = useRootStore()
const {getCount} = cartStore

  return (
    <header className="header">
      <div className="logo_group">
        <img src={logo} alt="" className="logo_icon" />
        <p className="logo_text">
          Прекрасная работа,
          <br /> достойная каждого
        </p>
      </div>
        <div className="card_group">
          <img src={card} alt="card icon" className="card_icon" />
          <p className="card_text">Корзина</p>
          <div className="card_count">{getCount}</div>
        </div>
    </header>
  );
});
