describe("Quick Sort Algorithm", function() {

    it("(JASMINE SETUP) Should be true because this test method is for testing the Jasmine setup", function() {

        console.log("=== JASMINE SETUP ===");
        expect(true).toBeTruthy();

    });
    
    it("(LOGGER SETUP) Should be true because this test method is for testing the Logger Array is setup", function() {

        console.log("=== LOGGER SETUP ===");

        let arr = new Array(10, 7, 8, 9, 1, 5);
     
        logging = new Array();
        quickSort(arr, 0, arr.length-1);

        expect(logging.length > 0).toBeTruthy();

    });

    it("(SORTED = 6,3,2,5,1,4) Should be true because the array should arranged in order", function() {

        console.log("=== LOGGER SETUP ===");

        let arr = new Array(10, 7, 8, 9, 1, 5);
     
        logging = new Array();
        quickSort(arr, 0, arr.length-1);

        expect(arr).toEqual([1, 5, 7, 8, 9, 10]);

    });




  });