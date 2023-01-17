const convertFahrenheit=()=>{
    var celsius=parseFloat(document.querySelector('#celsius').value);
    var fahrenheitResult =(9/5*celsius)+32;
    var a=fahrenheitResult.toFixed(4);
    document.querySelector('#fahrenheit').value=a;
}
const convertCelsius=()=>{
    var fahrenheit=parseFloat(document.querySelector('#fahrenheit').value);
    var celsiusResult = (fahrenheit-32)*(5/9);
    var b=celsiusResult.toFixed(4);
    document.querySelector('#celsius').value=b;
}
const reset=()=>{
    document.querySelector('#celsius').value='';
    document.querySelector('#fahrenheit').value='';
}
