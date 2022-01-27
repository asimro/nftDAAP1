import '../App.css';
import React, { useContext } from 'react'
import { UserContext } from '../context/contextAPI';

export const TokenHistory = () => {

    const [{ name,
        symbol,
        totalSupply,
        maxSupply,
        buyRate,
        fundRais
    }] = useContext(UserContext);

    // salesStartTime,
    // salesEndTime,
    // const startDate = new Date(salesStartTime * 1000);
    // const StartDate = startDate.toLocaleString("en-UK");
    // const endDate = new Date(salesEndTime * 1000);
    // const EndDate = endDate.toLocaleString("en-UK");

    return (
        <div >
            <div>
                <h1>NFT Sales Updates</h1>
            </div>

            <div className="token_container">
                <div>
                    <h4>
                        Token Name :
                    </h4>
                    <h4>
                        Token Symbol :
                    </h4>
                    <h4>
                        Current Supply :
                    </h4>
                    <h4>
                        Max Supply :
                    </h4>
                    <h4>
                        NFT Price :
                    </h4>
                    {/* <h4>
                        Sales Start :
                    </h4>
                    <h4>
                        Sales End :
                    </h4> */}
                    <h4>
                        Funds Raised :
                    </h4>
                    <h4>
                        Token Holder's List :
                    </h4>
                </div>

                <div>
                    <h4>
                        {name}
                    </h4>
                    <h4>
                        {symbol}
                    </h4>
                    <h4>
                        {totalSupply}
                    </h4>
                    <h4>
                        {maxSupply}
                    </h4>
                    <h4>
                        {buyRate + " "} per Ether
                    </h4>
                    {/* <h4>
                        {salesStartTime > 0 ? StartDate : ""}
                    </h4>
                    <h4>
                        {salesEndTime > 0 ? EndDate : ""}
                    </h4> */}
                    <h4>
                        {fundRais}
                    </h4>
                    <h4>
                        <a href="https://rinkeby.etherscan.io/token/0x9c31712dd1ee90bd72b38821603b7cc393314d01#balances"
                            target="_blank"
                            title="Click here to review the NFT Holder List">
                            <h4>
                                click here
                            </h4>
                        </a>
                    </h4>
                </div>

            </div>

        </div>
    )
}
