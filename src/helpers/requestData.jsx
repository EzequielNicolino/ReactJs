import { stock } from "../data/stock";

export const requestData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 1500);
  });
};
