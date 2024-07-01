import { html } from 'lit-html';
import axios from 'axios';
import { addToCart } from '../state/state.js';
import { state } from '../state/state.js';
import { renderApp } from '../index.js';

const fetchPizzaImages = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/pizzas');
    state.pizzas = response.data;
    renderApp();
  } catch (error) {
    console.error('Error fetching pizza images:', error);
  }
};

export const Menu = () => {
  if (!state.pizzas.length) fetchPizzaImages();

  return html`
    <section id="menu">
      <h2>Menu</h2>
      <div id="pizza-list">
        ${state.pizzas.map(
          (pizza) => html`
            <div class="pizza-item">
              <img src="${pizza.image}" alt="${pizza.name}" width="100">
              <h3>${pizza.name}</h3>
              <p>$${pizza.price}</p>
              <button @click=${() => addToCart(pizza)}>Add to Cart</button>
            </div>
          `
        )}
      </div>
    </section>
  `;
};
