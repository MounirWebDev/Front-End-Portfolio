// ==== DISPLAY WEBSITES'S INFO
const infoBtn = document.querySelectorAll('.infoBtn'),
    webInfo = document.querySelectorAll('.webInfo'),
    leftIcon = document.querySelectorAll('.arrowLeft'),
    showInfoWebSite = (index) => {
        webInfo[index].style.display = 'flex'
        setTimeout(() => {
            webInfo[index].style.transform = 'translate(-50%, -50%)'
        }, 50)
    },
    hiddenInfoWebSite = (index) => {
        webInfo[index].style.transform = 'translate(calc(-50% - 500px), -50%)'
        setTimeout(() => {
            webInfo[index].style.display = 'none'
        }, 600)
    }
// 1- Show Info
infoBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        showInfoWebSite(index)
    })
})
// 2- Hidden Info
leftIcon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        hiddenInfoWebSite(index)
    })
})