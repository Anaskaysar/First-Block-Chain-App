const sha256 = require("crypto-js/sha256");

class Block {
  constructor(timestamp, data, prevHash = "") {
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return sha256(
      this.timestamp + JSON.stringify(this.data) + this.prevHash
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.generateGenesisBlock()];
  }

  generateGenesisBlock() {
    return new Block("2022-01-01", "GENESIS", "0000"); //Genesis block
  }
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.prevHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash(); //confusion
    this.chain.push(newBlock);
  }
}

const joshCoin = new Blockchain();

const block = new Block("2022-01-01", { amount: 5 });

// console.log(block);

joshCoin.addBlock(block);

console.log(joshCoin);
