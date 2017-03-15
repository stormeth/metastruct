pragma solidity ^0.4.4;

contract MetaStruct {
	mapping (address => User) public users;

	struct User {
		string name;
		uint amount;
		bool hungry;
	}

	function setUser(address ad, string name, uint amount, bool hungry) {
		users[ad] = User(name,amount,hungry);
	}

	function getUserHungry(address addr) returns(bool) {
		bool hungry = users[addr].hungry;
		return hungry;
	}
}
