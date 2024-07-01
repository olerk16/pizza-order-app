import { html } from 'lit-html';
import Pizza from "/server/assets/margherita.jpg";

export const Home = () => html`
  <section id="home">
    <h2>Welcome to our Pizza Place!</h2>
    <p>Order the best pizza in town.</p>
    <img src="${Pizza}" alt="Home Pizza" width="300">
  </section>
`;
