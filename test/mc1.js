var MetaStruct = artifacts.require("./MetaStruct.sol");

contract('Mc1', function(accounts) {

    it("setup the data inside the user struct", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];
        var ac3 = accounts[2]

        var amount = 10;
        var xamount;

        return MetaStruct.deployed().then(function(instance) {
            meta = instance;
            return meta.setUser(ac1, "keith", amount, true);
        }).then(function() {
            xamount = amount + 5;
            return meta.setUser(ac2, "peter", xamount, false);
        }).then(function() {
            xamount = xamount + 5;
            return meta.setUser(ac3, "stu", xamount, false);
        }).then(function() {

            return meta.getUserHungry.call(ac1);
        }).then(function(hungry) {
            assert.equal(hungry, true, "Keith should be hungry");
            console.log("keith hungry = ", hungry);
            return meta.getUserHungry.call(ac2);
        }).then(function(hungry) {
            assert.equal(hungry, false, "peter should not be hungry");
            return meta.getUserHungry.call(ac3);
        }).then(function(hungry) {
            assert.equal(hungry, false, "stu should not be hungry");
        });
    });

    it("test hungry", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];
        var ac3 = accounts[2]

        return MetaStruct.deployed().then(function(instance) {
            meta = instance;
            return meta.getUserHungry.call(ac1);
        }).then(function(hungry) {
            assert.equal(hungry, true, "Keith should be hungry");
            console.log("keith hungry = ", hungry);
            return meta.getUserHungry.call(ac2);
        }).then(function(hungry) {
            assert.equal(hungry, false, "peter should not be hungry");
            return meta.getUserHungry.call(ac3);
        }).then(function(hungry) {
            assert.equal(hungry, false, "stu should not be hungry");
        });
    });

    it("test names", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];
        var ac3 = accounts[2]

        return MetaStruct.deployed().then(function(instance) {
            meta = instance;
            return meta.getUserName.call(ac1);
        }).then(function(name) {
            assert.equal(name, "keith", "Keith should be the name");
            console.log("keith name = ", name);
            return meta.getUserName.call(ac2);
        }).then(function(name) {
            assert.equal(name, "peter", "peter should be the name");
            return meta.getUserName.call(ac3);
        }).then(function(name) {
            assert.equal(name, "stu", "stu should be the name");
        });
    });

    it("test amounts", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];
        var ac3 = accounts[2]

        var myamt;

        return MetaStruct.deployed().then(function(instance) {
            meta = instance;
            return meta.getUserAmount.call(ac1);
        }).then(function(amt) {
            myamt = amt.toNumber();
            assert.equal(myamt, 10, "Keith amount should be 10");
            console.log("keith amount = ", amt);
            return meta.getUserAmount.call(ac2);
        }).then(function(amt) {
            myamt = amt.toNumber();
            assert.equal(myamt, 15, "peter amount shoudl be 15");
            return meta.getUserAmount.call(ac3);
        }).then(function(amt) {
            myamt = amt.toNumber();
            assert.equal(myamt, 20, "stu amount should be 20");
        });
    });

});
