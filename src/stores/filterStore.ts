import { makeAutoObservable } from "mobx";
class FilterStore {
  public searchQuery: string = "";
  public auction: boolean = false;
  public all: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }
  setAuction = () => {
    this.auction = !this.auction;
  };
  setAll = () => {
    this.all = !this.all;
  };
  setSearchQuery = (value: string ) => {
    this.searchQuery = value

  };
}

export default FilterStore;
