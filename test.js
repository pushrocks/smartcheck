/// <reference path="typings/tsd.d.ts" />
var smartcheck = require("./index.js");
var pr = require("pushrocks");
var myCheckStorage = smartcheck.newStorage();
myCheckStorage.addCheck("Check1", "success");
myCheckStorage.print();
pr.beautylog.success("success");
