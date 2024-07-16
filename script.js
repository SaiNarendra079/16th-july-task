//for loop program
let a = 5;
for (let i = 1; i <= 10; i++)
    console.log(a + " * " + i +" = " + a * i);

//sum of even numbers between 1 to 50

let sum=0
for(i=1;i<=50;i++)
{
  if(i%2===0)
    sum=sum+i
}
console.log('sum of even numbers between 1 to 50: '+ sum)

//while loop to print prime numbers between 2 to 20
let N=2
let P
while(N<=20){
  P=1
  let Count=0
  while(P<=N){
    if(N%P==0){
      Count++
    }
    P++
  }
  if(Count==2){
    console.log(N+' is a prime number')
  }N++
}

//while loop to print odd numbers

let Z=1
let sum1=0
while(Z<=20){
  if(Z%2 !== 0)
    {
      sum1=sum1+Z
    }
    Z++
}
console.log('sum of odd numbers between 1 to 20: '+sum1)

//factorial program

let fact=1
let X=5
let Y=1
while(Y<=X){
  fact=fact*Y
  Y++
}
console.log('factorial of 5 is: '+fact)