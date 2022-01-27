import React, { useContext } from "react";
import '../App.css';
import { UserContext } from "../context/contextAPI";
import { contractAddress } from "../Contracts/address"

export const Header = () => {
    const [{ symbol }] = useContext(UserContext);
    let ContractAddress = contractAddress;

    return (
        <div>
            <h1>
                {symbol} Sale Kick Off
            </h1>
            <div>
                <a href="https://rinkeby.etherscan.io/token/0x9c31712dd1ee90bd72b38821603b7cc393314d01"
                    target="_blank"
                    title="Click here to review the contract">
                    <div className="contract">
                        {ContractAddress}
                    </div>
                </a>
            </div>
        </div>
    )
}