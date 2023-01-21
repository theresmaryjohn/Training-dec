function factR(n) {
    if(n<=0)
    return 1;
    console.log(n);
    return n*factR(n-1);
}
console.log(factR(6));
