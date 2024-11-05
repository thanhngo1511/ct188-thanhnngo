const passwordIcon = document.querySelectorAll('.password__icon')
const authPassword = document.querySelectorAll('.auth__password')

// change hidden password to visible password
for (var i = 0; i < passwordIcon.length; ++i) {
    passwordIcon[i].addEventListener('click', (i) => {
        const lastArray = i.target.classList.length - 1
        if (i.target.classList[lastArray] == 'bi-eye-slash') {
            i.target.classList.remove('bi-eye-slash')
            i.target.classList.add('bi-eye')
            i.currentTarget.parentNode.querySelector('input').type = 'text'
        } else {
            i.target.classList.add('bi-eye-slash')
            i.target.classList.remove('bi-eye')
            i.currentTarget.parentNode.querySelector('input').type = 'password'
        }
    });
}

// Script Đăng nhập 
const formLog = document.getElementById("formLog");
const emailLog = document.getElementById("emailLog");
const passwordLog = document.getElementById("passwordLog");
const logError = document.getElementById("logError");

formLog.addEventListener("submit",function(e) {
    
    e.preventDefault();


    const userLocal = JSON.parse(localStorage.getItem("users")) || [];

    const findUsers = userLocal.find(
        user => 
            user.email === emailLog.value &&
            user.password === passwordLog.value);
    
    if(!findUsers) {
        logError.style.display = "block";
    }else   window.location.href = "ct188-nmweb-08/sp tre em/trangchu.html";

})