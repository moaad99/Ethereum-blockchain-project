require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/OXiN59g6xf1zh30v7yt8IOdZt2Zjx6hR",
      accounts: [
        "ca190efea0bb87ba7c6857547a660df59993900da47111f773c0168e0c0c56f9",
      ],
    },
  },
};
