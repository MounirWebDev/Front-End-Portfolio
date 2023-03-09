//  ==== OPEN SETTINGS =====
const body = document.querySelector('body')
const settings = document.querySelector('.settings')
const openSett = document.querySelector('.openSett')

openSett.addEventListener('click', openIt)
function openIt() {
    settings.classList.add('open')
    settings.classList.remove('close')
}

//  ==== CLOSE SETTINGS =====
const closeSett = document.querySelector('.closeSett')

settings.addEventListener('mouseleave', closeIt)
closeSett.addEventListener('click', closeIt)
function closeIt() {
    settings.classList.add('close')
    settings.classList.remove('open')
}

// ==== PICK THEME ====
const root = document.querySelector(':root')
const hdr = document.querySelector('header')
const iconTheme = document.querySelectorAll('.mode i')

// 4- Check The Dark Variable In The Local Storage
if (window.localStorage.getItem('dark-mode') === 'true'){
    iconTheme.forEach((icon) => {
        icon.classList.remove('activeTheme')
        iconTheme[0].classList.add('activeTheme')
    })
    darkMode()
} else{
    iconTheme.forEach((icon) => {
        icon.classList.remove('activeTheme')
        iconTheme[1].classList.add('activeTheme')
    })
    normalMode()
}
iconTheme.forEach((item) => {
    item.addEventListener('click', activeIcon)
})
function activeIcon(event) {
    // 1- Current Theme Icon
    iconTheme.forEach((icon) => {
        icon.classList.remove('activeTheme')
        this.classList.add('activeTheme')
    })
    // 2- Active Dark Theme
    const dark = (this.classList.contains('ri-moon-line'))
    dark ? darkMode() : normalMode()
    // 3- Put The Value Of The Dark Varible In The Local Storge
    window.localStorage.setItem('dark-mode', dark);
}
function darkMode() {
    root.style.setProperty('--bodyColor', '#181a1b')
    root.style.setProperty('--containerColor', '#1d1f20')
    root.style.setProperty('--textColor', '#a2a6a9')
    root.style.setProperty('--secondTitleColor', '#f2f2f3')
    hdr.style.boxShadow = '0 4px 20px hsla(207, 24%, 8%, .4)'
    hdr.style.backgroundColor = 'var(--containerColor)'
}
function normalMode() {
    root.style.setProperty('--bodyColor', '#fcfcfd')
    root.style.setProperty('--containerColor', '#f2f2f3')
    root.style.setProperty('--textColor', '#45484a')
    root.style.setProperty('--secondTitleColor', '#27292a')
    hdr.style.boxShadow = '0 4px 20px hsla(207, 24%, 35%, .1)'
    hdr.style.backgroundColor = 'var(--bodyColor)'
}

// ==== PICK COLOR ====
const colors = document.querySelector('.colors')
const color = document.querySelectorAll('.colors div div')

// 2- Check The title-color Variable In The Local Storage
if(window.localStorage.getItem('title-color')){
    root.style.setProperty('--titleColor', window.localStorage.getItem('title-color'))
}
color.forEach((clr) => {
    clr.addEventListener('click', pickColor)
})
function pickColor() {
    const currentColor = '#' + (this.className.split(' ')[0])

    root.style.setProperty('--titleColor', currentColor)
    // 1- Add Current Color To The Local Storage
    window.localStorage.setItem('title-color', currentColor);
}

// ==== TO THE TOP PAGE ====
const topPage = document.querySelector('.topPage');
const main = document.querySelector('main')
// 1- Display The Top Arrow Div
window.addEventListener('scroll', () => {
    let Y = this.pageYOffset

    Y > 600 ? topPage.style.display = 'flex' : topPage.style.display = 'none'
})
// 2- Go To The Top
topPage.addEventListener('click', () => {
    main.scrollIntoView()
})

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

