class ProductsService {
  constructor(strategy) {
    this.strategy = strategy;
  }

  async getAll() {
    return await this.strategy.getData();
  }

  async create(payload) {
    const products = await this.getAll();
    const product = {
      ...payload,
      imageUrl: this._getImageUrl(payload),
      id: Date.now(),
    };

    await this.strategy.saveData(JSON.stringify([...products, product]));
    return product;
  }

  async update(id, payload) {
    const products = await this.getAll();
    const idx = products.findIndex((product) => String(product.id) === id);
    let product = { ...payload };

    if (idx > -1) {
      Object.assign(product, {
        imageUrl: this._getImageUrl(payload),
        id: products[idx].id,
      });
      products[idx] = product;
    }

    await this.strategy.saveData(JSON.stringify(products));
    return product;
  }

  async delete(id) {
    const products = (await this.getAll()).filter((product) => String(product.id) !== id);
    await this.strategy.saveData(JSON.stringify(products));
  }

  _getImageUrl(product) {
    const { imageUrl } = product;

    if (imageUrl && imageUrl.match(/(https?:\/\/[^\s]+)/g)) {
      return imageUrl;
    }

    return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
  }
}

module.exports = { ProductsService };
