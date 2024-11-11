import React, { useEffect, useState } from 'react';
import { GatewaySDK } from "@gobob/bob-sdk";

const gatewaySDK = new GatewaySDK("bob");

function DropdownMenu({ setSelectedToken }) {
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
        <select onChange={(e) => setSelectedToken(e.target.value)}>
            <option value="">Select a token</option>
            {outputTokens.map(token => (
                <option key={token.symbol} value={token.value}>
                    {token.symbol} 
                </option>
            ))}
        </select>
    );
}

export default DropdownMenu;
