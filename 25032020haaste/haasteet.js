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

function kuusi(p,k,v){
	function vuodet(v){
		return v * 365.25;
	}
	function kuukaudet(k){
		switch (k-1){
			case 0:
				return 0;
				break;
			case 1:
				return 31;
				break;
			case 2:
				return 59;
				break;
			case 3:
				return 90;
				break;
			case 4:
				return 120;
				break;
			case 5:
				return 151;
				break;
			case 6:
				return 181;
				break;
			case 7:
				return 212;
				break;
			case 8:
				return 243;
				break;
			case 9:
				return 273;
				break;
			case 10:
				return 304;
				break;
			case 11:
				return 334;
				break;
			default:
				return 0;
				break;
		}
	}
	var d = new Date()
	var syntymaaika = vuodet(v) + kuukaudet(k) + p;
	var tamapaiva = vuodet(d.getFullYear()) + kuukaudet(d.getMonth()+1) + d.getDate();

	console.log(tamapaiva-syntymaaika);
}

kuusi(5,9,2002)
