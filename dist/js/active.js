document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.chepter__button').forEach(function(chepBtn) {
        chepBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.servies-chapters__list-service').forEach(function(chepContent) {
                chepContent.classList.remove('list-service__active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('list-service__active')
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.chepter__button').forEach(function(tabColor) {
        tabColor.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.chepter__button').forEach(function(chepterButton) {
                chepterButton.classList.remove('chepter-button__active')
            })
            document.querySelector(`[data-color="${path}"]`).classList.add('chepter-button__active')
        })
    })
})

