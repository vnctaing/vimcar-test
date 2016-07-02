import * as actions from '../actions/action.js';

const listOfItems = [
  {
    id: 1,
    name: '42 mm Space Gray Aluminium Case with Black Woven Nylon',
    originalPrice: 249.99,
    imgPath: 'h38ss-dtbl-sel-201603.png',
  },
  {
    id: 2,
    name: '42 mm Space Gray Aluminium Case with Black Woven Nylon',
    originalPrice: 249.99,
    imgPath: 'h38ss-dtbl-sel-201603.png',
  },
  {
    id: 3,
    name: '42 mm Space Gray Aluminium Case with Black Woven Nylon',
    originalPrice: 249.99,
    imgPath: 'h38ss-dtbl-sel-201603.png',
    displayedPrice: 209.99,
    isNew: true,
  },
  {
    id: 4,
    name: '42 mm Space Gray Aluminium Case with Black Woven Nylon',
    originalPrice: 249.99,
    imgPath: 'h38ss-dtbl-sel-201603.png',
    isOnSale: true,
    displayedPrice: 205.99,
  },

];

const initialState = {
  items: listOfItems,
  cart: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
