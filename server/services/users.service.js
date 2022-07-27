const fetch = require('node-fetch');

class UsersService {
  constructor() {
    this.apiUrl = 'https://randomuser.me/api';
  }

  getUsers(request, response) {
    fetch(`${this.apiUrl}?results=150`)
      .then(res => res.json())
      .then(data => response.send(data));
  }
}

module.exports = { UsersService };
