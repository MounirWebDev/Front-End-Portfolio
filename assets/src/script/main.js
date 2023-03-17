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

// ==== Moving Mouse ====
const mouseContainer = document.getElementById('mouseContainer')

window.addEventListener('mousemove', (e) => {
    let x = e.pageX + 8,
        y = e.pageY + 17
    mouseContainer.style.top = y + 'px'
    mouseContainer.style.left = x + 'px'
})
