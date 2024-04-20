describe("Data Component", function() {

    it("(JASMINE SETUP) Should be true because this test method is for testing the Jasmine setup", function() {

        console.log("=== JASMINE SETUP ===");
        expect(true).toBeTruthy();

    });

    it("(Data Component SETUP) Should be true because the label set and get result value", function() {

        console.log("=== Data Component SETUP ===");

        let data = new DataComponent(['Head','Midpoint','Tail']);

        expect(data.label).toEqual(['Head','Midpoint','Tail']);

    });
    
 


  });