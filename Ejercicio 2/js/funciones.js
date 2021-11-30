addEvent(window,'load',inicializarEventos,false);

function inicializarEventos()
{
	var ob;
	for(f=1;f<=4;f++)
	{
		ob=document.getElementById('facu'+f);
		addEvent(ob,'click',presionEnlace,false);
	}
}


function presionEnlace(e)
{
 if (window.event)
 {
 window.event.returnValue=false;
 var url=window.event.srcElement.getAttribute('href');
 
 cargarProducto (url); 
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
function cargarProducto(url) 
{
 if(url=='')
 {
 return;
 }

 conexion1=crearXMLHttpRequest();
 conexion1.onreadystatechange = procesarEventos;
 conexion1.open("GET", url, true);
 conexion1.send(null);
 
 
}

var textcarr;
function procesarEventos()
{
textcarr="<b id='titulo3'>Escuelas Profesionales:</b> </br></br>";
 var carreras = document.getElementById("carreras");
 console.log(conexion1.readyState);
 if(conexion1.readyState == 4)
 {
	
	lista = conexion1.responseText.split(",");
	lista.forEach(juntatexto)
	carreras.style.cssText = "background-color: #5BF61A; font-family: Arial; width: 50%;";
	carreras.innerHTML = textcarr	
	
	

 } 
 else 
 {
	carreras.innerHTML = 'Cargando';
 }
}

function juntatexto(item,index){
		textcarr+= "<li>" +item +"</li></br>";
	}

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