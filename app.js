// TABLE //
function table() {
	var num = parseInt(prompt("Enter a value"));

		for (i = 1; i <= 20; i++) {
			var table = num * i;
				document.write(num+ " x " + i + " = " + table + "<br>");
			}	
}


// Diamond Pattern 
function diamondPattern()
{
	var num=4;
	document.write("<center>");
	
	document.write("<br>")
	
	for(var i=15; i<=20; i++ )
		{
			for(var j=1; j<=i; j++)
				{
					document.write("%");
				}
			document.write("<br>");
		}
	
	for(var x=20; x>=1; x-- )
		{
			for(var y=1; y<=x; y++)
				{
					document.write("%");
				}
			document.write("<br>");
		}


document.write("</center>");
	
}