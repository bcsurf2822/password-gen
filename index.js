const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passOne = document.getElementById("p-one");
const passTwo = document.getElementById("p-two");


for (let i = 0; i < characters.length; i++) {
  console.log()

}

function iClick() {
  let passWordNumber = 10;
  let newPassWord1 = [];
  let newPassWord2 = [];

  for(let i = 0; i < passWordNumber; i++) {
    newPassWord1.push(characters[Math.floor(Math.random() * characters.length)])
    newPassWord2.push(characters[Math.floor(Math.random() * characters.length)])
  }
  passOne.innerText = newPassWord1.join("  ");
  passTwo.innerText = newPassWord2.join("  ")
}