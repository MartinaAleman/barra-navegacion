const nombre = document.getElementById ("nombre");
const contraseña = document.getElementById ("contraseña");
const email = document.getElementById ("email");
const enviar = document.getElementById ("enviar");
const error = document.getElementById ("error");

enviar.addEventListener("click aqui",enviarFun);
function enviarFun (){
    const nombreLet = nombre.value
    const emailLet = email.value
    const contraseñaLet = contraseña.value

if (nombreLet == "marti" ||
contraseñaLet == "maroct20" ||
emailLet == "alemanmartina47@gmail.com");
{
    error.innerText = "a ingresado correctamente"
}

}