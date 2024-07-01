import { html } from 'lit-html';
import { navigate } from '../state/state.js';

export const Navigation = () => html`
  <nav>
    <ul>
      <li><a href="#" @click=${() => navigate('home')}>Home</a></li>
      <li><a href="#" @click=${() => navigate('menu')}>Menu</a></li>
      <li><a href="#" @click=${() => navigate('cart')}>Cart</a></li>
    </ul>
  </nav>
`;