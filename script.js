function firstNonRepeatedChar(str) {
 // Write your code here
	 for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i);
    if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}
let input= prompt("Enter the string");
alert(firstNonRepeatedChar(input));