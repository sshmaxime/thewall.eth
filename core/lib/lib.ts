import { TheWall, TheWall__factory } from "../typechain";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

// this remains constant if deployed on a fresh hardhat network
// (but will change if redeployed without restarting the network)
const localHardhatAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export class TheWallLib {
  ready: Promise<void>;

  private smartContract: TheWall;
  constructor(providerParam?: any) {
    this.ready = new Promise<void>(async (resolve, reject) => {
      let provider: any;

      try {
        if (!providerParam) {
          const web3 = await detectEthereumProvider();
          provider = new ethers.providers.Web3Provider(
            web3 as ethers.providers.ExternalProvider,
          );
          await (provider.provider as any).enable();
        } else {
          provider = new ethers.providers.Web3Provider(
            providerParam as ethers.providers.ExternalProvider,
          );
        }
        this.smartContract = TheWall__factory.connect(
          localHardhatAddress,
          provider,
        ) as TheWall;

        console.log(await this.smartContract.hello());

        return resolve();
      } catch (error) {
        return reject(error);
      }
    });
  }
}
