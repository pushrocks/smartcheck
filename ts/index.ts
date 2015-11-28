/// <reference path="typings/tsd.d.ts" />
/// <reference path="./classes.ts" />
var beautylog = require("beautylog")("os");
var smartcheck:any = {};

smartcheck.newStorage = function() {
    return new CheckStorage;
};

module.exports = smartcheck;