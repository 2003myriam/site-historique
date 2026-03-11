let utilisateur = document.getElementById("input1")
let password = document.getElementById("input2")
let btn = document.getElementById("btn_login")

btn.onclick = function() {

  let utiliValue = utilisateur.value
  let passValue = password.value

  let longeurInput1 = utiliValue.length
  let longeurInput2 = passValue.length

  if (longeurInput1 == 0 || longeurInput2 == 0) {
    alert("Ton mot de passe ou nom d'utilisateur est trop court")
  }
  if (longeurInput1 > 20 || longeurInput2 > 20) {
    alert("Ton mot de passe ou nom d'utilisateur est trop long")
  }
 
}