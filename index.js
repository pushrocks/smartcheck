/// <reference path="./index.ts" />
var Check = (function () {
    function Check(nameArg, resultArg) {
        this.name = nameArg;
        this.result = resultArg;
    }
    return Check;
})();
var CheckStorage = (function () {
    function CheckStorage() {
        this.checks = [];
    }
    CheckStorage.prototype.addCheck = function (name, result) {
        var localCheck = new Check(name, result);
        this.checks.push(localCheck);
    };
    CheckStorage.prototype.print = function () {
        var localTable = beautylog.table.new("checks");
        for (var check in this.checks) {
            localTable.push([this.checks[check].name, this.checks[check].result]);
        }
        localTable.print();
    };
    return CheckStorage;
})();
/// <reference path="typings/tsd.d.ts" />
/// <reference path="./classes.ts" />
var beautylog = require("beautylog")("os");
var smartcheck = {};
smartcheck.newStorage = function () {
    return new CheckStorage;
};
module.exports = smartcheck;
