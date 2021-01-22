import { task, HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-typechain";

import env from "./config";

const config: HardhatUserConfig = {
  paths: {
    sources: "./contracts",
    tests: "./test",
    artifacts: "./artifacts",
  },
  solidity: {
    version: "0.7.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  //
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: [
        {
          privateKey: env.dev_secret,
          balance: "10000000000000000000000",
        },
      ],
    },
  },
};

export default config;
