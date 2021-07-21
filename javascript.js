let actual = [0];

function DarNumero(numeroApretado) {
    let valor = numeroApretado
    console.log(valor);
    console.log(actual);


    actual.push(valor);
    console.log(actual);

    /*Comprobar rapido historial*/
    mostrarHistorial();
    obtenerHistorial();
}
/* ACTUAL */
function mostrarActual() {
    document.getElementById("actual").textContent;
    console.log("soy mostrar actual" + document.getElementById(actual).textContent);
}
/* HISTORIAL */

function obtenerHistorial() {
    obtenido = new Number(document.getElementById("historial").innerText);
    /*C'omo paso lo obtenido a texto? uso "as"?*/
    /*Usando Number() */
    console.log(obtenido);
    /* let juntado = int.Parse(string.Join("", actual));
    console.log(juntado); */
}

function mostrarHistorial() {
    document.getElementById("historial").innerText;
    let comproHistorial = document.getElementById("historial").innerText;
    console.log("Soy historial: " + comproHistorial);

}

/* while (actual.length > 1) {
    mostrarActual();
} */