const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const pizzas = [
  {
    name: "Margherita",
    price: 10,
    image: "/assets/margherita.jpg"
  },
  {
    name: "Goat Cheese",
    price: 12,
    image: "/server/assets/goat-cheese.jpg"
  },
  {
    name: "Meat Lovers",
    price: 11,
    image: "/server/assets/meat-lovers.jpg"
  }
];

app.get('/api/pizzas', (req, res) => {
  res.json(pizzas);
});

app.post('/api/order', (req, res) => {
  const order = req.body;
  // add database logic in futre 
  console.log('Order received:', order);
  res.status(201).json({ message: 'Order submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});