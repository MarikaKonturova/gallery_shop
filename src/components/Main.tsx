import React, { ChangeEvent } from "react";

import search from "../assets/icons/search.svg";
import sold from "../assets/icons/sold.svg";
import { useRootStore } from "../stores/RootStateContext";
import { TPainting } from "../types";
import { observer } from "mobx-react-lite";
import plug from '../assets/img/plug.jpg'
export const Main = observer(() => {
  const { paintingsStore } = useRootStore();
  const { transformPaints } = paintingsStore;

  React.useEffect(() => {
    paintingsStore.fetchPaintings();
  }, [paintingsStore]);

  return (
    <section className="main">
      <Filter />
      <PaintingsList paintings={transformPaints()} />
    </section>
  );
});

const Filter: React.FC = observer(() => {
  const { filterStore } = useRootStore();
  const { all, auction, setAll, setAuction, setSearchQuery } = filterStore;
  const onCHangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <section className="filter">
      <div className="filter_group">
        <button
          className={`filter_button button ${all && `active`}`}
          onClick={() => {
            setAll();
            setAuction();
          }}
        >
          Все
        </button>
        <button
          className={`filter_button button ${auction ? `active` : ``}`}
          onClick={() => {
            setAuction();
            setAll();
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
          onChange={onCHangeHandler}
        />
        <button className="input_button" onClick={()=>{}}>
          Найти <img src={search} alt="" />{" "}
        </button>
      </div>
    </section>
  );
});

interface IPaintingsList {
  paintings: TPainting[];
}
export const PaintingsList: React.FC<IPaintingsList> = observer(
  ({ paintings }: IPaintingsList) => {
    return (
      <div className="gallery">
        {paintings.map((paint: TPainting, i) => (
          <Paint paint={paint} i={i} key={paint.id} />
        ))}
      </div>
    );
  }
);

interface IPaint {
  paint: TPainting;
  i: number;
}
export const Paint: React.FC<IPaint> = ({ paint, i }: IPaint) => {
  const { paintingsStore, cartStore } = useRootStore();
  const { updatePainting } = paintingsStore;
  const { addToCart } = cartStore;
  const onClickHandler = (paint: TPainting) => {
    updatePainting(paint);
    addToCart(paint);
  };
  return (
    <div
      className={`painting_group ${i === 12 ? `display_none` : ``}`}
      key={paint.id}
    >
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
              <p className="painting_purchase_price_old">{paint.price} $</p>
              <p className="painting_purchase_price_new">{paint.price} $</p>
            </div>
            <button className=" button " onClick={() => onClickHandler(paint)}>
              купить
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
