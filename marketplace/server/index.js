const express = require('express');
const { FsStrategy } = require('./strategies/fs.strategy');
const { JsonStorageStrategy } = require('./strategies/jsonstorage.strategy');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
let productsService = new JsonStorageStrategy(process.env.DATABASE_URL);

// if (process.env.PRODUCTION) {
//   productsService = JsonStorageStrategy(process.env.DATABASE_URL);
// } else {
//   productsService = new FsStrategy('./data/products.json');
// }

app.use(express.json({ extended: false }));
app.use(cors());

app.get('/api/echo', (req, res) => {
  res.send({ message: 'Hello, world!' })
});

app.get('/api/products', async(req, res) => {
  res.send(await productsService.getData());
});

app.post('/api/product', async(req, res) => {
  const products = await productsService.getData();
  const newProduct = {
    id: Date.now(),
    ...req.body,
  };

  await productsService.saveData(JSON.stringify([...products, newProduct]));
  res.send(newProduct);
});

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app;
