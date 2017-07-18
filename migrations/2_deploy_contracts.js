var ConvertLib = artifacts.require("./ConvertLib.sol");
var UserMapping = artifacts.require("./UserMapping.sol");
var User = artifacts.require("./User.sol");

module.exports = function (deployer) {
    deployer.deploy(UserMapping).then(function () {
        deployer.deploy(User, "cust@xom.com", "0x691072a500d606c0fa1843c0cb4df3b7bebe12eb", "Wendy Cust", []).then(function () {
            UserMapping.at(UserMapping.address).addUser("cust@xom.com", "0x691072a500d606c0fa1843c0cb4df3b7bebe12eb", User.address);
        }
            );
        deployer.deploy(User, "shipper@xom.com", "0x70006a193672cf91a606b28be74c9eaed99ddaac", "Guilherme Shipper", []).then(function () {
            UserMapping.at(UserMapping.address).addUser("shipper@xom.com", "0x70006a193672cf91a606b28be74c9eaed99ddaac", User.address);
        }
        );  
        deployer.deploy(User, "servRep@xom.com", "0xaf86857172564760d9927ccb281153c8b0271c78", "Asha Rep", []).then(function () {
            UserMapping.at(UserMapping.address).addUser("servRep@xom.com", "0xaf86857172564760d9927ccb281153c8b0271c78", User.address);
        }
        );  
    });
   
};