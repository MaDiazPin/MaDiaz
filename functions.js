function suma() {
    var A;
    var B;
    var Suma;
    
    A = parseInt(prompt("Por favor ingresar el primer valor"));
    B = parseInt(prompt("Por favor ingresar el segundo valor"));
    
    Suma = A + B;
    
    alert("El resultado de la suma es: " + Suma) 
}

function opBasicas(){
    var A;
    var B;
    var Suma;
    var Resta;
    var Mul;
    var Div;
    
    A = parseInt(prompt("Por favor ingresar el primer valor"));
    B = parseInt(prompt("Por favor ingresar el segundo valor"));
    
    Suma = A + B;
    Resta = A - B;
    Mul = A * B;
    Div = A / B;
    
    alert("El resultado de la suma es: " + Suma)  
    alert("El resultado de la resta es: " + Resta) 
    alert("El resultado de la multiplicación es: " + Mul)
    alert("El resultado de la división es: " + Div) 
}

function nMayor() {
    var A;
    var B;
    A = parseInt(prompt("Por favor ingresar el primer valor a comparar"));
    B = parseInt(prompt("Por favor ingresar el segundo valor a comparar"));

    if (A == B) {
        alert("Los valores ingresados son iguales")
    }else if (A>B){
        alert("El número mayor es " + A)
    } else{
        alert("El número mayor es: " + B)
    }

}

function nMenor() {
    var A;
    var B;
    var C;
    A = parseInt(prompt("Por favor ingresar el primer valor a comparar"));
    B = parseInt(prompt("Por favor ingresar el segundo valor a comparar"));
    C = parseInt(prompt("Por favor ingresar el tercer valor a comparar"));
    if(A == B && A == C) {
        alert("Los valores ingresados son iguales");
    } else if(A<B && B<=C) {
        alert("El número menor es: " + A)
    }else if(B<A && A<=C){
    alert("El número menor es: " + B)
    }else if(C<B && B<=A){
        alert("El número menor es: " + C);}
        else if(B<C && C<=A){
            alert("El número menor es: " + B)
        }else if(C<A&& A<=B){
            alert("El número menor es: " + C)
        }else if(A<C && C<=B){
            alert("El número menor es: " + A)

}
}

function nParoImpar() {
    var A;
    A = parseInt(prompt("Por favor ingresa el número"));
    if(A % 2 == 0){
        alert("El número es par:" + A)
    }else{
        alert("El número es impar:" + A)
    }

}

function nCuadrado(){
    var A= 0;
    var B= 0;
    A = parseInt(prompt("Por favor ingresa el número a calcular"));
    B = A*A*A;
        alert("El resultado es:"+ B)
    }

function Areatriangulo(){
    var A;
    var B;
    var AREA;
    A = parseInt(prompt("Por favor ingresa la base del triangulo:"));
    B = parseInt(prompt("Por favor ingresa la altura del triangulo:"));
    AREA = A*B /2;
        alert("El area del triangulo es:" + AREA + "cm²")
    }

function CmaM(){
    var A;
    var B;
    A = parseInt(prompt("Por favor ingresa los centimetros a convertir:"));
    B = A/100;
        alert("El resultado es:" + B + "Metro")
}

function AñoN(){
    var A;
    var B;
    var Resultado;
    A = parseInt(prompt("Por favor ingresa el año actual:"));
    B = parseInt(prompt("Por favor ingresa tu año de nacimiento:"));
    Resultado = (A - B);
        alert("Usted tiene" + " " + Resultado + " " + "Años")
}
 function InvBank(){
    var A;
    var B; 
    var C; // Intereses
    var D; // Ganancias (Valor total)
    A = parseInt(prompt("Por favor ingresa capital invertido:"));
    B = parseInt(prompt("Ingresa el # de años con tu capital invertido"));
    C = A * .24 * B;
    D = A + C;
        alert("La ganancia total por el capital invertido es $:" + D)
 }
function Promedio(){
    var A; //Calificación 1
    var B; //Calificación 2
    var C; //Calificación 3
    var D; //Calificación 4
    var E; //Calificación 5
    var F; //Promedio
    A = parseFloat (prompt("Por favor ingresa la primer calificación"));
    B = parseFloat (prompt("Por favor ingresa la segunda calificación"));
    C = parseFloat (prompt("Por favor ingresa la tercera calificación"));
    D = parseFloat (prompt("Por favor ingresa la cuarta calificación"));
    E = parseFloat (prompt("Por favor ingresa la quinta calificación"));
    F = (A+B+C+D+E) / 5
        alert("El promedio del estudiante es:" + F)
    if(F>=3.0 && F <=5.0){
        alert("Aprobado")
    }
    if(F<=2.9){
        alert("Reprobado")
    }
    else {
        alert("Los valores ingresados son muy altos")
    }
    
}

function Fruteria(){
    var A; // Kilos de manzana
    var B; // Precio del kilo
    var C; // Valor total 
    var D; // Descuento
    var E; // TOTAL TOTAL
    A = parseInt (prompt("Por favor ingresa los kilos de manzanas"));
    B = parseInt (prompt("Por favor ingresa el precio del kilo"));
    C = (A*B);
    D = 0;
    if(A<=2){
        alert("El precio total es $:" + C + "Con un descuento del" + D + "%")
    }else if(A>= 3 && A <=5){
        C = A*B;
        D = C * .10;
        E = C - D;
        alert("El precio total es $:" + E + " " + "Con un descuento del 10 %")
    }else if(A>= 6 && A <=10){
        C = A*B;
        D = C * .15;
        E = C - D;
        alert("El precio total es $:" + E + " " + "Con un descuento del 15 %")
    }else if(A>= 10){
    C = A*B;
    D = C * .20;
    E = C - D;
    alert("El precio total es $:" + E + " " + "Con un descuento del 20 %")
    }
    }
