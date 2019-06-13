// Toggle Sign in (Anonymous)
function toggleSignIn() {
    var loginForm = $('#loginForm'),
        regBtn = $('#regBtn'),
        loginBtn = $('#loginBtn');
    loginBtn.click(() => {
        loginForm.css({ "left": "0%" });
    });
    
    regBtn.click(() => {
        loginForm.css({ "left": "-100%" });
    });

} toggleSignIn();