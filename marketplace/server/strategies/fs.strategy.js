const fs = require('fs');

export class FsStrategy {
  constructor(path) {
    this.path = path;
  }

  async getData() {
    return JSON.parse(fs.readFileSync(this.path));
  }

  async saveData(data) {
    fs.writeFileSync(this.path, data);
  }
}
