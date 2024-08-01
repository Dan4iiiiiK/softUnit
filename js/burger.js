window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.header-container__nav').classList.toggle('is-active')
    })
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.burger__button').classList.toggle('burger__button-active')
    })
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger__button').addEventListener('click', function() {
    document.querySelector('.svg__rect2').classList.toggle('rect-is-active2')
})
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger__button').addEventListener('click', function() {
    document.querySelector('.svg__rect3').classList.toggle('rect-is-active3')
})
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger__button').addEventListener('click', function() {
    document.querySelector('.burger__svg').classList.toggle('burger-is-active')
})
})