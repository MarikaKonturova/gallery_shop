import React from "react";
import { TPainting } from "../mockData/mockData";
import search from "../assets/icons/search.svg";
import sold from "../assets/icons/sold.svg";

type TMain = {
  paintings: TPainting[];
};
export const Main = ({ paintings }: TMain) => {
  return (
    <section className="main">
      <Filter />
      <div className="gallery">
        {paintings.map((paint: TPainting, i) => (
          <div className={`painting_group ${i===12? `display_none`: ``}`} key={paint.id}>
            <img src={paint.imgUrl} alt="" />
            <div className="painting_info">
              <div className="painting_desc">
                <p>{paint.name}</p>
                <p>
                  {paint.author}, {paint.year}
                </p>
              </div>
              {paint.sold ? (
                <p className="painting_sold">
                  <img src={sold} alt="" />
                  Продана на аукционе
                </p>
              ) : (
                <div className="painting_purchase">
                  <div className="painting_purchase_price">
                    <p className="painting_purchase_price_old">
                      {paint.price} $
                    </p>
                    <p className="painting_purchase_price_new">
                      {paint.price} $
                    </p>
                  </div>
                  <button className=" button ">купить</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Filter = () => {
  const [all, setAll] = React.useState(false);
  const [auction, setAuction] = React.useState(false);
  return (
    <section className="filter">
      <div className="filter_group">
      <button
        className={`filter_button button ${all && `active`}`}
        onClick={() => {
          setAll(!all);
          setAuction(false);
        }}
      >
        Все
      </button>
      <button
        className={`filter_button button ${auction ? `active` : ``}`}
        onClick={() => {
          setAuction(!auction);
          setAll(false);
        }}
      >
        Проданные на аукционе
      </button>
      </div>
    
      <div className="input_group">
        <input
          type="text"
          className="input_input"
          placeholder="Поиск по названию картины"
        />
        <button className="input_button">
          Найти <img src={search} alt="" />{" "}
        </button>
      </div>
    </section>
  );
};
