var signUpName = document.getElementById('signupName');
var signUpEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword');
var message = document.getElementById('msg')

var signInEmail = document.getElementById('signinEmail');
var signInPassword = document.getElementById('signinPassword');

var user = [];

if (localStorage.getItem('user') != null) {
    user = JSON.parse(localStorage.getItem('user'))
    
} else {
    user = [];
}

function signUp() {
    if (signUpName.value == '' || signUpEmail.value == '' || signupPassword.value == '') {
        document.getElementById('msg').innerHTML = `<p>All Input is Required</p>`;
        
        
    } else {
        document.getElementById('msg').innerHTML = ``;
        var object = {
            name : signUpName.value,
            email : signUpEmail.value,
            pass : signupPassword.value
        }
      user.push(object);
      localStorage.setItem('user' , JSON.stringify(user));
      location.href = 'signIn.html';
    }
    
}
// var login = document.getElementById('Login');
// login.addEventListener("click" , function () {
//     if (signInEmail.value === '' || signInPassword.value === '') {
//         document.getElementById('msgError').innerHTML = '<p class="text-center">All Input is Required</p>';
//     } else {
//         var userFound = false;

//         for (var i = 0; i < user.length; i++) {
//             if (signInEmail.value === user[i].email && signInPassword.value === user[i].pass) {
//                 var Name = user[i].name;
//                 localStorage.setItem('userName', Name);
//                 location.href = 'Home.html';
//                 userFound = true;
//                 break; // Exit the loop since the user is found
//             }
//         }

//         if (!userFound) {
//             document.getElementById('msgError').innerHTML = '<p class="text-center">Invalid Email or Password</p>';
//         }
//     }
// })



document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('Login');

    if (loginButton) {
        loginButton.addEventListener('click', function (eventInfo) {
            if (signInEmail.value === '' || signInPassword.value === '') {
                        document.getElementById('msgError').innerHTML = '<p class="text-center text-white">All Input is Required</p>';
                    } else {
                        var userFound = false;
                
                        for (var i = 0; i < user.length; i++) {
                            if (signInEmail.value === user[i].email && signInPassword.value === user[i].pass) {
                                var Name = user[i].name;
                                localStorage.setItem('userName', Name);
                                location.href = 'Home.html';
                                userFound = true;
                                break; 
                            }
                        }
                
                        if (!userFound) {
                            document.getElementById('msgError').innerHTML = '<p class="text-center text-white">Invalid Email or Password</p>';
                        }
                    }
        });
    }
});





var storedUserName = localStorage.getItem('userName');
  document.getElementById('username').innerHTML = 'Welcome '  + storedUserName;


document.getElementById('Logout').addEventListener('click' , function () {
    localStorage.removeItem('userName')
})

