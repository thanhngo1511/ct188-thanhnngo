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


// test 
const testemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const testpassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


// Element của trang
const formReg = document.getElementById("formReg");
const usernameE = document.getElementById("username");
const emailE = document.getElementById("email");
const passwordE = document.getElementById("password");
const repasswordE = document.getElementById("repassword");

// Element lỗi
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const repasswordError = document.getElementById("repasswordError");

// lấy dữ liệu trên localStorage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];


formReg.addEventListener("submit", function(e){
    e.preventDefault();


    // thông báo lỗi khi email và mật khẩu không hợp lệ
    if (!emailE.value) {
       emailError.style.display = "block";
    }else {
        if(testemail.test(emailE.value)) {
            emailError.style.display = "none"
        }else {
            emailError.style.display = "block";
            emailError.innerHTML = "Email không đúng(Ex: example@gmail.com)";
        }
    }

    if (!passwordE.value) {
        passwordError.style.display = "block";
    }else {
        if(testpassword.test(passwordE.value)) {
            passwordError.style.display = "none";
        }else {
        passwordError.style.display = "block";
        passwordError.innerHTML = "Mật khẩu ít nhất 8 ký tự ( chữ và số)";
        }
    }

    if (!repasswordE.value) {
        repasswordError.style.display = "block";
    }else {
        repasswordError.style.display = "none";
    }



    // Kiểm tra nhập lại mật khẩu trùng khớp
    if(passwordE.value !== repasswordE.value) {
        repasswordError.style.display = "block";
        repasswordError.innerHTML = "Mật khẩu không trùng khớp";
    }else {
        repasswordError.style.display = "none";
    }


    // Có dữ liệu thì lưu lên localStorage
    if(emailE.value && passwordE.value && repasswordE.value && passwordE.value === repasswordE.value 
    && testemail.test(emailE.value) && testpassword.test(passwordE.value)) {

        // kiểm tra định dạng email
        const check = userLocal.find(user => user.email === emailE.value);
        if (check) {
            emailError.style.display = "block";
            emailError.innerHTML = "Email đã được sử dụng";
            return;
        }else {
            emailError.style.display = "none";
        }

        const user = {
            userId: Math.ceil(Math.random() * 100000000000),
            email: emailE.value,
            password: passwordE.value,
        };

        // push user vào mảng userlocal
        userLocal.push(user);

        // lưu trữ dữ liệu lên local
        localStorage.setItem("users",JSON.stringify(userLocal));

        window.location.href = "dangnhap.html";
    }
})
