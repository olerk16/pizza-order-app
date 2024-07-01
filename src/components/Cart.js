import { html } from 'lit-html';
import { state, removeFromCart } from '../state/state.js';

const submitOrder = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/order', {
      items: state.cart
    });
    console.log(response.data.message);
    state.cart = []; // Clear the cart after order
    renderApp(); 
  } catch (error) {
    console.error('Error submitting order:', error);
  }
};

export const Cart = () => html`
<button @click=${submitOrder}>Submit Order</button>
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
