document.querySelector('#form').addEventListener('submit' , (e) => {
    e.preventDefault();
    var isValid = validateForm();
    if(isValid) {
        var emailRes = sendEmail();
    }
    if(emailRes) {
       sheetSubmission();
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
   if (name.match(/^[A-Za-z]\s{1}[A-Za-z]$/)) {
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
   if (!email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
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
   if (!validateName() || !validateEmail() || !validatePhone())  {
       submitError.style.display = 'block';
       setTimeout(function () {
           submitError.style.display = 'none';
       }, 3000);
       return false;
   }
   return true;
}

function sendEmail() {
   const formData = new FormData(form) // got formdata
   const FirstName = formData.get('name')
   const Email = formData.get('email')
   const Message = formData.get('message')

   const body = 
   `FirstName=${FirstName}
    Email=${Email}
    Message = ${Message}`
    
   // created body string 
 
   const uri = `mailto:fahadmanoly@gmail.com?body=${encodeURIComponent(body)}`;
   // created final uri to redirect to
    window.location.href = uri;
    return true;
}



const myForm = document.querySelector("#form") ;


function sheetSubmission() {
   console.log("Hello");
   const scriptURL = 'https://script.google.com/macros/s/AKfycbwhlK9_l3VKPOPN0kJ-z7bXxz89j69yQqNJTNQ094NErDFZ38BUKEf21beEwAhs_bNM/exec';
   const submitButton = document.querySelector("#submitButton");
   submitButton.disabled = true
 //    e.preventDefault()
   let requestBody = new FormData(myForm);
   fetch(scriptURL, { method: 'POST', body: requestBody})
     .then(response => {
     alert('Success!', response)
       submitButton.disabled = false;
     })
     .catch(error => {
       alert('Error!', error.message)
         submitButton.disabled = false;
     })
 }



//  /^[A-Za-z\._\-[0-9][A-Za-z][\.][a-z]{2,4}$/