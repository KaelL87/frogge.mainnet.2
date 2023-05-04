/*
1 Mainnet
3 Ropsten
4 Rinkeby
5 Goerli
42 Kovan
56 Binance Smart Chain Mainnet
97 Binance Smart Chain Testnet
100 xDai
137 Matic
1287 Moonbase Testnet
80001 Matic Testnet
43113 Avalanche Testnet
43114 Avalanche Mainnet
*/

export const getEthChainInfo = () => {
    let chainId: number = 97;
    let rpcUrl: string = 'https://api.evm.eosnetwork.com';
    let ethscanType: string = 'testnet.';
    // const href = window.location.href;
    /* if (/\/\/farm.frogge.finance/.test(href)) {
         chainId = 17777;
         rpcUrl = 'https://api.evm.eosnetwork.com';
         ethscanType = '';
    } */
    
    chainId = 17777;
    rpcUrl = 'https://api.evm.eosnetwork.com';
    ethscanType = '';
    return {
        chainId,
        rpcUrl,
        ethscanType
    }
};
