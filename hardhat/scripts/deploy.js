const { ethers } = require("hardhat"); // Importing ethers from Hardhat


async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Contract = await ethers.getContractFactory("MyContract");
  const contract = await Contract.deploy();

  console.log("Contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  