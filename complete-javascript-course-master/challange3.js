let dolphins_score=96+108+89
let koalas_score=96+180+100
let avg_dolphins=(dolphins_score/3)
let avg_koalas=(koalas_score/3)

console.log(dolphins_score, koalas_score);
console.log(avg_dolphins, avg_koalas);
if(avg_dolphins>avg_koalas && avg_dolphins>=100){
    console.log('dolphins won');
}
else if(avg_dolphins===avg_koalas ){
    console.log('there is a draw and both wins');
}

else{
    console.log('koalas won');
}

