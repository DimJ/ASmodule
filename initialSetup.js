var Web3 = require('web3'); 
var web3 = new Web3();

//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8570"));
//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8565"));  // Ropsten
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));  // Rinkeby

// web3.eth.defaultAccount = web3.eth.accounts[0];
// console.log( " DEFAULT ACCOUNT: "+web3.eth.defaultAccount );

//web3.personal.unlockAccount( web3.eth.accounts[8], "t2phost4m3*");
//web3.personal.unlockAccount( web3.eth.accounts[11], "t11phost4m3*");

