function isPalindrome(s) {
  //Stop condition: an empty word or a word containing a single character is a palindrome.
  if (s.length < 2) {
    return true;
  } //Breakdown of the processing: we compare the characters located at the ends of the word
  else if (s[0] == s.slice(-1)) {
    //if equality we test the rest of the word
    return isPalindrome(s.slice(1, -1));
  } else {
    //if difference we stop
    return false;
  }
}
// calling the function isPalindrome
console.log(isPalindrome("kayak"));
