const userNumber = Math.floor( Math.random()*6) +1;
const pcNumber = Math.floor( Math.random()*6) +1;
if ( userNumber === pcNumber){
    console.log('Non ha vinto nessuno',userNumber, pcNumber);
} else if ( userNumber > pcNumber){
    console.log('Ha vinto il giocatore',userNumber, pcNumber);
}   else{
    console.log('vince il pc',userNumber, pcNumber);
}