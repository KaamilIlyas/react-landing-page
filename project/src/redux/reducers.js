import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_ITEM, DECREMENT_ITEM } from './actions';

const initialCartState = {
  items: [],
  total: 0
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + 1
      };
    case REMOVE_FROM_CART:
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: filteredItems,
        total: state.total - 1
      };
    case INCREMENT_ITEM:
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item),
        total: state.total + 1
      };
    case DECREMENT_ITEM:
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item),
        total: state.total - 1
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  cart: cartReducer
});
