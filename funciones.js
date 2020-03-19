	
	var capaMensaje; 
	
	var aleatorio;
	
	var lasCapas;
	
	var arrayCartas;
	
	function f_inicio() {
		
		capaMensaje = document.getElementById("mensaje");
		capaMensaje.innerHTML = "GANAS CON EL AS DE ORO";
		document.getElementById("mostrar").disabled = true;
		
		}

	function f_aviso(carta) {

		//alert(" Estara en la ... " + carta);
	
		capaMensaje.innerHTML = "¿Estará en la " + carta + " ?...";
		
		}

	function f_otro() {
	
		capaMensaje.innerHTML = " !!! ELIGE UNA CARTA !!! ";
	
		}
	
	 function f_quienFue(event) {
			
	     	// PREMIO ALEATORIO:
			 
			 var arrayCartas = ["as_de copas", "as_espadas", "as_bastos"];
		
			 var aleatorio = parseInt( Math.random() * arrayCartas.length);
	     	
	     	
	     	alert("ALEATORIO ... " + aleatorio);
	     	
	     	arrayCartas[aleatorio] = "as_oro.jpg";

	     		//alert(arrayCartas[0] + " " + arrayCartas[1] + " " + arrayCartas[2]);
	     	
	     		alert(arrayCartas.join(" "));

	     	var capaPulsada = event.target;
	     	
	     	var identificador = capaPulsada.id;
     	
/////////////////////////////// TOMBOLA //////////////////////////////////////
		  
	     	//aleatorio = identificador;	// FORZAR EL PREMIO.

	    	
	    	
	   		// DESHABILITAR EL EVENTO ONCLICK:	        	
	   		//controlGrafico.onclick = null;		// sólo la capa pulsada ahora mismo.
	   		
	   		lasCapas = document.getElementsByName("carta"); // todas las capas
	   		
	   		//alert("cuantas capas: " + lasCapas.length);
	   		//alert("lasCapas: " + lasCapas);
	   		
	   		
	   		for (var indice=0; indice<lasCapas.length; indice++) {
	   			lasCapas[indice].onclick = null;
			}
	   		
	   		/* EVITAMOS REPETIR CÓDIGO:
	       		lasCapas[0].onclick = null;
	       		lasCapas[1].onclick = null;
	       		lasCapas[2].onclick = null;
   		*/
  
    	
    	if(aleatorio == identificador) {
    		
    		alert("!!! PREMIO !!!");	        	
    		arrayCartas.innerHTML = "<img src='imagenes/as_oro.jpg'/>";

    	} else {
    		
    		alert("- - - NADA - - -");
    		arrayCartas.innerHTML = "<img src='imagenes/noPremio.jpg'/>";

    	}
    	
		// ACTIVAR EL BOTÓN QUE NOS PERMITE VER QUÉ HAY REALMENTE EN CADA CAPA.
		document.getElementById("mostrar").disabled = false;
    	
    }
    
    
    function f_mostrar() {
    	
    	//alert("MOSTRAR LAS CAPAS");
    	
   		for (var indice=0; indice<lasCapas.length; indice++) {
			
   			//alert("INDICE ... " + indice);
   			
   			if( (indice+1) == aleatorio ) {
   				
   				lasCapas[indice].innerHTML="<img src='imagenes/cofreTesoro.jpg'/>";
   				
   			} 
   			
   			else {	 
   				
   				lasCapas[indice].innerHTML="<img src='imagenes/noPremio.jpg'/>";
   			}
		}
    	
   		var botonMostrar = document.getElementById("mostrar"); 
   			botonMostrar.value="RECARGAR";
   			botonMostrar.onclick = function nuevoJuego() { 
   														alert("NUEVO JUEGO");
   														location.reload();
   													 };
   		
    }