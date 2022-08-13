const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');
const btnCalcular = document.querySelector('#btnCalcular');
const formulario = document.querySelector('#formulario');
const historial = document.querySelector('#historial');
const pHistorial = document.querySelector('#pHistorial');

formulario.addEventListener('submit', calcular);
historial.addEventListener('click', mostrarHistorial);

function mostrarHistorial(){
    const hNum1 = "Numeros 1: "+localStorage.getItem('num1');
    const hNum2 = "Numeros 2: "+localStorage.getItem('num2');
    const hResult = "Resultado: "+localStorage.getItem('resultado');
    
    pHistorial.innerHTML = hNum1+"<br />"+hNum2+"<br />"+hResult;
}

function calcular(event){
    event.preventDefault();
    const suma = Number(valor1.value)+Number(valor2.value);
    
    const txtResultado = document.createElement('p');
    txtResultado.setAttribute('id','resultado');
    txtResultado.innerHTML = "El resultado de la suma es: "+suma;
    formulario.append(txtResultado);

    const btn2 = document.createElement('button');
    btn2.innerText ="Borrar";
    btn2.setAttribute('id','btn2');
    btn2.setAttribute('onclick','btnBorrar()');
    formulario.append(btn2);
    
    const historialNum1 = localStorage.getItem('num1');
    const historialNum2 = localStorage.getItem('num2');   
    const historialResult = localStorage.getItem('resultado');
    
    if (suma != 0) {
        localStorage.setItem('num1',(historialNum1== null ? "" : historialNum1+"-") + valor1.value);
        localStorage.setItem('num2',(historialNum2== null ? "" : historialNum2+"-")+valor2.value);
        localStorage.setItem('resultado',(historialResult== null ? "" : historialResult+"-")+suma);        
    }
    
    btnCalcular.remove();
}


function btnBorrar(){
    resultado.remove();
    btn2.remove();
    valor1.value = "";
    valor2.value = "";
    formulario.append(btnCalcular);
}
