function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var seguir;
    
    var contadorPares = 0;
    var acumuladorTemperatura = 0;
    var contadorTemperatura = 0;
    var flag = 0;
    var mayorPeso = 0;
    var mayorMarca = 0;
    var acumuladorPeso = 0;
    var contadorpeso = 0;
    var promedioPeso = 0;
    var pesoMinimo = 0;



  do{   

        peso = parseInt(prompt("ingrese peso"));

            while(peso <= 0 || peso >= 101 || isNaN (peso))
            {
                peso = parseInt(prompt("Error, es no es un peso entre 1 y 100"));
            }

        temperatura = parseInt(prompt("Ingrese temperatura"));        
            while(temperatura <= -31 || temperatura >= 31 || isNaN(temperatura))
            {
                temperatura = parseInt(prompt("Error, esta no es una pemperatura valida"));
            }
            
        marca = prompt("Ingrese marca");

        if(temperatura % 2 == 0)
        {
            
            contadorPares++;   
        }

        if ( peso > mayorPeso || flag == 0)
        {
            mayorPeso= peso;
            mayorMarca = marca;
        }
        
        if(peso < pesoMinimo || flag == 0) 
        {
            pesoMinimo = peso;
            flag = 1;
        }    



        if(temperatura < 0 )
        {
            
            contadorTemperatura++;
        }
        
       

           


        
        
            acumuladorPeso= acumuladorPeso + peso;
            contadorpeso++

            promedioPeso = acumuladorPeso / contadorpeso;

        
        seguir = prompt("quiere continua?");

    }while(seguir == "s")        

    document.write("La cantidad de temperaturas pares. " +contadorPares+ "<br>"); 
    document.write("La marca del producto más pesado "+mayorPeso+ "<br>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados. "+contadorTemperatura+ "<br>"); 
    document.write("El promedio del peso de todos los productos "+promedioPeso+ "<br>");
    document.write("El peso minimo es: "+pesoMinimo+ "<br>");

}
