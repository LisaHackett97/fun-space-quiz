let contactForm = document.getElementById("contact-form");


// form validation 



contactForm.addEventListener('submit', handleSubmit);



// code for email validation
// https://www.w3resource.com/javascript/form/email-validation.php

function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {
        alert("Valid email address!");
        document.form.email.focus();
        return true;
    } else {
        alert("You have entered an invalid email address!");
        document.form.email.focus();
        return false;
    }

    function sendMail(contactForm) {
        emailjs.send("service_fhjfpgq", "contactForm", {
                to_name: "Lisa",
                from_name: contactForm.name.value,
                from_email: contactForm.email.value,
                message: contactForm.message.value
            })
            .then(
                function (response) {
                    // alert("thank you so much for sending us your email")

                    mess1 = 'Press Ok to Continue.';
                    math = 99;
                    x = confirm(mess1);
                    if (x == true) {
                        alert("You have clicked on Ok Button.");
                    } else {
                        alert("You have clicked on Cancel Button.");
                    }

                },
                function (error) {
                   confirm("We're sorry, your message couldn't be sent at this time")

                }
            );
        return false; //to block from loading a new page
    }

    function handleSubmit(event) {
        event.preventDefault();
        contact - form.submit();
    }


}