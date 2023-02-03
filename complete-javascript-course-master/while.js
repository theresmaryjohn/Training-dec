// for (let rep = 1; rep <= 10; rep++) {
// console.log(`lifting weights repetition ${rep}`);
// }
//implementing the above with while loop
//for while loop we can specify only a condition
//the while loop will run when the condition is true
//and we need to manually specify repetions and condition

// let rep=1;
// while(rep<=10){
//     console.log(`lifting weights repetition ${rep}`);
//     rep++
// }
//roll a dice and keep rolling a dice until we get 6
//and when we get 6 stop. keep rolling the dice until the num is not 6

let diceNum = Math.ceil(Math.random() * 6); //o/p is 0-6

//while loop doesnt particularly need conter-we dont know how many times it will run or where it will start
// while(diceNum !==6){
//     //if not 6 each time loop runs
//     console.log(`You rolled a ${diceNum}`) ;
//     //upto here is an infinite loop
//     diceNum=Math.ceil(Math.random()*6);
//     if (diceNum==6)
//     console.log('loop is about to end.....');
// }

//coding challange

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

for (let i =0; i< bills.length;i++) {
    
    const tip=calcTip(bills[i])
    tips.push(tip)
    total.push(tip+bills[i])
}
console.log(bills,tips,total);