/*jshint esversion: 6 */
/*globals $:false */

let contactForm = document.getElementById("contact-form");

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
                    $('#emailModal').modal('show');

                //    confirm("thank you so much for sending us your email", response)
                },
                function (error) {
                   confirm("We're sorry, your message couldn't be sent at this time", error);
                }
            );
        return false; //to block from loading a new page
    }

/* 
credit code for email validation
https://www.w3resource.com/javascript/form/email-validation.php
only alert user if email adress is showing as invalid
*/
function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {
        document.form.email.focus();
        return true;
    } else {
        alert("You have entered an invalid email address!");
        document.form.email.focus();
        return false;
    }}