//  28 november
// console.log("hello world");
// for(let i=1; i<=10; i++){
// console.log(i);
// } 

// const a=5;
// const b=10;

// const sum=a+b;
// console.log(sum);

// const c=parseInt(prompt('enter your number a'));
// const d=parseInt(prompt('enter your name b'));
// const sum = c+d;
// console.log(sum);

// const number= parseInt(prompt('enter your number: '));
// let sum=0;
// for(let i =1; i<=number; i++){
//     sum=sum+i;
// }
// console.log('sum of n ' + sum);

// let a= prompt('enter your name a ');
// let b= prompt('enter your name b');

// let temp;
// temp =a;
// a=b;
// b=temp;

// console.log("value of a after swapping: "+ a);
// console.log("value of a after swapping: " + b);

// const number=parseInt(prompt('enter your number: '));
// let sum=0;
// for(let i=1; i<=number; i++){
//     sum=sum+i;
// }
// console.log('sum of n = '+sum);

let arr1=['a','m','a','n']
let arr2=['m','a','a','n']
arr1.sort();
arr2.sort();
let check = true;
for(let i = 0; i<4; i++){
    if(arr1[i] !=arr2[i]){
        check = false;
        break;
    }
}
if(check == true){
    console.log(true);
}
else{
    console.log(false)
}