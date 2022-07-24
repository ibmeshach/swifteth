// https://eth-goerli.alchemyapi.io/v2/poS5TaaUs73rlTV5hFuO5R7PhQ55JeoD


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/poS5TaaUs73rlTV5hFuO5R7PhQ55JeoD',
      accounts: [ '53e1294dcd441def839dd1828d0ce459d7da8b75e9250622b6a52913ef84e4bd' ]
    }
  }
}