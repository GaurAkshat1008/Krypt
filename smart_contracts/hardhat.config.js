// https://eth-ropsten.alchemyapi.io/v2/SERfag7-EgBHVA7jangq8tyBnto_NMf2

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/SERfag7-EgBHVA7jangq8tyBnto_NMf2",
      accounts: [
        "da1e587085b24e8e89e3d1eca5ab23dd47017f3c16d285bca16b79cbc5d97f51",
      ],
    },
  },
};
