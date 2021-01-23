import { task, HardhatUserConfig } from "hardhat/config";
import Web3 from "web3";
import env from "./config";

import { TheWallLib } from "./lib/lib";

import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-typechain";
import "@nomiclabs/hardhat-web3";
import "hardhat/config";
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(
  new Web3.providers.HttpProvider("http://localhost:8545") as any,
);

task("populate", "Populate contracts", async (args, hre) => {
  const lib = new TheWallLib(provider);
  try {
    await lib.ready;
    await lib.smartContract.build("0xd8b0e9a3630eea400cdebc15b9380ad20a03f95b", "Hello its me");
  } catch (e) {
    console.log(e);
  }
});

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
