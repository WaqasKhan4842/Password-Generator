const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let firstPasswordEl =  document.getElementById("password-1")
let secondPasswordEl = document.getElementById("password-2")



function getRandomValue(){
    return Math.floor(Math.random()*characters.length)
}

function getRandomPassword(){
    let password = ""
    for(let i=0;i<15;i++){
        password += characters[getRandomValue()]
    }
    return password

}

function generatePassword(){
    let firstPassword = getRandomPassword()
    let secondPassword = getRandomPassword()

    firstPasswordEl.innerText = firstPassword
    secondPasswordEl.innerText = secondPassword

}





