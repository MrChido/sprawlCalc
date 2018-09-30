//HTMLxJS links
const TownCon= document.getElementById("tcCalc");
const District = document.getElementById("Dcalc");
const eGame = document.getElementById("result");
const hardMode = document.getElementById("hardM");

TownCon.addEventListener('click', ()=>{
    tcT.value= parseInt(tc1.value) + parseInt(tc2.value) + parseInt(tc3.value)
  });
TownCon.addEventListener('dblclick', ()=>{
    districtTotal.value="";
    residential.value="";
    industrial.value="";
    comercial.value="";
    roadCount.value="";
    wrecker.value="";
    consI.value="";
    poiB.value="";
    sRate.value="";
    EGS.value="";
    tcT.value="";
    hardM.checked = false;
    tc1.value="";
    tc2.value="";
    tc3.value="";
});
District.addEventListener('click', ()=>{
    districtTotal.value=parseInt(residential.value)+ parseInt(industrial.value)+ parseInt(recreation.value)+ parseInt(comercial.value)
    
});
District.addEventListener('dblclick',()=>{
    districtTotal.value="";
    residential.value="";
    industrial.value="";
    comercial.value="";
    roadCount.value="";
    wrecker.value="";
    consI.value="";
    poiB.value="";
    sRate.value="";
    EGS.value="";
    tcT.value="";
    hardM.checked = false;
    tc1.value="";
    tc2.value="";
    tc3.value="";
});
eGame.addEventListener('click', ()=>{
    
    EGS.value = districtTotal.value - parseInt(roadCount.value)+ parseInt(wrecker.value)+ parseInt(consI.value)+ parseInt(poiB.value)
    sRate.value = (EGS.value /tcT.value)* 100
});
hardMode.addEventListener('click', ()=>{
    if(hardM.checked = true){
        alert("Keep the highest value and replace the rest with '0's and re-evaluate. (I tried to save you the leg work but failed. Sorry.)")
    }
});
eGame.addEventListener('dblclick', ()=>{
    districtTotal.value="";
    residential.value="";
    industrial.value="";
    comercial.value="";
    roadCount.value="";
    wrecker.value="";
    consI.value="";
    poiB.value="";
    sRate.value="";
    EGS.value="";
    tcT.value="";
    hardM.checked = false;
    tc1.value="";
    tc2.value="";
    tc3.value="";

});