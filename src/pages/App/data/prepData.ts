import { initProductsData, manufacturerData } from './initData';

export const prepData = () => {
  localStorage.setItem('productsData', JSON.stringify(initProductsData));
  localStorage.setItem('manufacturersData', JSON.stringify(manufacturerData));
};
