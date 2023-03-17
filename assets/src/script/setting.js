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
if (window.localStorage.getItem('dark-mode') === 'true') {
    iconTheme.forEach((icon) => {
        icon.classList.remove('activeTheme')
        iconTheme[0].classList.add('activeTheme')
    })
    darkMode()
} else {
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
if (window.localStorage.getItem('title-color')) {
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
