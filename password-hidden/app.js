let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let message = document.getElementById("message");
let strenght = document.getElementById("strenght");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "eye-open.png";
    }else{
        password.type = "password";
        eyeicon.src = "eye-close.png";
    }
}

password.addEventListener('input', () => {
    if (password.value.length > 0) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
    if (password.value.length < 6) {
        strenght.innerHTML = "weak :(";
        strenght.style.color = "#ff5925";
    } else if (password.value.length >= 6 && password.value.length < 12) {
        strenght.innerHTML = "medium :|";
        strenght.style.color = "yellow";
    } else if (password.value.length >= 12) {
        strenght.innerHTML = "strong ;))";
        strenght.style.color = "#26d730";
    }
})


