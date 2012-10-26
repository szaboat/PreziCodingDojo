describe("Calculator", function() {
    describe("Basics", function() {
        calculator_helper('', 0);
        calculator_helper('42', 42);
        calculator_helper('42,22', 64);
        calculator_helper('1,2,3,4', 10);
        calculator_helper('1,2,3,4,10,10', 30);
        calculator_helper('1,2,3,4,10\n10', 30);
        calculator_helper('1,2,3,4\n10\n10', 30);
        calculator_helper('//;\n1;2', 3);
    });
    describe("Chapter 'e'", function(){
        it("should throw error for: '-5'", function (){
            expect(function () {calculator.add('-5');}).toThrow("negatives not allowed: -5");
        })
        it("should throw error for: '-15'", function (){
            expect(function () {calculator.add('-15');}).toThrow("negatives not allowed: -15");
        })
        it("should throw error for: '-15,-2'", function (){
            expect(function () {calculator.add('-15,-2');}).toThrow("negatives not allowed: -15, -2");
        })
    });

    describe("oooh", function(){
        calculator_helper('2,1001', 2);
        calculator_helper('2,2001', 2);
    });

    describe("char[]", function(){
       calculator_helper('//[***]\n1***2***3', 6);
    });
    describe("char[][]", function(){
        calculator_helper('//[*][%]\n1*2%3', 6);
    });
    describe("char[][] 2", function(){
        calculator_helper('//[K][AC][AAA][A]\n1K2A3AAA3AC5C23', 14);
    });
});

function calculator_helper(expression, result){
    it("should evaluate '"+expression+"' to "+result+".", function() {
        expect(calculator.add(expression)).toBe(result);
    });
}
