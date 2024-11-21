# NFT Smart Contract Deployment Using Hardhat

This project outlines the steps to set up, compile, deploy, and mint NFTs using a smart contract with Hardhat.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Smart Contract Setup](#smart-contract-setup)
3. [Compiling the Contract](#compiling-the-contract)
4. [Deploying the Contract](#deploying-the-contract)
5. [Minting NFTs](#minting-nfts)
6. [Important Links](#important-links)

---

## Prerequisites

Before proceeding, ensure you have the following tools and accounts set up:
- Node.js installed on your machine.
- A MetaMask wallet with your private key.
- An account on [Pinata Cloud](https://app.pinata.cloud/).
- An account on [Infura](https://infura.io/) or similar services for an RPC link.

---

## Smart Contract Setup

1. **Locate the Contract**  
   In your Hardhat project directory, navigate to the `contracts` folder and find the file `MyNFT.sol`.

2. **Generate Metadata**  
   Run the following command in the terminal to generate the metadata JSON file:
   ```bash
   node generateMetaData.js

3. **Upload Metadata to Pinata**
   Upload the generated metadata JSON file to Pinata Cloud.
   After a successful upload, you will receive a CID (Content Identifier).

4. **MetaMask Wallet**
   Create or access your wallet in MetaMask.
   Obtain your wallet's private key.

5. **Infura Setup**
   Sign up for an account on Infura.
   Create a project to obtain an RPC link.

**Compiling the Contract**
1. **Open the terminal and navigate to the root folder of your Hardhat project:**
```bash
cd hardhat
```

2. **Run the following command to compile the contract:**
```bash
npx hardhat compile 
```


**Deploying the Contract**

1. **After compiling, deploy the contract to the desired network:**
```bash
npx hardhat run scripts/deploy.js --network mainnet
```
2. **After deployment, note down the contract address for the next steps.**


**Minting NFTs**

1. **Navigate to the root folder of your minting project:**
cd NFT-MINTING

2. **Run the minting script using the following command:**
```bash
npx hardhat run scripts/deploy.js --network mainnet
```

**Important Links**
* [Pinata Cloud](https://app.pinata.cloud/)
* [MetaMask](https://developer.metamask.io/)
* [Mumbai Blockchain Explorer](https://www.oklink.com/mumbai)
* [Hardhat Documentation](https://hardhat.org/hardhat-runner/docs/guides/project-setup)
* [NFT Explorer Example](https://github.com/alchemyplatform/Build-Your-NFT-Explorer)
* [Alchemy Dashboard](https://dashboard.alchemy.com/)

**License**
This project is licensed under the MIT License. See the LICENSE file for details.

