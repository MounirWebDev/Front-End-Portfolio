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
function closeIt(){
    settings.classList.add('close')
    settings.classList.remove('open')
}

// ==== PICK THEME ====
const iconTheme = document.querySelectorAll('.mode i')
const root = document.querySelector(':root')

iconTheme.forEach((item) =>{
    item.addEventListener('click', activeIcon)
})
function activeIcon(event){
    // 1- Active Theme Event
    iconTheme.forEach((item)=>{
        item.classList.remove('activeTheme')
        this.classList.add('activeTheme')
    })
    // 2- Active Dark Theme
    const dark = (this.classList.contains('ri-moon-line'))
    dark ? darkMode() : normalMode()
}
function darkMode(){
    const hdr = document.querySelector('header')

    root.style.setProperty('--bodyColor', '#181a1b')
    root.style.setProperty('--containerColor', '#1d1f20')
    root.style.setProperty('--textColor', '#a2a6a9')
    root.style.setProperty('--secondTitleColor', '#f2f2f3')
    hdr.style.boxShadow = '0 4px 20px hsla(207, 24%, 8%, .4)'
    hdr.style.backgroundColor =  'var(--containerColor)'
}   
function normalMode(){
    root.style.setProperty('--bodyColor', '#fcfcfd')
    root.style.setProperty('--containerColor', '#f2f2f3')
    root.style.setProperty('--textColor', '#45484a')
    root.style.setProperty('--secondTitleColor', '#27292a')
    hdr.style.boxShadow = '0 4px 20px hsla(207, 24%, 35%, .1)'
    hdr.style.backgroundColor =  'var(--bodyColor)'
}

// ==== PICK COLOR ====
const colors = document.querySelector('.colors')

colors.addEventListener('click', pickColor)
function pickColor(event){
    const currentColor = '#' + (event.target.className.split(' ')[0])
    console.log(currentColor)
    root.style.setProperty('--titleColor', currentColor)
}
