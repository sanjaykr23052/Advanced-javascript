function sum(name, ...input){
    console.log(input);
    document.write(`Hello ${name} : `);
    let sum=0;
    for(let i in input){
        sum+= input[i];
    }
    document.write(sum);
}
    var arr = [10,30,20,50,100];


sum("Sanjay kumar", ...input);