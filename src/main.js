
const {Blockchain, Transaction}= require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('da0aef01471ed9aa120c35e432639804699f063fc2f5fd1bb90fde77ef3b0e3d');
const myWalletAddress = myKey.getPublic('hex');

let RSACoin = new Blockchain();

console.log('\n Starting testing transaction prosses...');

const tx1 = new Transaction(myWalletAddress, 'address2', 1);
tx1.signTransaction(myKey);
RSACoin.addTransactions(tx1);



console.log('\n Starting the mining prosses...');
RSACoin.minePendingTransactions(myWalletAddress);


const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
RSACoin.addTransactions(tx2);

console.log('\nStarting the miner...');
RSACoin.minePendingTransactions(myWalletAddress);

console.log('\nBal of this wallet now: ', RSACoin.GetBalanceOfAddress(myWalletAddress));

