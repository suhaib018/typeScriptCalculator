
const btns = document.querySelectorAll("button"); 
const result = <HTMLElement>document.querySelector("#result")

let num1 : number = 0;
let num2 :number = 0;
let operatin:string = "";
let numberOneAssaigned : boolean = false;
  console.log(`num1 ${num1}`);
  console.log(`num2 ${num2}`);

let res :number=0;
function operationHandler (op:string) {
  let calculationResult:number = 0;
  switch(op){
    case '+':
      console.log(`num1= ${num1} num2 = ${num2}`);
      calculationResult = num1 + num2;
      console.log(`calculate result ${calculationResult}`);
      break;
    case '*':
      calculationResult = num1 * num2;
      break;
    case '-':
      calculationResult = num1 - num2;
      break;
    case '/':
      calculationResult = num1 / num2;
      break;
  }
    res = calculationResult;
}


const handleBtn = (btn: HTMLButtonElement) => {
  

  switch(btn.className){
    case "btn number":
     
      
      if (!numberOneAssaigned || operatin.length === 0) {
        num1 = +btn.innerText;
        numberOneAssaigned = true;
      }
      else {
        num2 = +btn.innerText;
        numberOneAssaigned = false;
      }
      console.log(`num1 after ${num1}`);
      console.log(`num1 after ${num2}`);

      break;
    case "btn operation":
      operatin = btn.innerText;
      break;
    case "btn equal":
      operationHandler(operatin);
      result.innerText = res.toString();
      break;
  }
}

btns.forEach((btn )=>{
  btn.addEventListener("click",() =>{handleBtn(btn)})
})