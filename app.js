let password = document.getElementById('passwordInput')

function checkPasswordLength(){
    let passwordValue = password.value
    let lengthCheck = document.getElementById('lengthCheck')

    if (passwordValue.length >= 8){
        lengthCheck.style.color = "green"
    }
    else {
        lengthCheck.style.color = ''
    }
}

function checkCapitalLetters(){
    let passwordValue = password.value
    let capitalCheck = document.getElementById('capitalCheck')
    if (/[A-Z]/.test(passwordValue)){
        capitalCheck.style.color = 'green'
    }
    else{
        capitalCheck.style.color = ''
    }
}

function checkNumber(){
    let passwordValue = password.value
    let numberCheck = document.getElementById('numberCheck')
    if(/[0-9]/.test(passwordValue)){
        numberCheck.style.color = 'green'
    }
    else{
        numberCheck.style.color = ''
    }
}

function checkSpecialCharacter(){
    let passwordValue = password.value
    let specialCharCheck = document.getElementById('specialCheck')

    if(/[^A-Za-z0-9]/.test(passwordValue)){
        specialCharCheck.style.color = 'green'
        console.log("special character found")
    }
    else {
        specialCharCheck.style.color = 'red'
        console.log("no special character found")
    }
}

function getPasswordStrength(){
   checkPasswordLength()
   checkCapitalLetters()
   checkNumber()
   checkSpecialCharacter()

   let lengthCheckPassed = document.getElementById('lengthCheck').style.color === "green"
   let capitalCheckPassed = document.getElementById('capitalCheck').style.color === "green"
   let numberCheckPassed = document.getElementById('numberCheck').style.color === "green"
   let specialCharCheckPassed = document.getElementById('specialCheck').style.color === "green"


   let successMessage = document.getElementById('successMessage')
   if(lengthCheckPassed && capitalCheckPassed && numberCheckPassed && specialCharCheckPassed) {
       successMessage.style.display = 'block'
   } 
   else {
       successMessage.style.display = 'none'
   }
}




password.addEventListener('keyup', getPasswordStrength)