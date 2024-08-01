document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.list-service__button').forEach(function(tabColor) {
        tabColor.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.list-service__button').forEach(function(tabContent) {
                tabContent.classList.remove('list-button__active')
            })
            document.querySelector(`[data-color="${path}"]`).classList.add('list-button__active')
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.list-service__button').forEach(function(chepBtn) {
        chepBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.services__block-service').forEach(function(chepContent) {
                chepContent.classList.remove('block-service__active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('block-service__active')
        })
    })
})