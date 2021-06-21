29-05-2021

tablatotal 

var tablatotal= document.getElementById("gridview-1022-body");
tablatotal.rows.length
//para calcular el legth del for 






filas para seleccionar columnas
var roberto= document.getElementById("gridview-1022-record-ext-record-1");   //reemplazar 1 con el numero de elemento
seleccion de la columna 

roberto.cells[3].innerText


// va creaciendo a medida que se cargan. De menor a mayor




sumar las cantidades ???


script:


var tablatotal= document.getElementById("gridview-1022-body");

var i = 0 

for (i= 1; i < tablatotal.rows.length; i++ )
{
	var roberto= document.getElementById("gridview-1022-record-ext-record-"+i);
	console.log(roberto.cells[3].innerText);
}
		



v2.0 


var tablatotal= document.getElementById("gridview-1022-body");

var i = 0 

for (i= 1; i < tablatotal.rows.length; i++ )
{
	var roberto= document.getElementById("gridview-1022-record-ext-record-"+i);
	console.log(roberto.cells[3].innerText + "\n hola");
}
		



v3.0

var tablatotal= document.getElementById("gridview-1022-body");

var i = 0;
var sumVal=0;

for (i= 1; i < tablatotal.rows.length; i++ )
{
	var roberto= document.getElementById("gridview-1022-record-ext-record-"+i);
	console.log(roberto.cells[3].innerText + "\n hola");
    sumVal= sumVal + roberto.cells[3].innerText;

}
		



var tablatotal= document.getElementById("gridview-1022-body");

var i = 0;
var sumVal=0;

for (i= 1; i < tablatotal.rows.length; i++ )
{
	var roberto= document.getElementById("gridview-1022-record-ext-record-"+i);
	console.log(roberto.cells[3].innerText + "hola");
    sumVal= sumVal + parseInt(roberto.cells[3].innerText);

}
		


--------------------------------------------------------------------------------------------------

30-5 



- convertir a segundos 
- sumar todo 
- convertir a string 


//Convertir a segundos 

function arrayToSeconds (timeString){
    const arr= timeString.split(":");
    const segundos= arr[0]*3600 + arr[1]*60 + (+arr[2]);
    return segundos;
}




//Convertir a string 

function secondsToArray(segundos){

hours = Math.floor(segundos / 3600);
minutes = Math.floor((segundos - (hours * 3600)) / 60);
seconds = segundos - (hours * 3600) - (minutes * 60);

var timeResultadoString = hours.toString().padStart(2, '0') + ':' +
      minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0');
return timeResultadoString ;

}


Procedimiento: 
Cada lectura convierto a segundos 
Sumo acumulacion dentro del for 
Cuando termina el for convierto todos los segundos a string : 


Alt2: 

A medida que leo podria guardar todos lo datos y hacer una tabla (objeto )con vista a especificar si es nuevo o recalll en la app 



IDEAS: 

Hacer llamadas automaticas 
Sobre todo sirve para las rellamadas mecanicas 

Lo ideal seria tener l'app de masvoz 



v4.0 


v3.0

var ahoraque= document.getElementById("gridview-1022-body");

var i = 0;
var segundos=0;
var duracionCallSeg;
var duracionCallString;

for (i= 1; i < ahoraque.rows.length; i++ )
{
	duracionCallString= document.getElementById("gridview-1022-record-ext-record-"+i);
	//console.log(duracionCallString.cells[3].innerText + "\n hola");
	duracionCallSeg =  arrayToSeconds (timeString)
	
    	segundos = segundos + duracionCallString.cells[3].innerText;

}

console.log(segundos);





V4.0

//Convertir a segundos 

function arrayToSeconds (timeString){
    const arr= timeString.split(":");
    const segundos= arr[0]*3600 + arr[1]*60 + (+arr[2]);
    return segundos;
}




------------------------------------------------------------------------------------------------------

//V5.0

var i = 0;
var segundos=0;
var duracionCallSeg;
var duracionCallString;
var arr;
var callSegundos;
var sumSegundos;


var ahoraque= document.getElementById("gridview-1022-body");


for (i= 1; i < ahoraque.rows.length; i++ )
{
	duracionCallString= document.querySelector("gridview-1022-record-ext-record-"+i);
	//console.log(duracionCallString.cells[3].innerText + "\n hola");
	arr= duracionCallString.split(":");
        callSegundos= arr[0]*3600 + arr[1]*60 + (+arr[2]);
	
	
    	sumSegundos = callSegundos + sumSegundos;

}

console.log(sumSegundos);

-------------------------------------------------------------


Shortcut EDIT 


agregar atributo a la clase 
accesskey="q"

6-06 probar tambien con masvoz
document.querySelector("#example_wrapper > div.dt-buttons.btn-group.flex-wrap > button.btn.btn-secondary.buttons-selected.disabled").setAttribute("accesskey","q")



------------------

V6.0

var ahoraque= document.getElementById("gridview-1022-body");


for (i= 1; i < ahoraque.rows.length; i++ )
{
	duracionCallString= document.querySelector("gridview-1022-record-ext-record-"+i);
	//console.log(duracionCallString.cells[3].innerText + "\n hola");
	arr= duracionCallString.split(":");
        callSegundos= arr[0]*3600 + arr[1]*60 + (+arr[2]);
	
	
    	sumSegundos = callSegundos + sumSegundos;

}

console.log(sumSegundos);





--------------------------------------------

V7.0

 function showTableData() {
        document.getElementById('info').innerHTML = "";
        var myTab = document.getElementById('empTable');

        // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
        for (i = 1; i < myTab.rows.length; i++) {

            // GET THE CELLS COLLECTION OF THE CURRENT ROW.
            var objCells = myTab.rows.item(i).cells;

            // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
            for (var j = 0; j < objCells.length; j++) {
                info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML;
            }
            info.innerHTML = info.innerHTML + '<br />';     // ADD A BREAK (TAG).
        }
    }




-----------------------------------

v8.0 OK en ventana pequeña masvoz

//Cantidad de filas ? lenght table ?

var tabla= document.getElementById("gridview-1023-table");

var dimension= tabla.rows.length;


 
for (i = 1; i < tabla.rows.length; i++){

 
	var fila = document.getElementById("gridview-1023-record-ext-record-"+i)  //ultimo numero es la fila desde 0

	var filaStr= fila.innerText.split("\n"); //convierto fila en string 

 
console.log(1 +filaStr[5],"\nhola")

}


------------------------------------------------------

V9.0 //suma de segundos





var tabla= document.getElementById("gridview-1023-table");

var dimension= tabla.rows.length;


 
for (i = 1; i < tabla.rows.length; i++){

 
	var fila = document.getElementById("gridview-1023-record-ext-record-"+i)  //ultimo numero es la fila desde 0

	var filaStr= fila.innerText.split("\n"); //convierto fila en string 
	
	arr= filaStr[5].split(":");
	callSegundos= arr[0]*3600 + arr[1]*60 + (+arr[2]);
	sumSegundos = callSegundos + sumSegundos;

}

 
console.log(sumSegundos,"\nhola")



 --------------------------------------------------

V10.00 OK Devuelve el string con la suma del tiempo 


function tiempoTelLite(){


var tabla= document.getElementById("gridview-1023-table");
var sumSegundos= 0;

var dimension= tabla.rows.length;


 
for (i = 1; i < tabla.rows.length; i++){

 
	var fila = document.getElementById("gridview-1023-record-ext-record-"+i)  //ultimo numero es la fila desde 0

	var filaStr= fila.innerText.split("\n"); //convierto fila en string
	
	arr= filaStr[5].split(":");
	callSegundos= arr[0]*3600 + arr[1]*60 + (+arr[2]);
	sumSegundos = callSegundos + sumSegundos;

	hours = Math.floor(sumSegundos / 3600);
	minutes = Math.floor((sumSegundos - (hours * 3600)) / 60);
	seconds = sumSegundos - (hours * 3600) - (minutes * 60);

	var timeResultadoString = hours.toString().padStart(2, '0') + ':' +
      	minutes.toString().padStart(2, '0') + ':' +
      	seconds.toString().padStart(2, '0');


}

alert("Tiempo al telefono: "+timeResultadoString+"\n"+"Cantidad de llamadas:  "+dimension)

 
}
    
	
	
    	


---------------------------------------------------------------------

V11 tabla general //probar body por 1022-table


function tiempoTel(){

var tabla= document.getElementById("gridview-1022-body");
var sumSegundos= 0;

var dimension= tabla.rows.length;


 
for (i = 1; i < tabla.rows.length; i++){

 
	var fila = document.getElementById("gridview-1022-record-ext-record-"+i)  //ultimo numero es la fila desde 0

	var filaStr= fila.innerText.split("\n"); //convierto fila en string
	
	arr= filaStr[6].split(":");
	callSegundos= arr[0]*3600 + arr[1]*60 + (+arr[2]);
	sumSegundos = callSegundos + sumSegundos;

	hours = Math.floor(sumSegundos / 3600);
	minutes = Math.floor((sumSegundos - (hours * 3600)) / 60);
	seconds = sumSegundos - (hours * 3600) - (minutes * 60);

	var timeResultadoString = hours.toString().padStart(2, '0') + ':' +
      	minutes.toString().padStart(2, '0') + ':' +
      	seconds.toString().padStart(2, '0');


}

alert("Tiempo al telefono: "+timeResultadoString+"\n"+"Cantidad de llamadas:  "+dimension)



}



--------------------------------------------

Funcion boton edit accesskey 

function edit() {

document.querySelector("#example_wrapper > div.dt-buttons.btn-group.flex-wrap > button.btn.btn-secondary.buttons-selected.disabled").setAttribute("accesskey","q")


}

edit();
