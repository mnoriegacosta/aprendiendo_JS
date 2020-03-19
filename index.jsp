<%@page contentType="text/html" pageEncoding="UTF-8"%>


<!DOCTYPE HTML>


<html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>TU JUEGO</title>
        
        <link rel="stylesheet" type="text/css" href="css/estilos.css">
   
        <script type="text/javascript" src="js/funciones.js"></script>    
 
        
    </head>
	
	
    <body onload="f_inicio();">
    
        <div align="center">

			<h1 class="cabecera"> ENCUENTRA EL AS DE ORO </h1>

				    <div id="mensaje"></div>

					<nav>
					<img name="carta" id="0" src="imagenes/carta_del_reves.jpg" onmouseover="f_aviso('carta1');"
																		onmouseout="f_otro();"
																		onclick="f_quienFue(event);"/>
															
																	
															
												
												
					<img name="carta" id="1" src="imagenes/carta_del_reves.jpg" onmouseover="f_aviso('carta2');"
																		onmouseout="f_otro();"
																		onclick="f_quienFue(event);"/>
															
															
														
																
												
					<img name="carta" id="2" src="imagenes/carta_del_reves.jpg" onmouseover="f_aviso('carta3');"
																		onmouseout="f_otro();"
																		onclick="f_quienFue(event);"/>
																		
				</nav>
				
				<div id="dinero"></div>
				
			<br/>
				
		<input type="button"  id="mostrar" value="MOSTRAR CARTAS" 
										 onclick="f_mostrar();"/>
       
        </div>
   
    </body>

</html>