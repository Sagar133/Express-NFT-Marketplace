require('dotenv').config();

const HDWalletProvider = require("@truffle/hdwallet-provider")
console.log(process.env.METAMASK_WALLET_SECRET);

module.exports = {
  contracts_build_directory: './client/src/contracts',

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    scallop_testnet: {
      url: "http://scallop.rpc.devicoin.org/",
      provider: function() {
        return new HDWalletProvider(process.env.METAMASK_WALLET_SECRET, "http://scallop.rpc.devicoin.org/");
      },
      network_id: 9001
    }
  },

  compilers: {
    solc: {
      version: "^0.8.7",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  }
};
