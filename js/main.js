const body = document.body
const themeChanger = document.getElementById("themeChanger")

themeChanger.addEventListener('click', () => {
    if (body.classList.contains("theme-light")) {
        body.classList.remove('theme-light')
        body.classList.add('theme-dark')
    }
    else if (body.classList.contains("theme-dark")) {
        body.classList.remove('theme-dark')
        body.classList.add('theme-light')
    }
})
