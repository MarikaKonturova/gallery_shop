import axios from "axios";
import { makeAutoObservable } from "mobx";
import { TPainting } from "../types";
import { stores } from "./RootStateContext";

export const DOMAIN = "https://gallery-shop-back.herokuapp.com";

class PaintingsStore {
  public paintings: TPainting[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  transformPaints = () => {
    let transPaints = this.paintings;
    const { auction, searchQuery } = stores.filterStore;
    if (auction) {
      transPaints = transPaints.filter((p: TPainting) => p.sold === true);
    }
    if (searchQuery) {
      transPaints = transPaints.filter((p: TPainting) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return transPaints;
  };

  setPaintings = (paintings: TPainting[]) => {
    return (this.paintings = paintings);
  };
  fetchPaintings = () => {
    axios
      .get<TPainting[]>(`${DOMAIN}/paintings`)
      .then((resp) => {
        const newPaintings = resp.data;
        this.setPaintings(newPaintings);
        stores.cartStore.cartPaintings = newPaintings.filter(
          (p: TPainting) => p.sold === true
        );
      })
      .catch((err) => {
        throw err;
      });
  };
  updatePainting = (painting: TPainting) => {
    axios
      .put(`${DOMAIN}/paintings/${painting.id}`, {
        ...painting,
        sold: !painting.sold,
      })
      .then((resp) => {
        const painting = resp.data;
        stores.paintingsStore.fetchPaintings();
        return painting;
      })
      .catch((err) => {
        throw err;
      });
  };
}

export default PaintingsStore;
