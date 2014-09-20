var js = require ("../mechanisms/js_core");

describe("num", function() {
   it ("should contain the right mech", function() {
      var mech = js.num(6);
      expect(mech.go).toBe(6);
      expect(mech.asNum).toBe(6);
      expect(mech.asStr).toBe("6");
      expect(mech.val).toBe(6);
      expect(mech.asArr[0]).toBe(6);
      
      var mech2 = js.num(8);
      expect(mech2.go).toBe(8);
      expect(mech2.asNum).toBe(8);
      expect(mech2.asStr).toBe("8");
      expect(mech2.val).toBe(8);
      expect(mech2.asArr[0]).toBe(8);
   });
});

describe("arr", function() {
   it ("should contain an array [6,7,8]", function() {
      var arr = [6,7,8];
      var mech = js.arr(arr); 
      expect(mech.go).toBe(arr);
      expect(mech.asNum).toBe(6);
      expect(mech.asStr).toBe("[6,7,8]");
      expect(mech.val).toBe(arr);

      var arr2 = [2,5,12];
      var mech2 = js.arr(arr2);
      expect(mech2.go).toBe(arr2);
      expect(mech2.asNum).toBe(2);
      expect(mech2.asStr).toBe("[2,5,12]");
      expect(mech2.val).toBe(arr2);
   });
});

describe("add", function() {
   it ("Should add 4 and 8", function() {
      var mech = js.add({
         left: js.num(4),
         right: js.num(8)
      });
      expect(mech.go).toBe(12);
      expect(mech.asNum).toBe(12);
      expect(mech.asStr).toBe("(4 + 8)");
   });
   
   it ("Should add 3 and -1", function() {
      var mech = js.add({
         left: js.num(3),
         right: js.num(-1)
      });
      expect(mech.go).toBe(2);
      expect(mech.asNum).toBe(2);
      expect(mech.asStr).toBe("(3 + -1)");
   });

   it ("Should support nesting of additions", function() {
      var mech = js.add({
         left: js.add({
           left: js.num(3),
           right: js.num(-1)
         }),
         right: js.num(-1)
      });
      expect(mech.go).toBe(1);
      expect(mech.asNum).toBe(1);
      expect(mech.asStr).toBe("((3 + -1) + -1)");
   });
   
});

describe("sub", function() {
   it ("Should subtract 4 and 8", function() {
      var mech = js.sub({
         left: js.num(4),
         right: js.num(8)
      });
      expect(mech.go).toBe(-4);
      expect(mech.asNum).toBe(-4);
      expect(mech.asStr).toBe("(4 - 8)");
   });
   
   it ("Should subtract 3 and -1", function() {
      var mech = js.sub({
         left: js.num(3),
         right: js.num(-1)
      });
      expect(mech.go).toBe(4);
      expect(mech.asNum).toBe(4);
      expect(mech.asStr).toBe("(3 - -1)");
   });
   
});

describe("mul", function() {
   it ("Should multiply 2 and 7", function() {
      var mech = js.mul({
         left: js.num(2),
         right: js.num(7)
      });
      expect(mech.go).toBe(14);
      expect(mech.asNum).toBe(14);
      expect(mech.asStr).toBe("(2 * 7)");
   });
   
   it ("Should multiply 4 and -2", function() {
      var mech = js.mul({
         left: js.num(4),
         right: js.num(-2)
      });
      expect(mech.go).toBe(-8);
      expect(mech.asNum).toBe(-8);
      expect(mech.asStr).toBe("(4 * -2)");
   });
   
});
 
describe("div", function() {
   it ("Should divide 8 and 2", function() {
      var mech = js.div({
         left: js.num(8),
         right: js.num(2)
      });
      expect(mech.go).toBe(4);
      expect(mech.asNum).toBe(4);
      expect(mech.asStr).toBe("(8 / 2)");
   });
   
   it ("Should divide 6 and -2", function() {
      var mech = js.div({
         left: js.num(6),
         right: js.num(-2)
      });
      expect(mech.go).toBe(-3);
      expect(mech.asNum).toBe(-3);
      expect(mech.asStr).toBe("(6 / -2)");
   });

   it ("divide 6 by 0 is Infinity", function() {
      var mech = js.div({
         left: js.num(6),
         right: js.num(0)
      });
      expect(mech.go).toBe(Infinity);
      expect(mech.asNum).toBe(Infinity);
      expect(mech.asStr).toBe("(6 / 0)");
   });
   
});

// This really doesn't check to see if the console was actuall written to.
describe ("writeToCon", function() {
   it ("should write the text '(4 + 8)' to the console", function() {
      var mech = js.writeToCon({
         text: js.add({
           left: js.num(4),
           right: js.num(8)
         })
      });
      expect(mech.go).toBe(12);
      expect(mech.asNum).toBe(12);
      expect(mech.asStr).toBe("(4 + 8)");
   });
   
});

