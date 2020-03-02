const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {
        const imageId = card.getAttribute('id')
        const titulo = card.querySelector('.card__title').innerHTML
        const autor = card.querySelector('.card__author').innerHTML


        modalOverlay.classList.add('active');
        modalOverlay.querySelector('img').src = `/assets/${imageId}`
        modalOverlay.querySelector('.modal-title').innerHTML = titulo
        modalOverlay.querySelector('.modal-author').innerHTML = autor


    })
}

document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active')
})