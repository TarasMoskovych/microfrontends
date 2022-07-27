const express = require('express');
const { FsStrategy } = require('./strategies/fs.strategy');
const { JsonStorageStrategy } = require('./strategies/jsonstorage.strategy');
const { ProductsService } = require('./services/products.service');
const { WeatherService } = require('./services/weather.service');
const { UsersService } = require('./services/users.service');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const productsService = new ProductsService(process.env.PRODUCTION ? new JsonStorageStrategy(process.env.DATABASE_URL) : new FsStrategy('./data/products.json'));
const weatherService = new WeatherService();
const usersService = new UsersService();

app.use(express.json({ extended: false }));
app.use(cors({
  origin: process.env.PRODUCTION ? process.env.ORIGINS.split(' ') : '*',
}));

app.get('/api/echo', (req, res) => {
  res.send({ message: 'Hello, world!' })
});

app.post('/api/weather', weatherService.getWeather.bind(weatherService));

app.get('/api/users', usersService.getUsers.bind(usersService));

app.get('/api/products', async(req, res) => {
  res.send(await productsService.getAll());
});

app.post('/api/product', async(req, res) => {
  res.send(await productsService.create(req.body));
});

app.put('/api/product/:id', async(req, res) => {
  res.send(await productsService.update(req.params.id, req.body));
});

app.delete('/api/product/:id', async(req, res) => {
  await productsService.delete(req.params.id);
  res.status(200).send();
});

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app;
