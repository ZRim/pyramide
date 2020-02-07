
var n = prompt('Donner le nombre d étages');
n=parseInt(n);
var tab = [];
if (n <= 25) {
	//method 1

	for (var i = 1; i <= n; i++) {
	tab[i]=[];
		for(var j=1; j<=2*n-1; j++){
			(tab[i])[j]=" ";
		}
	}



	for (var i = 1; i <= n; i++) {
		

		for(var j=(n-i+1); j<=(n+i-1); j++){
			(tab[i])[j]="#";
		}

		
		
	}

for(var i=1;i<=n;i++){
	var s="";
	for(var j=1;j<=((2*n)-1);j++){
		s=s+((tab[i])[j]);	
	}
	console.log(s);
}

	
}










