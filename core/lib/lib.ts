import { TheWall, TheWall__factory } from "../typechain";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

// this remains constant if deployed on a fresh hardhat network
// (but will change if redeployed without restarting the network)
const localHardhatAddress = "0x6988bbdcb343501e17e71d3c5fc86e1333fb560d";

export class TheWallLib {
  //
  ready: Promise<void>;

  //
  address: string;

  //
  public smartContract: TheWall;

  constructor(providerParam?: ethers.providers.Web3Provider) {
    this.ready = new Promise<void>(async (resolve, reject) => {
      let provider: ethers.providers.Web3Provider = providerParam as any;

      try {
        if (!providerParam) {
          provider = new ethers.providers.Web3Provider((await detectEthereumProvider()) as any);
          await (provider.provider as any).enable();
        }

        this.smartContract = TheWall__factory.connect(
          localHardhatAddress,
          provider.getSigner(),
        ) as TheWall;

        this.address = await provider.getSigner().getAddress();

        return resolve();
      } catch (error) {
        return reject(error);
      }
    });
  }

  build = async (address: string, message: string): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
      try {
        const transaction = await this.smartContract.build(address, message);
        await transaction.wait(1);
        resolve(true);
      } catch (e) {
        resolve(false);
      }
    });
  };
}
