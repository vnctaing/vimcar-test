import * as actions from '../actions/action.js';

const listOfItems = [
  {
    id: 1,
    name: '42 mm Space Gray Aluminium Case with Black Woven Nylon',
    price: 249.99,
    imgPath: 'h38ss-dtbl-sel-201603.png'
  },
  {
    id: 2,
    name: '42 mm Space Gray Aluminium Case with Black Woven Nylon',
    price: 249.99,
    imgPath: 'h38ss-dtbl-sel-201603.png'
  },
  {
    id: 3,
    name: '42 mm Space Gray Aluminium Case with Black Woven Nylon',
    price: 249.99,
    imgPath: 'h38ss-dtbl-sel-201603.png'
  },
  {
    id: 4,
    name: '42 mm Space Gray Aluminium Case with Black Woven Nylon',
    price: 249.99,
    imgPath: 'h38ss-dtbl-sel-201603.png'
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
