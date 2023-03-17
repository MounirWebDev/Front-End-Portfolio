// ==== CONTACT FORM AND MORE ABOUT ME ====
const contactLink = document.querySelector('.contactLink')
const closeContact = document.querySelector('.closeCont')
const showMoreAbtMe = document.getElementById('showMoreAboutMe')
const contact = document.querySelector('.contact')
const MoreAbMe = document.querySelector('.moreAboutMe')
const form = document.querySelector('form')

// 1- Open Contact Form And More About Me
contactLink.addEventListener('click', showContact)
showMoreAbtMe.addEventListener('click', showContact)
function showContact() {
    contact.style.display = 'flex'
    setTimeout(() => {
        MoreAbMe.style.transform = 'translateX(0%)'
        form.style.transform = 'translateX(0%)'
    }, 1)
}
// 2- close Contact Form And More About Me
closeContact.addEventListener('click', () => {
    MoreAbMe.style.transform = 'translateX(100%)'
    form.style.transform = 'translateX(-100%)'
    setTimeout(() => {
        contact.style.display = 'none'
    }, 200)
})
