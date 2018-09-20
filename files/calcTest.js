const equate = document.getElementById('Calc');
var dt = parseInt(districtTotal.value);


equate.addEventListener('click',()=>{
    districtTotal.value = parseInt(industrial.value) + parseInt(residential.value)+ parseInt(recreation.value) + parseInt(comercial.value)   
});