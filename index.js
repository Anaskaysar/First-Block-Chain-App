const sha256 = require("crypto-js/sha256");

class Block {
  constructor(timestamp, data, prevHash) {
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return sha256(this.timestamp + JSON.stringify(this.data) + this.prevHash).toString();
  }
}

const block = new Block("2022-01-01", { amount: 5 }, "ABCD");

console.log(block);
