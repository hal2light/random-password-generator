const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordElOne = document.getElementById("password-el-one")
let passwordElTwo = document.getElementById("password-el-two")

// Store the last generated passwords
let lastPasswordOne = "";
let lastPasswordTwo = "";

function generatePassword(){
    passwordElOne.textContent = ""
    passwordElTwo.textContent = ""
    lastPasswordOne = "";
    lastPasswordTwo = "";
    for(let i = 0; i < 15; i++){
        let randomIndexOne = Math.floor((Math.random() * characters.length))
        let randomIndexTwo = Math.floor((Math.random() * characters.length))
        lastPasswordOne += characters[randomIndexOne];
        lastPasswordTwo += characters[randomIndexTwo];
    }
    passwordElOne.textContent = lastPasswordOne;
    passwordElTwo.textContent = lastPasswordTwo;
}

passwordElOne.addEventListener("click", () => {
    navigator.clipboard.writeText(lastPasswordOne)
    .then(() => {
        passwordElOne.textContent = "Copied!";
        setTimeout(() => {
            passwordElOne.textContent = lastPasswordOne;
        }, 1500);
    })
    .catch(err => {
        alert("Failed to copy: " + err);
    });
});
passwordElTwo.addEventListener("click", () => {
    navigator.clipboard.writeText(lastPasswordTwo)
    .then(() => {
        passwordElTwo.textContent = "Copied!";
        setTimeout(() => {
            passwordElTwo.textContent = lastPasswordTwo;
        }, 1500);
    })
    .catch(err => {
        alert("Failed to copy: " + err);
    });
});