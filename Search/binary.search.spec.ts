import { TestBed } from '@angular/core/testing';
import { BinarySearch } from "./binary.search";

describe('BinarySearch', () => {
 /*
  * The stepCount is number of the iteration in the Binary Search.
  */

  let binarySearch:BinarySearch;
  let element:number[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: []
    }).compileComponents();

    binarySearch = new BinarySearch();
    element = [2,3,4,10,40];

  });

  it('should be true because binarySearch is not null', () => {
    expect(binarySearch).not.toBeNull();
  });

  it('should be true because the target (1) and stepCount (0) is NOT found and the result is index Header = 0,Middle = 2,Tail = 4', () => {

    let result = binarySearch.pointer(0,element,1);

    expect(result).toEqual([0,2,4]);

  });

  it('should be true because the target (7) and stepCount (0) is found and the result is index Middle = 2', () => {

    let result = binarySearch.pointer(0,element,7);

    expect(result).toEqual([2]);

  });

  it('should be true because the target (3) and stepCount (1) is NOT found and the result is index Header = 0,Middle = 0,Tail = 1', () => {

    binarySearch.pointerHeader = 0;
    binarySearch.pointerMiddle = 2;
    binarySearch.pointerTail = 4;

    let result = binarySearch.pointer(1,element,3);

    expect(result).toEqual([0, 0, 1]);

  });


});
