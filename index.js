
function handleLogin(event) {
    event.preventDefault(); 
    let username = document.getElementById('logName').value;
    let password = document.getElementById('logPassword').value;
    console.log(`Login submitted: Username - ${username}, Password - ${password}`);
    
    
    showSuccessMessage('Login successful!');
}


function handleSignup(event) {
    event.preventDefault(); 
    let email = document.getElementById('signEmail').value;
    let username = document.getElementById('signName').value;
    let password = document.getElementById('signPassword').value;
    console.log(`Signup submitted: Email - ${email}, Username - ${username}, Password - ${password}`);
    

    showSuccessMessage('Signup successful!');
}


function showSuccessMessage(message) {
    
    let successMsg = document.createElement('div');
    successMsg.classList.add('success-message');
    successMsg.textContent = message;
   

    let formsContainer = document.querySelector('.content');
    formsContainer.insertBefore(successMsg, formsContainer.firstChild);
    
    // Remove the message after 3 seconds
    setTimeout(function() {
        successMsg.remove();
    }, 3000);
}


function switchForm(formId) {
    let forms = document.querySelectorAll('.page form');
    forms.forEach(form => {
        form.classList.remove('active');
    });
    document.querySelector(`.${formId}`).classList.add('active');
}



document.getElementById('login').addEventListener('click', function(event) {
    event.preventDefault();
    switchForm('login');
});

document.getElementById('signup').addEventListener('click', function(event) {
    event.preventDefault();
    switchForm('signup');
});
