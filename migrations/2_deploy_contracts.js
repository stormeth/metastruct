var MetaStruct = artifacts.require("./MetaStruct.sol");

module.exports = function(deployer) {
  deployer.deploy(MetaStruct);
};
