import React, { useEffect, useState } from 'react';
import { GatewayQuoteParams, GatewaySDK } from "@gobob/bob-sdk";

const gatewaySDK = new GatewaySDK("bob");

function DropdownMenu() {
    const [outputTokens, setOutputTokens] = useState([]);

    useEffect(() => {
        const fetchTokens = async () => {
            const tokens = await gatewaySDK.getTokens();
            setOutputTokens(tokens);
        };

        fetchTokens();
    }, []);

    return (
        <select>
            {outputTokens.map(token => (
                <option key={token.id} value={token.value}>
                    {token.label}
                </option>
            ))}
        </select>
    );
}

export default DropdownMenu;
