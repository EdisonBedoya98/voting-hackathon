// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventVoting {
    struct Voter {
        bool hasVoted;
        uint256 voterId;
    }

    mapping(address => Voter) public voters;
    string public eventName;

    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier hasNotVoted() {
        require(!voters[msg.sender].hasVoted, "You have already voted");
        _;
    }

    constructor(string memory _eventName) {
        owner = msg.sender;
        eventName = _eventName;
    }

    function vote(string memory voterName, uint256 voterId) external hasNotVoted {
        voters[msg.sender] = Voter(true, voterId);
        emit VoteCast(msg.sender, voterName, voterId);
    }

    function changeEventName(string memory newEventName) external onlyOwner {
        eventName = newEventName;
    }

    function hasVoted() external view returns (bool) {
        return voters[msg.sender].hasVoted;
    }

    event VoteCast(address indexed voter, string voterName, uint256 voterId);
}
