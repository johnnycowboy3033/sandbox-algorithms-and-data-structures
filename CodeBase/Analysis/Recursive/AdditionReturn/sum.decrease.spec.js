describe("Sum Decrease Algorithm", function() {

    it("(JASMINE SETUP) Should be true because this test method is for testing the Jasmine setup", function() {

        console.log("=== JASMINE SETUP ===");
        expect(true).toBeTruthy();

    });

    it("(LOGGER SETUP) Should be true because this test method is for testing the Logger Array is setup", function() {

        console.log("=== LOGGER SETUP ===");

        logging = new Array();
        counter = 0;
        sumDecrease(5);

        expect(logging.length > 0).toBeTruthy();

    });


  });