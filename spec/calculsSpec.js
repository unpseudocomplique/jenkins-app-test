const Calculs = require('../Calculs')

describe("Calculs test", function() {
  
    const operande1 = 1;
    const operande2 = 5;
    const calculs = new Calculs(operande1,operande2);
    describe("Test Calculs methods", function() {
      //This is testing that http GET works
  
        it("Checks if multiplier have the right calc", function() { 

            expect(calculs.multiplier()).toBe(operande1 * operande2);

        });
        it("This test should fail", function() { 

            expect(calculs.multiplier()).not.toBe(operande1 - operande2);

        });
    });
  });