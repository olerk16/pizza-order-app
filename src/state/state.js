import { renderApp } from '../index.js';

export const state = {
  cart: [],
  pizzas: [],
  currentPage: 'home',
};

export const addToCart = (pizza) => {
  state.cart = [...state.cart, pizza];
  renderApp();
};

export const removeFromCart = (item) => {
  state.cart = state.cart.filter((pizza) => pizza !== item);
  renderApp();
};

export const navigate = (page) => {
  state.currentPage = page;
  renderApp();
};
