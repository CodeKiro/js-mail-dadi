const numbers = [];
for (let index = 0; index < 6; index++) {
    const userNumber =Number.parseInt(prompt('scrivi un numero'),10);
    if(userNumber %2 === 0){
        numbers.push(userNumber);
    }
}
console.log(numbers);