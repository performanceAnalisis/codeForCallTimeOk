function tiempoTelLiteOK(){


var tabla= document.getElementById("gridview-1023-table");
var sumSegundos= 0;
var sumSegundosOK= 0;
var sumSegundosError= 0;
var cantOK= 0 ;
 




var dimension= tabla.rows.length;


 
for (i = 1; i < tabla.rows.length; i++){

 
	var fila = document.getElementById("gridview-1023-record-ext-record-"+i)  //ultimo numero es la fila desde 0

	var filaStr= fila.innerText.split("\n"); //convierto fila en string
	

	//suma todos por igual
	arr= filaStr[5].split(":");     //el 5 es el tiempo el 9 es la nota
	callSegundos= arr[0]*3600 + arr[1]*60 + (+arr[2]);
	sumSegundos = callSegundos + sumSegundos;

	//termina suma en segundos y ahora los pasa hh:mmm:ss

	hours = Math.floor(sumSegundos / 3600);
	minutes = Math.floor((sumSegundos - (hours * 3600)) / 60);
	seconds = sumSegundos - (hours * 3600) - (minutes * 60);

	//aca arma el string

	var timeResultadoString = hours.toString().padStart(2, '0') + ':' +
      	minutes.toString().padStart(2, '0') + ':' +
      	seconds.toString().padStart(2, '0');

	}

	//-----------------------------------------------------------------------
	//a partir de aqui codigo suma los ok
	//if filaStr[9]==="OK" suma / else sigue

	for (i = 1; i < tabla.rows.length; i++){

 
		var fila = document.getElementById("gridview-1023-record-ext-record-"+i)  //ultimo numero es la fila desde 0
	
		var filaStr= fila.innerText.split("\n"); //convierto fila en string



	if (filaStr[9]==="OK"){
		
		cantOK ++ ;
		arr= filaStr[5].split(":");     //el 5 es el tiempo el 9 es la nota
		callSegundos= arr[0]*3600 + arr[1]*60 + (+arr[2]);
		sumSegundosOK = callSegundos + sumSegundosOK;
		

		hours = Math.floor(sumSegundosOK / 3600);
		minutes = Math.floor((sumSegundosOK - (hours * 3600)) / 60);
		seconds = sumSegundosOK - (hours * 3600) - (minutes * 60);

		var timeResultadoStringOK = hours.toString().padStart(2, '0') + ':' +
			minutes.toString().padStart(2, '0') + ':' +
			seconds.toString().padStart(2, '0');
		}

		

	}


	//-----------------------------------------------------------------------
	//a partir de aqui codigo suma los Error
	//if filaStr[9]==="Error" suma / else sigue

	for (i = 1; i < tabla.rows.length; i++){

 
		var fila = document.getElementById("gridview-1023-record-ext-record-"+i)  //ultimo numero es la fila desde 0
	
		var filaStr= fila.innerText.split("\n"); //convierto fila en string



	if (filaStr[9]==="Error"){

		arr= filaStr[5].split(":");     //el 5 es el tiempo el 9 es la nota
		callSegundos= arr[0]*3600 + arr[1]*60 + (+arr[2]);
		sumSegundosError = callSegundos + sumSegundosError;

		hours = Math.floor(sumSegundosError / 3600);
		minutes = Math.floor((sumSegundosError - (hours * 3600)) / 60);
		seconds = sumSegundosError - (hours * 3600) - (minutes * 60);

		var timeResultadoStringError = hours.toString().padStart(2, '0') + ':' +
			minutes.toString().padStart(2, '0') + ':' +
			seconds.toString().padStart(2, '0');
		}

	}

//Calculos media OK 
var mediaOK = sumSegundosOK / cantOK ;   //en segundos 

//lo paso a formato hh:mm:ss

hours = Math.floor( mediaOK / 3600);
		minutes = Math.floor((mediaOK - (hours * 3600)) / 60);
		seconds = mediaOK - (hours * 3600) - (minutes * 60);

var mediaOKString = hours.toString().padStart(2, '0') + ':' +
minutes.toString().padStart(2, '0') + ':' +
seconds.toString().padStart(2, '0');





alert("Total: "+timeResultadoString+" / "+ dimension +"\n"
+"OK: "+timeResultadoStringOK +" / "+ Math.floor((sumSegundosOK/sumSegundos)*100) + " % "+" / "+cantOK+ "/ "+"Media: "+mediaOKString+"\n"
+"Error: "+timeResultadoStringError+" / "+ Math.floor((sumSegundosError/sumSegundos)*100) + " % "+"\n"

)

 
}
    
	
