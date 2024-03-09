// const display = document.querySelector(".display")
// const buttons = document.querySelectorAll("button")
// const specialchars = ["%","+","-","*","/","="]
// let output = "";
// // define function to calculate based on button clicked
// const calculate = (btnvalue) => {
//     if(btnvalue === "=" && output !== ""){
//         output =eval(output.replace("%","/100"))
//     }else if(btnvalue === "AC"){
//         output = ""
//     }
//     else if(btnvalue === "Del"){
//         output = output.toString().slice(0, -1);
//     }else{
//         if(output === "" && specialchars.includes(btnvalue)) return;
//         output += btnvalue
//     }
//     display.value = output
// }


// //Add EventListener to buttons, call calculate() on click
// buttons.forEach((button)=>{
//     //buttons click listeener calls calculate() with dataset value as argument
//    button.addEventListener("click", (e) => calculate(e.target.dataset.value));

// })