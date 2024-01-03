export interface ICoins {
  id: string;
  name: string;
}[]

export const coins: ICoins[] = [
  { id: "USD", name: "American Currency" },
  { id: "MXN", name: "Mexican Currency" },
  { id: "EUR", name: "European Currency"},
  { id: "GBP", name: "England Currency"}
];