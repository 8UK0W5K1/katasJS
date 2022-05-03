// Given an array of integers your solution should find the smallest integer.

// For example:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    const smallest = args.sort((a, b) => a - b);
    return smallest[0];
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    for (var i = 0; i < args.length; i++) {
      if (args[i] < smallest) {
        smallest = args[i];
      }
    }
    return smallest;
  }
}