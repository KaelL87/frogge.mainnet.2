// 42 - Testnet
// 4 - Rinkeby
// 1 - Mainnet

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

export const contractAddresses = {
  erc20: {
    17777: '0xf8c36fcDaf58B077d102400B88d1b7B1917e0987',

  },
  erc20v2: {
    17777: '0xf8c36fcDaf58B077d102400B88d1b7B1917e0987',

  },
  farm: {
    17777: '0x4541c5502e6D1b66edF515950A2c6a96331e575E',

  },
  weth: {
    17777: '0xc00592aA41D32D137dC480d9f6d0Df19b860104F',

  },
}

export const supportedPools = [
  {
    id: 'Swap',
    version: '1693% APR',
    name: 'Frogge farming',
    pid: 0,
    lpAddresses: {
      17777: '0xA977EFDB6dd8818274215ca172772D3297c253c0',
    },
    tokenAddresses: { ...contractAddresses.erc20 },
    symbol: 'Frogge LP',
    tokenSymbol: 'FRGE / EOS lp',
    icon: '',
    pool: '100%',
  },
  
]
