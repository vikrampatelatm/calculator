/*const userInput =  document.querySelector("#user_input");
var expression = "";

press = (num) => {
  expression += num;
  userInput.value = expression;
}

equal = () => {
  userInput.value = eval(expression);
  expression = "";
}

erase = () => {
  expression = "";
  userInput.value = expression;
}
*/
const input= document.querySelector("#user_input");
var expression ="";

press =(num) => {
  expression += num;
  input.value=expression;
}
equal=()=>{
  input.value=eval(expression);
  expression="";
}
erase =()=>{
  expression="";
  input=expression
}