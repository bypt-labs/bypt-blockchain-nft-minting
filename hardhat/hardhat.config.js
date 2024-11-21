require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: {
        count: 10, // Number of accounts
        initialBalance: "1000000000000000000000", // 1000 ETH per account
      },
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/e41559cfe0b94275b5c96f6ad8660299`,
      accounts: [`0x26c8a9462a3086494d20516b3cd1fcdfba99b3d1d2393e85fefcd28f457c59a1`],
    },
  },
};
