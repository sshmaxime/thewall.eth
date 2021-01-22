//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "hardhat/console.sol";

struct Brick {
    // Who is building
    address builder;
    // What the builder is building
    string message;
}

contract TheWall {
    mapping(address => Brick[]) public walls;

    function build(string calldata _message, address _building) public {
        walls[_building].push(Brick({builder: msg.sender, message: _message}));
    }

    function inspect(address _building)
        public
        view
        returns (Brick[] memory _bricks)
    {
        return walls[_building];
    }
}
