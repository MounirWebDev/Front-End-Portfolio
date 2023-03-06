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

iconTheme.forEach((item) => {
    item.addEventListener('click', activeIcon)
})
function activeIcon(event) {
    // 1- Current Theme Icon
    iconTheme.forEach((item) => {
        item.classList.remove('activeTheme')
        this.classList.add('activeTheme')
    })
    // 2- Active Dark Theme
    const dark = (this.classList.contains('ri-moon-line'))
    dark ? darkMode() : normalMode()
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

color.forEach((clr) => {
    clr.addEventListener('click', pickColor)
})
function pickColor() {
    const currentColor = '#' + (this.className.split(' ')[0])
    console.log(currentColor)
    root.style.setProperty('--titleColor', currentColor)
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

