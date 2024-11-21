// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract MyContract {
    string public greet = "Hello, Hardhat!";
    
    function setGreeting(string memory _greet) public {
        greet = _greet;
    }
}
