"use strict";

describe("cupcake vote element", function(){

    var _cupcakeVote;

    beforeEach(function(){
        var element = document.createElement("cupcake-vote");
        element.setAttribute("id","test-cupcake-vote");
        
        document.body.appendChild(element);
        _cupcakeVote = document.getElementById("test-cupcake-vote");
    });

    afterEach(function(){
        _cupcakeVote.remove();
    })

    describe("when element is loaded", function(){
        it("should be defined", function(){
            expect(_cupcakeVote).toBeDefined();
        });

        it("should not be empty", function() {
            expect(_cupcakeVote.innerHTML).not.toBe('');
        });
    });

    describe("when save button is pressed", function() {
        it("should call handleTap function", function(){
            spyOn(_cupcakeVote, "handleTap");
            _cupcakeVote.$.saveButton.click();
            expect(_cupcakeVote.handleTap).toHaveBeenCalled();
        });
    });

});