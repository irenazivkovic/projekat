import { IManufacturer } from '../../../interfaces/IManufacturer';
import { IProduct } from '../../../interfaces/IProduct';

const currentDate = new Date();

export const manufacturerData: IManufacturer[] = [
  {
    id: '332124',
    name: 'Colgate',
  },
  {
    id: '3321',
    name: 'Head&Shoulders',
  },
  {
    id: '433221',
    name: 'Torlak',
  },
];

export const initProductsData: IProduct[] = [
  {
    id: '10',
    name: 'Red Toothbrush',
    manufacturer: manufacturerData[0],
    price: 3,
    expiryDate: new Date(currentDate.getTime() + 86400000),
  },
  {
    id: '9',
    name: 'Blue Toothbrush',
    manufacturer: manufacturerData[0],
    price: 3,
    expiryDate: new Date(currentDate.getTime() + 86400000),
  },
  {
    id: '8',
    name: 'Cheap Toothbrush',
    manufacturer: manufacturerData[0],
    price: 1,
    expiryDate: new Date(currentDate.getTime() + 864020000),
  },
  {
    id: '7',
    name: 'Toothbrush',
    manufacturer: manufacturerData[0],
    price: 2,
    expiryDate: new Date(currentDate.getTime() + 86400000),
  },
  {
    id: '6',
    name: 'Thick Toothbrush',
    manufacturer: manufacturerData[0],
    price: 4,
    expiryDate: new Date(currentDate.getTime() + 86400000),
  },
  {
    id: '5',
    name: 'Toothpaste',
    manufacturer: manufacturerData[0],
    price: 3,
    expiryDate: new Date(currentDate.getTime() + 186400000),
  },
  {
    id: '11',
    name: 'Soothing Toothpaste',
    manufacturer: manufacturerData[0],
    price: 5,
    expiryDate: new Date(currentDate.getTime() + 186400000),
  },
  {
    id: '4',
    name: 'Shampoo',
    manufacturer: manufacturerData[1],
    price: 4,
    expiryDate: new Date(currentDate.getTime() + 8640000023),
  },
  {
    id: '3',
    name: 'Dry Hair Shampoo',
    manufacturer: manufacturerData[1],
    price: 7,
    expiryDate: new Date(currentDate.getTime() + 8640000023),
  },
  {
    id: '2',
    name: 'Soft Hair Shampoo',
    manufacturer: manufacturerData[1],
    price: 9,
    expiryDate: new Date(currentDate.getTime() + 8640000023),
  },
  {
    id: '1',
    name: 'Purified Water',
    manufacturer: manufacturerData[2],
    price: 2,
    expiryDate: new Date(currentDate.getTime() + 8644000023),
  },
];
