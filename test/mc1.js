var MetaStruct = artifacts.require("./MetaStruct.sol");

contract('Mc2', function(accounts) {

    it("t1", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];
        var ac3 = accounts[2]

        var ac1_end;
        var ac2_end;
        var ac3_end;

        var amount = 10;

        return MetaStruct.deployed().then(function(instance) {
            meta = instance;
            return meta.setUser(ac1, "keith", amount, true);
        }).then(function() {
            return meta.setUser(ac2, "peter", amount, false);
        }).then(function() {
            return meta.setUser(ac3, "stu", amount, false);
        }).then(function() {
            return meta.getUserHungry.call(ac1);
        }).then(function(hungry) {
            console.log("keith hungry = ", hungry);
        });
    });

});
