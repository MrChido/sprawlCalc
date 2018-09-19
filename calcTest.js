const equate = document.getElementById('Calc');
var dt = parseInt(districtTotal.value);


equate.addEventListener('click',()=>{
    dt = parseInt(industrial.value) + parseInt(residential.value)+ parseInt(recreation.value) + parseInt(comercial.value)   
});