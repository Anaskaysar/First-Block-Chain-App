const sha256 = require("crypto-js/sha256");

class Block {
  constructor(timestamp, data, prevHash = "") {
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("Mining Done : " + this.hash);
  }

  calculateHash() {
    return sha256(
      this.timestamp + JSON.stringify(this.data) + this.prevHash + this.nonce
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.generateGenesisBlock()];
    this.difficulty = 2;  //Block chain difficulty can be increased 3,4,5,6..........
  }

  generateGenesisBlock() {
    return new Block("2022-01-01", "GENESIS", "0000"); //Genesis block
  }
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.prevHash = this.getLatestBlock().hash;
    // newBlock.hash = newBlock.calculateHash(); //confusion
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isBlockChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      //because i=0 mean genesis block which do not have any prev block
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      if (currentBlock.prevHash !== previousBlock.hash) {
        return false;
      }
      return true;
    }
  }
}

const joshCoin = new Blockchain();

const block1 = new Block("2022-01-01", { amount: 5 });
const block2 = new Block("2022-01-01", { amount: 5 });

joshCoin.addBlock(block1);
joshCoin.addBlock(block2);


console.log(joshCoin);
