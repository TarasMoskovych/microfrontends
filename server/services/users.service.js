const fetch = require('node-fetch');

class UsersService {
  constructor() {
    this.apiUrl = 'https://randomuser.me/api';
    this.minResults = 50;
    this.maxResults = 200;
  }

  getUsers(request, response) {
    fetch(`${this.apiUrl}?results=${this.getResultsValue()}`)
      .then(res => res.json())
      .then(data => response.send(data));
  }

  getResultsValue() {
    return Math.floor(Math.random() * (this.maxResults - this.minResults + 1) + this.minResults);
  }
}

module.exports = { UsersService };
