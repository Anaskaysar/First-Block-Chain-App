# First-Block-Chain-App

Here I am using JAVA script for developing my first BlockChain App.

# Creating First Block

Creating first block is the first step towards my blockchain deveopment. A block has mainly three different things. The data it contains, a hash and previous hash. 

When at the very begining a block is manually created and doesn't have any hash is called Genesis Block. It's has is represented with 0...

In our first block we used a node library for generating hash. It is named "crypto-js". we have used sha256 though there are many available for this task.

# Adding Blocks To The Chain

We have created certain functions to make this happened. Rather than putting block manually we only made one block manually and that is only the genesis block. The rest of the blocks will be generated automatically.

# Validation 

In this part we will try to find out if a block chain is valid or invalid. Thorugh a simple function.  In this isBlockchainvalid function we will compare all the block's hash and previous hash to check whether any data is tempered or not. 

If the data is tempered it will return false or else it will return true.