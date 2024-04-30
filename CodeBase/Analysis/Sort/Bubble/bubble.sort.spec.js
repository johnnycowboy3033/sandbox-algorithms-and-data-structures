describe("Bubble Sort Algorithm", function() {

    it("(JASMINE SETUP) Should be true because this test method is for testing the Jasmine setup", function() {

        console.log("=== JASMINE SETUP ===");
        expect(true).toBeTruthy();

    });

    it("(LOGGER SETUP) Should be true because this test method is for testing the Logger Array is setup", function() {

        console.log("=== LOGGER SETUP ===");

        let arr = new Array(6,3,2,5,1,4);
     
        logging = new Array();
        bubbleSort(arr);

        expect(logging.length > 0).toBeTruthy();

    });


    it("(SORTED = 6,3,2,5,1,4) Should be true because the array should arranged in order", function() {

        console.log("=== LOGGER SETUP ===");

        let arr = new Array(6,3,2,5,1,4);
     
        logging = new Array();
        bubbleSort(arr);

        expect(arr).toEqual([1,2,3,4,5,6]);

    });


  });