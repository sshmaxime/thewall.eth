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

  public smartContract: TheWall;
  constructor(providerParam?: any) {
    this.ready = new Promise<void>(async (resolve, reject) => {
      let provider: ethers.providers.Web3Provider;

      try {
        if (!providerParam) {
          const web3 = await detectEthereumProvider();
          provider = new ethers.providers.Web3Provider(web3 as any);
          await (provider.provider as any).enable();
        } else {
          provider = new ethers.providers.Web3Provider(
            providerParam as ethers.providers.ExternalProvider,
          );
        }
        this.smartContract = TheWall__factory.connect(
          localHardhatAddress,
          provider.getSigner(),
        ) as TheWall;

        // Fetch metamask address
        this.address = await provider.getSigner().provider.getSigner().getAddress();

        return resolve();
      } catch (error) {
        return reject(error);
      }
    });
  }
}
