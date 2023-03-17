// ==== SEND EMAIL ====
const contactForm = document.getElementById("contact-form")
const contactName = document.getElementById("contact-name")
const contactEmail = document.getElementById('contact-email')
const contactMessage = document.getElementById('contact-message')
const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_t3yztyg', 'template_23xy5nq', '#contact-form', 'CXO_7BtFH0n7tAUzR')
        .then(function () {
            alert(`Message Sent ! 
Thank You .`);
            contactName.value = ""
            contactEmail.value = ""
            contactMessage.value = ""
        }, function (error) {
            alert('FAILED...', error);
        });
}

contactForm.addEventListener('submit', sendEmail)
