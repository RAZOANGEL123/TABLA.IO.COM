function Circulo()
{

    let circulo = document.getElementsByName("Circulo");

    let formula;
    let formula2;

    formula=3.1416 * (circulo[0].value * circulo[0].value);
    formula2=6.2832 * (circulo[0].value);

    document.write("EL AREA ES.... "+formula+'   '+'y'+' El PERIMETRO ES....'+formula2);

    }

    function Cuadrado(){

        let cuadrado = document.getElementsByName("cuadrado");

        let Area,Perimetro;

        Area=cuadrado[0].value * cuadrado[0].value;

        Perimetro=cuadrado[0].value *4;

        alert("El Area es..... "+Area+" Y Su Perimetro es: "+Perimetro);
        }