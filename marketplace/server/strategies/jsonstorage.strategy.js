const fetch = require('node-fetch');

class JsonStorageStrategy {
  constructor(dbUrl) {
    this.dbUrl = dbUrl;
  }

  async getData() {
    const request = await fetch(this.dbUrl);
    return await request.json();
  }

  async saveData(data) {
    await fetch(this.dbUrl, {
      method: 'PUT',
      body: data,
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content
       },
    });
  }
}

module.exports = { JsonStorageStrategy };
