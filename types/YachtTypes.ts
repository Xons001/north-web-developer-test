export interface Yacht {
  id: string;
  name: string;
  buyPrice: {
    EUR: number;
    USD: number;
    GBP: number;
  };
  length: {
    meters: number;
    feet: number;
  };
  cabinsNumber: number;
  guestsNumber: number;
  coverImage: {
    url: string;
  };
}
