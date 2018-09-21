//HTMLxJS links
const TownCon= document.getElementById("tcCalc");
const District = document.getElementById("Dcalc");
const eGame = document.getElementById("result");

//error messages
const Icard = "No card exists, please check again"
const Noclone = "This game contains no duplicate cards...unless someone snuck them in on the DL"


TownCon.addEventListener('click', ()=>{
    tcT.value= parseInt(tc1.value) + parseInt(tc2.value) + parseInt(tc3.value)
    //card out of bounds error
    if(tc1.value >=19 || tc1.value <=0){
        alert(Icard)
        tcT.value = "XX"
    }
    if(tc2.value >=19 || tc2.value <=0){
        alert(Icard)
        tcT.value = "XX"
    }
    if(tc3.value >=19 || tc3.value <=0){
        alert(Icard)
        tcT.value = "XX"
    }
    //duplication Error
    if(tc1.value == tc2.value || tc3.value){
        alert(Noclone)
        tcT.value = "XY"
    }
    if(tc2.value == tc1.value || tc3.value){
        alert(Noclone)
        tcT.value = "XY"
    }
    if(tc3.value == tc2.value || tc1.value){
        alert(Noclone)
        tcT.value = "XY"
    }

});
District.addEventListener('click', ()=>{
    districtTotal.value=parseInt(residential.value)+ parseInt(industrial.value)+ parseInt(recreation.value)+ parseInt(comercial.value)
});
eGame.addEventListener('click', ()=>{
    EGS.value = districtTotal.value - parseInt(roadCount.value)+ parseInt(wrecker.value)+ parseInt(consI.value)+ parseInt(poiB.value)
    sRate.value = (EGS.value /tcT.value)* 100
});