function yksi(a, b){
	console.log(a+b);
}

function kaksi(arr){
	console.log(arr[0]);
}

function kolme(a, b){
	if(a+b < 100){
		console.log("Lukujen summa on alle 100.");
	}else {
		console.log("Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!");
	}
}

function nelja(a,b){
	if(a === b){
		console.log("Samat!");
	}else{
		console.log("Eri luvut.");
	}
}

function viisi(h,m,s){
	var minuutti = 60;
	var tunti = minuutti * 60;
	console.log(tunti*h + minuutti*m + s);
}
