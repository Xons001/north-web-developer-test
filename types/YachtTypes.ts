export interface Yacht {
    id: string;
    name: string;
    buyPrice: {
        EUR: number;
        USD: number;
        GBP: number;
    };
    length: string;
    cabins: number;
    guests: number;
}