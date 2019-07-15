var request = require('request');

const Web3 = require('web3');
var contractAddress = '0x84b45c17b315d62b4c22cd70b807418da0cc681c';
var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_key",
				"type": "string"
			},
			{
				"name": "_value",
				"type": "string"
			}
		],
		"name": "updateWeather",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_location",
				"type": "string"
			}
		],
		"name": "getWeather",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];


request('https://api.darksky.net/forecast/3df5fdcefd81b5c11af7f14dc59c8b27/37.8267,-122.4233', function (error, response, body) {

	var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	web3.eth.defaultAccount = web3.eth.accounts[0];
	var DataPassContract = web3.eth.contract(abi);
	var contract = DataPassContract.at(contractAddress);
	
	var tempInSF = JSON.parse(body).currently.temperature;
	console.log(tempInSF + " line 79");

	contract.updateWeather("37.8267,-122.4233", tempInSF.toString(), function(err, res) {
	    if (err){
	        console.log(err.toString());
	    }else{
	        console.log('state updated');	
	        contract.getWeather("37.8267,-122.4233", function(err, res) {
			    if (err){
			        console.log(err.toString());
			    }else{
			        console.log(res + " line 90");
			    }
			});
	    }
	});



});





