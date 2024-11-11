import React, { useEffect, useState } from 'react';
import { GatewayQuoteParams, GatewaySDK } from "@gobob/bob-sdk";

const gatewaySDK = new GatewaySDK("bob");

function DropdownMenu() {
    const [outputTokens, setOutputTokens] = useState([]);

    useEffect(() => {
        const fetchTokens = async () => {
            const tokens = await gatewaySDK.getTokens();
            setOutputTokens(tokens);
            console.log("Fetched tokens:", {tokens});
        };

        fetchTokens();
    }, []);

    return (
        <select>
            {outputTokens.map(token => (
                <option key={token.symbol} value={token.value}>
                    {token.symbol} 
                </option>
            ))}
        </select>
    );
}

export default DropdownMenu;
