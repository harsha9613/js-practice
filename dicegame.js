let Eeswar= Math.floor(Math.random()*6)+1;
let harsha= Math.floor(Math.random()*6)+1;
console.log("Eeswar rolled: ",Eeswar,"harsha rolled: ",harsha);
if(Eeswar > harsha){
    console.log("Eeswar wins");
}else if(harsha > Eeswar){
    console.log("harsha wins");
}else{
    console.log("It's a tie");
}