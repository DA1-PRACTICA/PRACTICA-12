addEvent(window,'load',inicializarEventos,false);

function inicializarEventos()
{
	var ob;
	for(f=1;f<=6;f++)
	{
		ob=document.getElementById('img'+f);
		addEvent(ob,'click',presionEnlace,false);
	}
}


function presionEnlace(e)
{
 if (window.event)
 {
 window.event.returnValue=false;
 var url=window.event.srcElement.getAttribute('href');
 
 cargarProducto(url); 
 }
 else
 if (e)
 {
 e.preventDefault();
 var url=e.target.getAttribute('href');
 cargarProducto(url); 	
 }
}


var conexion1;
var num;
function cargarProducto(url) 
{
 if(url=='')
 {
 return;
 }

 num=url.split("=");
 conexion1=crearXMLHttpRequest();
 conexion1.onreadystatechange = procesarEventos;
 conexion1.open("GET", url, true);
 conexion1.send(null);
 
 
}


function procesarEventos()
{
 var detalles = document.getElementById("detalles"+num[1]);
 console.log(conexion1.readyState);
 if(conexion1.readyState == 4)
 {
detalles.innerHTML = conexion1.responseText;

 } 
 else 
 {
 detalles.innerHTML = 'Cargando';
 }
}


//***************************************
//Funciones comunes a todos los problemas
//***************************************
function addEvent(elemento,nomevento,funcion,captura)
{
 if (elemento.attachEvent)
 {
 elemento.attachEvent('on'+nomevento,funcion);
 return true;
 }
 else 
 if (elemento.addEventListener)
 {
 elemento.addEventListener(nomevento,funcion,captura);
 return true;
 }
 else
 return false;
}
function crearXMLHttpRequest() 
{
 var xmlHttp=null;
 if (window.ActiveXObject) 
 xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
 else 
 if (window.XMLHttpRequest) 
 xmlHttp = new XMLHttpRequest();
 return xmlHttp;
}