const modalOverley = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", function(){
        const imgSrc = card.childNodes[1].src
        const title = card.childNodes[3].innerHTML
        const author = card.childNodes[5].innerHTML
        console.log(imgSrc)
        console.log(title)
        console.log(author)
        modalOverley.classList.add('active')
        modalOverley.querySelector('.modal .modal-img').src= imgSrc
        modalOverley.querySelector('.modal .modal-title').innerHTML= title
        modalOverley.querySelector('.modal .modal-author').innerHTML= author
    })
}

document.querySelector('.modal-close')
    .addEventListener("click", function() {
        modalOverley.classList.remove('active')
})