describe("Merge Sort Algorithm", function() {

    it("(JASMINE SETUP) Should be true because this test method is for testing the Jasmine setup", function() {

        console.log("=== JASMINE SETUP ===");
        expect(true).toBeTruthy();

    });


    it("(LOGGER SETUP) Should be true because this test method is for testing the Logger Array is setup", function() {

        console.log("=== LOGGER SETUP ===");

        let arr = new Array(6,3,2,5,1,4);
     
        logging = new Array();
         mergeSort(arr);

        expect(logging.length > 0).toBeTruthy();

    });

    it("mergeSort - (SORTED= 1,2,3,4,5,6,7,8,9 ) Should be true because the array should arranged in order", function() {

        console.log("=== LOGGER SETUP ===");

        let arr = new Array(2,8,5,3,9,4,1,7);
     
        logging = new Array();
        let results = mergeSort(arr);

        expect(results).toEqual([1,2,3,4,5,7,8,9]);

    });

    it("merge - Should be [2,3,8,5,9,4] because the combination is SORT [2,3], LEFT [8,5] and RIGHT [9,4] arrays", function() {

        console.log("=== LOGGER SETUP ===");

        let arrLeft = new Array(2,8,5);
        let arrRight = new Array(3,9,4);
     
        logging = new Array();
        let results = merge(arrLeft, arrRight);

        expect(results).toEqual([2,3,8,5,9,4]);

    });

    

  });