
document.querySelector('#form').addEventListener('submit' , (e) => {
    e.preventDefault();
    var res = validateName();
    if(res) {
        sendEmail();
    }
})

var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')

function validateName() {
    var name = document.getElementById('name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'enter valid email';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Phone Number might be 10 Digit';
        return false;
    }
    phoneError.innerHTML = '';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail()) {
        submitError.style.display = 'block';
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}

// Email verification

const form = document.getElementById('form')
// selected form from DOM


function sendEmail() {
    const formData = new FormData(form) // got formdata
    const FirstName = formData.get('name')
    const Email = formData.get('email')
  
    const body = 
    `FirstName=${FirstName}
    Email=${Email}`
    // created body string 
    
    const uri = `mailto:fahadmanoly@gmail.com?body=${encodeURIComponent(body)}`;
    // created final uri to redirect to
    window.location.href = uri
}

// form.addEventListener('form', (e) => { // added submit event listener on form
//   e.preventDefault() // preventing page reload
//   const formData = new FormData(form) // got formdata
//   const FirstName = formData.get('name')
//   const Email = formData.get('email')

//   const body = 
//   `FirstName=${FirstName}
//   Email=${Email}`
//   // created body string 
  
//   const uri = `mailto:fahadmanoly@gmail.com?body=${encodeURIComponent(body)}`;
//   // created final uri to redirect to
//   window.location.href = uri
//   // redirected to the uri
// })
