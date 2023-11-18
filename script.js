function firstNonRepeatedChar(str) {
 // Write your code here
	let count=1;
	for(let i=0;i<str.length-1;i++)
		{
			if(str.charAt(i)== str.charAt(i+1))
			{
				count++;
			}
			else
			{
				count--;
			}
			if(count==0)
			{
				return str.charAt(i);
			}
		}
	return null;
}
let input= prompt("Enter the string");
alert(firstNonRepeatedChar(input));