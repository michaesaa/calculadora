// agrega en la pantalla el valor del boton en la calculadora 
function agregar (valor){
  document.getElementById('pantalla').value += valor
}
 
// asi se calcula 
function calcular (){
  const valorPantalla = document.getElementById('pantalla').value
  const resultado = eval(valorPantalla)
  document.getElementById('pantalla').value = resultado 
}

// asi se vacia la pantalla 
function borrar (){
 document.getElementById('pantalla').value = ''
}