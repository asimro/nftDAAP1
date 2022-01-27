const Web3 = require('web3');
const rpcURL = "HTTP://127.0.0.1:7545";

const web3 = new Web3(rpcURL);

const account = '0xc529541A947154e7E59EA9F35B7A245B45ca439c';
const account1 = '0x087E84844100AdF8eca131c140FCBF06eBe1404f';

const abi = require("./abi.js");
const contractAddress = "0x9eC92b32b60BCEE333D51492C6A8B46Ea4F9dCd5";


const contractRead = async () => {
    try {
        const contract = new web3.eth.Contract(abi, contractAddress);

        const tS = await contract.methods.totalSupply().call();
        console.log("Total Supply", tS);

        const bO = await contract.methods.balanceOf(account).call();
        console.log("Balance of", bO);

        const lTID = await contract.methods.lastTokenID().call();
        console.log("Last Token ID", lTID);

        const cBal = await contract.methods.contractBalance().call();
        const cB = await web3.utils.fromWei(cBal, 'ether');
        console.log("Contract Balance", `${cB} eth`);

        const mS = await contract.methods._maxSupply().call();
        console.log("Maximum Supply", mS);

        const gNFTPrice = await contract.methods.getNFTPrice().call();
        const gNFTP = await web3.utils.fromWei(gNFTPrice, 'ether');
        console.log("NFT Price", `${gNFTP} eth`);

        const tURI = await contract.methods.tokenURI("5").call();
        console.log("Token URI", tURI);


    }

    catch (error) {
        console.log('error in contracRead', error);
    }
}

contractRead();




