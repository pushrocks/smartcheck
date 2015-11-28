/// <reference path="./index.ts" />
class Check {
    name:string;
    result:string;
    constructor(nameArg:string,resultArg:string){
        this.name = nameArg;
        this.result = resultArg;
    }
}

class CheckStorage {
    checks:Check[];
    constructor() {
        this.checks = [];
    }
    addCheck(name:string,result:string){
        var localCheck = new Check(name,result);
        this.checks.push(localCheck);
    }
    print() {
        var localTable = beautylog.table.new("checks");
        for (var check in this.checks){
            localTable.push([this.checks[check].name,this.checks[check].result]);
        }
        localTable.print();
    }
}