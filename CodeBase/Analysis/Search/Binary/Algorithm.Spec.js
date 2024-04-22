describe("Binary Search Algorithm", function() {

    it("(JASMINE SETUP) Should be true because this test method is for testing the Jasmine setup", function() {

        console.log("=== JASMINE SETUP ===");
        expect(true).toBeTruthy();

    });

    it("(LOGGER SETUP) Should be true because this test method is for testing the Logger Array is setup", function() {

        console.log("=== LOGGER SETUP ===");

        let arr = new Array(0, 10, 20, 30, 40, 50, 60);
        let x = 40;
        logging = new Array();
        binarySearch(arr, x);

        expect(logging.length > 0).toBeTruthy();

    });


    it("(TARGET EQUALS FORTY) Should be true because the fifth element in the array is fourty which is the target value ", function() {
        
        console.log("=== TARGET EQUALS FORTY ===");

        let arr = new Array(0, 10, 20, 30, 40, 50, 60);
        let x = 40;
        logging = new Array();
        let result = binarySearch(arr, x);

        console.log(`Result = ${result}`);
        expect(result).toEqual(4);

      });



    

  });