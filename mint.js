require("dotenv").config();
const { ethers, JsonRpcProvider } = require("ethers");

// Load environment variables
const provider = new JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractAddress = "0x971e727e956690b9957be6d51Ec16E73AcAC83A7";
const abi = [{"inputs":[{"internalType":"address","name":"_logic","type":"address"},{"internalType":"address","name":"admin_","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"stateMutability":"payable","type":"receive"}];

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
mintNFT("ipfs://QmSo1jWD84wnX7Aa4pTgtBsFjc7uBsFfeyn4JeT4wHetdb");
