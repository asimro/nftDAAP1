const Web3 = require('web3');
const rpcURL = "HTTP://127.0.0.1:7545";
const web3 = new Web3(rpcURL);

const Trx = require('@ethereumjs/tx');
const Tx = Trx.Transaction;

const account = '0xF70f2CDD3A8981E3A461B83201449a1b7BCaB52C';
const account1 = '0x087E84844100AdF8eca131c140FCBF06eBe1404f';

const private_key = "52e97bb445fe22cf109a10c61e61c0d72bc395096bee97dd812e6788342f3be2";
const Private_KeyS = Buffer.from(private_key, 'hex');

let abi = require("./nftabi.js");
const contractAddress = "0x9eC92b32b60BCEE333D51492C6A8B46Ea4F9dCd5";
const contract = new web3.eth.Contract(abi, contractAddress);


const contractWrite = async () => {
    try {

        // calling contract as transaction
        let txCount = await web3.eth.getTransactionCount(account);
        const txObject = {
            nonce: web3.utils.toHex(txCount),
            to: contractAddress,
            value: web3.utils.toHex(web3.utils.toWei("0.01", 'ether')),
            data: contract.methods.buyNFTs(account, "1").encodeABI(),
            gasLimit: web3.utils.toHex(6000000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
        }

        // signing transaction with private key
        const tx = new Tx(txObject);            //, { chain: '5777', hardfork: 'muirGlacier' });
        const signedTrax = tx.sign(Private_KeyS);

        const serializedTx = signedTrax.serialize();
        const raw = '0x' + serializedTx.toString('hex');

        // sending transaction on blockchain
        const singedTransaction = await web3.eth.sendSignedTransaction(raw);
        console.log("singedTransaction", singedTransaction);



        // calling contract as read only
        const tS = await contract.methods.totalSupply().call();
        console.log("Total Supply", tS);

        const bO = await contract.methods.balanceOf(account).call();
        console.log("Balance of", bO);

        const lTID = await contract.methods.lastTokenID().call();
        console.log("Last Token ID", lTID);

        const cBal = await contract.methods.contractBalance().call();
        const cB = await web3.utils.fromWei(cBal, 'ether');
        console.log("Contract Balance", `${cB} eth`);

        const tURI = await contract.methods.tokenURI(lTID).call();
        console.log("Token URI", tURI);
    }

    catch (error) {
        console.log('error in contracWrite', error);
    }
}
contractWrite();
