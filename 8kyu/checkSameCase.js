// Write a function that will check if two given characters are the same case.

//     If either of the characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters, but not the same case, return 0

// Examples

// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b) {
  const majReg = /[A-Z]/g;
  const minReg = /[a-z]/g;
  if (
    (a.match(majReg) && b.match(majReg)) ||
    (a.match(minReg) && b.match(minReg))
  ) {
    return 1;
  } else if (
    (a.match(majReg) && b.match(minReg)) ||
    (a.match(minReg) && b.match(majReg))
  ) {
    return 0;
  } else {
    return -1;
  }
}
