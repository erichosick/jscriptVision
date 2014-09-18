var jv = require ("../code/jv_core");

describe("num", function() {
   it ("should contain the right msg", function() {
      var msg = jv.num(6);
      expect(msg.go).toBe(6);
      expect(msg.asNum).toBe(6);
      expect(msg.asStr).toBe("6");
      expect(msg.val).toBe(6);
      expect(msg.asArr[0]).toBe(6);
      
      var msg2 = jv.num(8);
      expect(msg2.go).toBe(8);
      expect(msg2.asNum).toBe(8);
      expect(msg2.asStr).toBe("8");
      expect(msg2.val).toBe(8);
      expect(msg2.asArr[0]).toBe(8);
   });
});

describe("arr", function() {
   it ("should contain an array [6,7,8]", function() {
      var arr = [6,7,8];
      var msg = jv.arr(arr); 
      expect(msg.go).toBe(arr);
      expect(msg.asNum).toBe(6);
      expect(msg.asStr).toBe("[6,7,8]");
      expect(msg.val).toBe(arr);

      var arr2 = [2,5,12];
      var msg2 = jv.arr(arr2);
      expect(msg2.go).toBe(arr2);
      expect(msg2.asNum).toBe(2);
      expect(msg2.asStr).toBe("[2,5,12]");
      expect(msg2.val).toBe(arr2);
   });
});

describe("add", function() {
   it ("Should add 4 and 8", function() {
      var msg = jv.add({
         left: jv.num(4),
         right: jv.num(8)
      });
      expect(msg.go).toBe(12);
      expect(msg.asNum).toBe(12);
      expect(msg.asStr).toBe("(4 + 8)");
   });
   
   it ("Should add 3 and -1", function() {
      var msg = jv.add({
         left: jv.num(3),
         right: jv.num(-1)
      });
      expect(msg.go).toBe(2);
      expect(msg.asNum).toBe(2);
      expect(msg.asStr).toBe("(3 + -1)");
   });

   it ("Should support nesting of additions", function() {
      var msg = jv.add({
         left: jv.add({
           left: jv.num(3),
           right: jv.num(-1)
         }),
         right: jv.num(-1)
      });
      expect(msg.go).toBe(1);
      expect(msg.asNum).toBe(1);
      expect(msg.asStr).toBe("((3 + -1) + -1)");
   });
   
});

describe("sub", function() {
   it ("Should subtract 4 and 8", function() {
      var msg = jv.sub({
         left: jv.num(4),
         right: jv.num(8)
      });
      expect(msg.go).toBe(-4);
      expect(msg.asNum).toBe(-4);
      expect(msg.asStr).toBe("(4 - 8)");
   });
   
   it ("Should subtract 3 and -1", function() {
      var msg = jv.sub({
         left: jv.num(3),
         right: jv.num(-1)
      });
      expect(msg.go).toBe(4);
      expect(msg.asNum).toBe(4);
      expect(msg.asStr).toBe("(3 - -1)");
   });
   
});

describe("mul", function() {
   it ("Should multiply 2 and 7", function() {
      var msg = jv.mul({
         left: jv.num(2),
         right: jv.num(7)
      });
      expect(msg.go).toBe(14);
      expect(msg.asNum).toBe(14);
      expect(msg.asStr).toBe("(2 * 7)");
   });
   
   it ("Should multiply 4 and -2", function() {
      var msg = jv.mul({
         left: jv.num(4),
         right: jv.num(-2)
      });
      expect(msg.go).toBe(-8);
      expect(msg.asNum).toBe(-8);
      expect(msg.asStr).toBe("(4 * -2)");
   });
   
});
 
describe("div", function() {
   it ("Should divide 8 and 2", function() {
      var msg = jv.div({
         left: jv.num(8),
         right: jv.num(2)
      });
      expect(msg.go).toBe(4);
      expect(msg.asNum).toBe(4);
      expect(msg.asStr).toBe("(8 / 2)");
   });
   
   it ("Should divide 6 and -2", function() {
      var msg = jv.div({
         left: jv.num(6),
         right: jv.num(-2)
      });
      expect(msg.go).toBe(-3);
      expect(msg.asNum).toBe(-3);
      expect(msg.asStr).toBe("(6 / -2)");
   });

   it ("divide 6 by 0 is Infinity", function() {
      var msg = jv.div({
         left: jv.num(6),
         right: jv.num(0)
      });
      expect(msg.go).toBe(Infinity);
      expect(msg.asNum).toBe(Infinity);
      expect(msg.asStr).toBe("(6 / 0)");
   });
   
});

// This really doesn't check to see if the console was actuall written to.
describe ("writeToCon", function() {
   it ("should write the text '(4 + 8)' to the console", function() {
      var msg = jv.writeToCon({
         text: jv.add({
           left: jv.num(4),
           right: jv.num(8)
         })
      });
      expect(msg.go).toBe("(4 + 8)");
      expect(msg.asNum).toBe(12);
      expect(msg.asStr).toBe("(4 + 8)");
   });
   
});

