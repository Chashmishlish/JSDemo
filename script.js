// let nameButton = document.querySelector('button');
// // store it into a variable called let then assign a value to a variable 
// nameButton.addEventListener('click', showMsg);
// //ab hum apne variable likhen ge then ek event listener add krdia 
// //click likhne ke baad hum function ka naam likhen ge showMsg
// //uske baad function call krwaen ge or curly braces me jo bhi cheez excute krni hai wo likhen ge
// //hume iske ander ek or function ko call krwana hai jiska naam hai alert 
// //alert is used for pop ups , tow jo bhi hum text likhen ge ("") iske ander wo display hoga pop-up me
// function showMsg() {
//     alert("Assalam-o-alaikum!");
// }

// 02
let nameButton = document.querySelector('button');
nameButton.addEventListener('click', inputMsg);
function inputMsg() {
    let name = prompt("Enter your name, please.");
    nameButton.textContent = 'Roll No. 1:' + name ;
}
