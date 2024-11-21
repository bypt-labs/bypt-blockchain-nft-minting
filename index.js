require("dotenv").config();
const { ethers } = require("ethers");

// Load environment variables
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractAddress = "YOUR_CONTRACT_ADDRESS";
const abi = [
  // Contract ABI
  "function createNFT(string memory tokenURI) public returns (uint256)",
];

const contract = new ethers.Contract(contractAddress, abi, wallet);

async function mintNFT(tokenURI) {
  try {
    const tx = await contract.createNFT(tokenURI);
    console.log("Transaction hash:", tx.hash);

    const receipt = await tx.wait();
    console.log("NFT Minted! Receipt:", receipt);
  } catch (error) {
    console.error("Error minting NFT:", error);
  }
}

// Replace with your metadata URI
mintNFT("ipfs://your_metadata_uri");
