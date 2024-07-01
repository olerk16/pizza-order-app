import { html } from 'lit-html';
import { state, removeFromCart } from '../state/state.js';

export const Cart = () => html`
  <section id="cart">
    <h2>Your Cart</h2>
    <div id="cart-items">
      ${state.cart.length > 0
        ? state.cart.map(
            (item) => html`
              <div class="cart-item">
                <p>${item.name} - $${item.price}</p>
                <button @click=${() => removeFromCart(item)}>Remove</button>
              </div>
            `
          )
        : html`<p>Your cart is empty.</p>`}
    </div>
  </section>
`;
