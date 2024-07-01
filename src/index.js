import { html, render } from 'lit-html';
import { Header } from './components/Header.js';
import { Navigation } from './components/Navigation.js';
import { Home } from './components/Home.js';
import { Menu } from './components/Menu.js';
import { Cart } from './components/Cart.js';
import { Footer } from './components/Footer.js';
import { state } from './state/state.js';

const appTemplate = () => html`
  ${Header()}
  ${Navigation()}
  ${state.currentPage === 'home' ? Home() : state.currentPage === 'menu' ? Menu() : Cart()}
  ${Footer()}
`;

export const renderApp = () => {
  render(appTemplate(), document.querySelector("#root"));
};

renderApp();