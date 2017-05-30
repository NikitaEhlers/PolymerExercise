"use strict";

describe("cupcake result element", function() {
    var _cupcakeResult;

    beforeAll(function() {
        var element = document.createElement("cupcake-results");
        element.setAttribute("id", "test-cupcake-results");

        document.body.appendChild(element);
        _cupcakeResult = document.getElementById("test-cupcake-results");
    });

    afterAll(function() {
        _cupcakeResult.remove();
    });

    describe("when element is loaded", function() { 
       it("should be defined", function() {
            expect(_cupcakeResult).toBeDefined();
            expect(_cupcakeResult).not.toBe(null);
       });

       it("should not be empty", function() {
            expect(_cupcakeResult.innerHTML).not.toBe('');
       });

       it("_calculateCupcakePercent should be defined", function() {
            expect(_cupcakeResult._calculateCupcakePercent).toBeDefined();
       });   

       it("handleGet should be defined", function() {
            expect(_cupcakeResult.handleGet).toBeDefined();
       });      
    });
    
    describe("when _calculateCupcakePercent is called", function() {
       it("should be called", function() {
            spyOn(_cupcakeResult, "_calculateCupcakePercent");
            var result = _cupcakeResult._calculateCupcakePercent();
            expect(_cupcakeResult._calculateCupcakePercent).toHaveBeenCalled();
       });

       it("should not return underfined", function() { 
            spyOn(_cupcakeResult, "_calculateCupcakePercent").and.callThrough();
            var result = _cupcakeResult._calculateCupcakePercent(10, 100);
            expect(result).toBeDefined();
       });

       it("should return percentage when given values", function() {
            spyOn(_cupcakeResult, "_calculateCupcakePercent").and.callThrough();
            var result = _cupcakeResult._calculateCupcakePercent(10, 100);
            expect(result).toBe(10);
       });
      
    });

    describe("when handleGet is called", function() {
        it("should call", function() {
            spyOn(_cupcakeResult, "handleGet");
            _cupcakeResult.handleGet();
            expect(_cupcakeResult.handleGet).toHaveBeenCalled();
        });

        it("should call sortCupcakeStats", function() {
            spyOn(_cupcakeResult, "handleGet");
            spyOn(_cupcakeResult, "sortCupcakeStats").and.callThrough();
            _cupcakeResult.handleGet();
            expect(_cupcakeResult.sortCupcakeStats).toHaveBeenCalled();
        });
    });
});