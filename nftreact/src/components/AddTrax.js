import React, { useState, useContext } from 'react'
import { UserContext } from '../context/contextAPI';
import { AddTransaction } from '../context/web3trax';
import { loadAccountBalance, loadBlockChain } from '../context/web3call';
import '../App.css';


export const AddTrax = () => {
    const [amount, setAmount] = useState();
    const [countNFTs, setcountNFTs] = useState();
    const [description, setDescription] = useState();  //receiver address
    const [{ accounts, contract, symbol, buyRate }, dispatch] = useContext(UserContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const transactions = {
                Description: description,
                Amount: amount,
                CountNFTs: countNFTs
            }
            console.log(transactions);

            await AddTransaction(accounts, contract, transactions, dispatch);
            await loadBlockChain(dispatch);
            await loadAccountBalance(contract, dispatch);
        }
        catch (error) {
            console.log("error onSubmit trax = ", error);
        }
    }

    return (
        <div>
            <div>
                <h1>Buy {symbol} NFT Here  </h1>
            </div>
            <h4> Use &nbsp; Rinkeby &nbsp; Network </h4>

            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Receiver Address
                    </label>
                    <input type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Transaction Details"
                        required="required"
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Ether Amount &emsp; ({buyRate + " "} per Ether)
                    </label>
                    <input type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter Exact amount of Eth (No of NFTs * Price) "
                        required="required"
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="countNFTs">
                        Number of NFTs
                    </label>
                    <input type="number"
                        id="countNFTs"
                        value={countNFTs}
                        onChange={(e) => setcountNFTs(e.target.value)}
                        placeholder="Please enter the Number of NFTs, wish to buy"
                        required="required"
                    />
                </div>
                <button className="btn" >
                    Grab Your NFT
                </button>
            </form>
        </div>
    )
}
