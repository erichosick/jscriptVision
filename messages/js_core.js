// Core

var NumF = function() {};
NumF.prototype = {
  get val() { return this.d; },
  get go() { return this.d; },
  get asNum() { return this.d; },
  get asArr() { return [this.d]; },
  get asStr() { return this.d.toString(); }
};
function num(d) { var f = new NumF(); f.d = d; return f; };

var ArrF = function() {};
ArrF.prototype = {
  get val() { return this.d; },
  get go() { return this.d; },
  get asNum() { return this.d[0]; },
  get asArr() { return this.d; },
  get asStr() { return "[" + this.d.toString() +"]"; }
};
function arr(d) { var f = new ArrF(); f.d = d; return f; };

module.exports.num = num;
module.exports.arr = arr;

// Utils

var WriteToConF = function() {};
WriteToConF.prototype = {
  get go() {
     var r = this.d.text.asStr;
     console.log(r);
     return r;
  },
  get asNum() {
     var r = this.d.text.asNum;
     console.log(r);
     return r;
  },
  get asArr() {
     var r = this.d.text.asArr;
     console.log(r);
     return r;
  },
  get asStr() {
     var r = this.d.text.asStr;
     console.log(r);
     return r;
  }
};
function writeToCon(d) { var f = new WriteToConF(); f.d = d; return f; };

module.exports.writeToCon = writeToCon;

// Math

var AddF = function() {};
AddF.prototype = {
  get go() { return this.asNum; },
  get asNum() { return this.d.left.asNum + this.d.right.asNum; },
  get asStr() { return "(" + this.d.left.asStr + " + " + this.d.right.asStr + ")"; }
};
function add(d) { var f = new AddF(); f.d = d; return f; };

var SubF = function() {};
SubF.prototype = {
  get go() { return this.asNum; },
  get asNum() { return this.d.left.asNum - this.d.right.asNum; },
  get asStr() { return "(" + this.d.left.asStr + " - " + this.d.right.asStr + ")"; }
};
function sub(d) { var f = new SubF(); f.d = d; return f; };

var MulF = function() {};
MulF.prototype = {
  get go() { return this.asNum; },
  get asNum() { return this.d.left.asNum * this.d.right.asNum; },
  get asStr() { return "(" + this.d.left.asStr + " * " + this.d.right.asStr + ")"; }
};
function mul(d) { var f = new MulF(); f.d = d; return f; };

var DivF = function() {};
DivF.prototype = {
  get go() { return this.asNum; },
  get asNum() { return this.d.left.asNum / this.d.right.asNum; },
  get asStr() { return "(" + this.d.left.asStr + " / " + this.d.right.asStr + ")"; }
};
function div(d) { var f = new DivF(); f.d = d; return f; };


module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;
