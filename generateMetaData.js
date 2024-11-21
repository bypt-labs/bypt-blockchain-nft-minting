const fs = require("fs");

function generateMetadata(tokenId, name, description, imageUrl, attributes) {
  const metadata = {
    name,
    description,
    image: imageUrl,
    attributes,
  };

  fs.writeFileSync(`metadata/${tokenId}.json`, JSON.stringify(metadata, null, 2));
}

// Example usage
generateMetadata(
  1,
  "My First NFT",
  "This is a test NFT.",
  "ipfs://example_ipfs_hash",
  [
    { trait_type: "Background", value: "Blue" },
    { trait_type: "Rarity", value: "Legendary" },
  ]
);
