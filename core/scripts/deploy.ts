import { run, ethers } from "hardhat";

async function main() {
  await run("compile");

  const TheWall = await ethers.getContractFactory("TheWall");
  const thewall = await TheWall.deploy();

  await thewall.deployed();

  console.log("Relay deployed at:", thewall.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
