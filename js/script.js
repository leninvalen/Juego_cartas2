function random()
{

//FORMATO ALEATORIO
			var cartas=document.getElementsByClassName("movil");
			for(var x=0; x<cartas.length; x++)
			{
				cartas[x].setAttribute("x",Math.floor((Math.random() * 10)+1));
				cartas[x].setAttribute("y",Math.floor((Math.random() * 409)+1));
			}
		
}
		
function f_as_corazon_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_as_corazon_rojo");
	var dropLoc = document.getElementById("as_corazon_rojo");
	
	//var posicion = dragItem.getBoundingClientRect();
	//alert("Posición arriba="+posicion.top+"posición derecha="+ posicion.right+"Posición abajo="+ posicion.bottom+"izquierda"+ posicion.left);
	
	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_as_corazon_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_as_corazon_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_as_corazon_negro");
	var dropLoc = document.getElementById("as_corazon_negro");
	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_as_corazon_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_as_diamante_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_as_diamante_rojo");
	var dropLoc = document.getElementById("as_diamante_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_as_diamante_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}

function f_as_trebol_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_as_trebol_negro");
	var dropLoc = document.getElementById("as_trebol_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_as_trebol_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_2_corazon_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_2_corazon_rojo");
	var dropLoc = document.getElementById("dos_corazon_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_2_corazon_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_2_corazon_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_2_corazon_negro");
	var dropLoc = document.getElementById("dos_corazon_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_2_corazon_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_2_diamante_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_2_diamante_rojo");
	var dropLoc = document.getElementById("dos_diamante_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_2_diamante_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_2_trebol_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_2_trebol_negro");
	var dropLoc = document.getElementById("dos_trebol_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		
		evt.dataTransfer.setData('key','id_2_trebol_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_3_corazon_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_3_corazon_rojo");
	var dropLoc = document.getElementById("tres_corazon_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_3_corazon_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_3_corazon_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_3_corazon_negro");
	var dropLoc = document.getElementById("tres_corazon_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_3_corazon_negro')
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_3_diamante_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_3_diamante_rojo");
	var dropLoc = document.getElementById("tres_diamante_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_3_diamante_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_3_trebol_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_3_trebol_negro");
	var dropLoc = document.getElementById("tres_trebol_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_3_trebol_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_4_corazon_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_4_corazon_rojo");
	var dropLoc = document.getElementById("cuatro_corazon_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_4_corazon_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_4_corazon_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_4_corazon_negro");
	var dropLoc = document.getElementById("cuatro_corazon_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_4_corazon_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_4_diamante_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_4_diamante_rojo");
	var dropLoc = document.getElementById("cuatro_diamante_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_4_diamante_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_4_trebol_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_4_trebol_negro");
	var dropLoc = document.getElementById("cuatro_trebol_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_4_trebol_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_5_corazon_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_5_corazon_rojo");
	var dropLoc = document.getElementById("cinco_corazon_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_5_corazon_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_5_corazon_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_5_corazon_negro");
	var dropLoc = document.getElementById("cinco_corazon_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_5_corazon_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_5_diamante_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_5_diamante_rojo");
	var dropLoc = document.getElementById("cinco_diamante_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_5_diamante_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_5_trebol_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_5_trebol_negro");
	var dropLoc = document.getElementById("cinco_trebol_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_5_trebol_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_6_corazon_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_6_corazon_rojo");
	var dropLoc = document.getElementById("seis_corazon_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_6_corazon_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_6_corazon_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_6_corazon_negro");
	var dropLoc = document.getElementById("seis_corazon_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_6_corazon_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_6_diamante_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_6_diamante_rojo");
	var dropLoc = document.getElementById("seis_diamante_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_6_diamante_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_6_trebol_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_6_trebol_negro");
	var dropLoc = document.getElementById("seis_trebol_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_6_trebol_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_7_corazon_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_7_corazon_rojo");
	var dropLoc = document.getElementById("siete_corazon_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_7_corazon_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_7_corazon_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_7_corazon_negro");
	var dropLoc = document.getElementById("siete_corazon_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_7_corazon_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_7_diamante_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_7_diamante_rojo");
	var dropLoc = document.getElementById("siete_diamante_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_7_diamante_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_7_trebol_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_7_trebol_negro");
	var dropLoc = document.getElementById("siete_trebol_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_7_trebol_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_8_corazon_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_8_corazon_rojo");
	var dropLoc = document.getElementById("ocho_corazon_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_8_corazon_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_8_corazon_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_8_corazon_negro");
	var dropLoc = document.getElementById("ocho_corazon_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_8_corazon_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_8_diamante_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_8_diamante_rojo");
	var dropLoc = document.getElementById("ocho_diamante_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_8_diamante_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_8_trebol_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_8_trebol_negro");
	var dropLoc = document.getElementById("ocho_trebol_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_8_trebol_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_9_corazon_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_9_corazon_rojo");
	var dropLoc = document.getElementById("nueve_corazon_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_9_corazon_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_9_corazon_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_9_corazon_negro");
	var dropLoc = document.getElementById("nueve_corazon_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_9_corazon_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_9_diamante_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_9_diamante_rojo");
	var dropLoc = document.getElementById("nueve_diamante_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_9_diamante_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_9_trebol_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_9_trebol_negro");
	var dropLoc = document.getElementById("nueve_trebol_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_9_trebol_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_10_corazon_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_10_corazon_rojo");
	var dropLoc = document.getElementById("diez_corazon_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_10_corazon_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_10_corazon_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_10_corazon_negro");
	var dropLoc = document.getElementById("diez_corazon_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_10_corazon_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_10_diamante_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_10_diamante_rojo");
	var dropLoc = document.getElementById("diez_diamante_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_10_diamante_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_10_trebol_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_10_trebol_negro");
	var dropLoc = document.getElementById("diez_trebol_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_10_trebol_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_j_corazon_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_j_corazon_rojo");
	var dropLoc = document.getElementById("j_corazon_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_j_corazon_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_j_corazon_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_j_corazon_negro");
	var dropLoc = document.getElementById("j_corazon_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_j_corazon_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_j_diamante_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_j_diamante_rojo");
	var dropLoc = document.getElementById("j_diamante_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_j_diamante_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_j_trebol_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_j_trebol_negro");
	var dropLoc = document.getElementById("j_trebol_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_j_trebol_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_q_corazon_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_q_corazon_rojo");
	var dropLoc = document.getElementById("q_corazon_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_q_corazon_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_q_corazon_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_q_corazon_negro");
	var dropLoc = document.getElementById("q_corazon_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_q_corazon_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_q_diamante_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_q_diamante_rojo");
	var dropLoc = document.getElementById("q_diamante_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_q_diamante_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_q_trebol_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_q_trebol_negro");
	var dropLoc = document.getElementById("q_trebol_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_q_trebol_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_k_corazon_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_k_corazon_rojo");
	var dropLoc = document.getElementById("k_corazon_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_k_corazon_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_k_corazon_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_k_corazon_negro");
	var dropLoc = document.getElementById("k_corazon_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_k_corazon_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_k_diamante_rojo()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_k_diamante_rojo");
	var dropLoc = document.getElementById("k_diamante_rojo");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_k_diamante_rojo');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");
	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
		}
	}
}
function f_k_trebol_negro()
{
	//Obtenemos los elementos agarrados y ubicación donde se va a dejar
	var dragItem = document.getElementById("id_k_trebol_negro");
	var dropLoc = document.getElementById("k_trebol_negro");

	//3. Si necesitamos comunicarnos entre los eventos es necesario colocar la misma variable (En este caso es event)
	dragItem.ondragstart = function(evt)
	{	
		//Aquí colocamos los datos que se quieren enviar a detectar
		evt.dataTransfer.setData('key','id_k_trebol_negro');
		console.log("Se está arrastrando el elemento");
	}
	dropLoc.ondragover = function(evt)
	{
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se está arrastrando encima");

	}
	dropLoc.ondrop =function(evt)
	{
		
		var dropItem= evt.dataTransfer.getData('key');
		//Este evento es el que detecta la ubicación del elemento
		evt.preventDefault();
		console.log("Se soltó en el lugar correcto");
		console.log(dropItem);
		//Se obtiene la carta o elemento que se va a replicar en el espacio
		var myElement = document.getElementById(dropItem);
		var myNewElement = document.createElement('img');
		myNewElement.src=myElement.src;
		//Con esto agrego el contenedor de la imagen
		dropLoc.appendChild(myNewElement);
		contador=contador+1;
		if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");

		}	
	}
}
var contador=0;
if(contador==52||contador>52)
		{
			alert("Felicitaciones, has ganado");
			
		}	
f_as_corazon_rojo();
f_as_corazon_negro();
f_as_diamante_rojo();
f_as_trebol_negro();
f_2_corazon_rojo();
f_2_corazon_negro();
f_2_diamante_rojo();
f_2_trebol_negro();
f_3_corazon_rojo();
f_3_corazon_negro();
f_3_diamante_rojo();
f_3_trebol_negro();
f_4_corazon_rojo();
f_4_corazon_negro();
f_4_diamante_rojo();
f_4_trebol_negro();
f_5_corazon_rojo();
f_5_corazon_negro();
f_5_diamante_rojo();
f_5_trebol_negro();
f_6_corazon_rojo();
f_6_corazon_negro();
f_6_diamante_rojo();
f_6_trebol_negro();
f_7_corazon_rojo();
f_7_corazon_negro();
f_7_diamante_rojo();
f_7_trebol_negro();
f_8_corazon_rojo();
f_8_corazon_negro();
f_8_diamante_rojo();
f_8_trebol_negro();
f_9_corazon_rojo();
f_9_corazon_negro();
f_9_diamante_rojo();
f_9_trebol_negro();
f_10_corazon_rojo();
f_10_corazon_negro();
f_10_diamante_rojo();
f_10_trebol_negro();
f_j_corazon_rojo();
f_j_corazon_negro();
f_j_diamante_rojo();
f_j_trebol_negro();
f_q_corazon_rojo();
f_q_corazon_negro();
f_q_diamante_rojo();
f_q_trebol_negro();
f_k_corazon_rojo();
f_k_corazon_negro();
f_k_diamante_rojo();
f_k_trebol_negro();


