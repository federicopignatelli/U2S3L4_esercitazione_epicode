const getApi = function () {
    fetch('https://api.pexels.com/v1/search?query=[dogs]', {
        headers: {
            Authorization: "uMfKzhyRrPPjz8iqyEVrUDWEphWjxm24gMcLGtdcKAR1NvxXvb4xqdPL"
        }
    })
        .then((res) => {
            console.log('Response ottenuta dalla prima GET', res)
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Errore nel contattare il server')
            }
        })
        .then((img) => {
            console.log('img', img)

            createCard(img.photos)

        })
        .catch((err) => {
            console.log('Si è verificato un errore:', err)
        })
}


const getSecondApi = function () {
    fetch('https://api.pexels.com/v1/search?query=[your-secondary-query]', {
        headers: {
            Authorization: "uMfKzhyRrPPjz8iqyEVrUDWEphWjxm24gMcLGtdcKAR1NvxXvb4xqdPL"
        }
    })
        .then((res) => {
            console.log('Response ottenuta dalla seconda GET', res)
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Errore nel contattare il server')
            }
        })
        .then((img) => {
            console.log('img', img)

        })
        .catch((err) => {
            console.log('Si è verificato un errore:', err)
        })
}


const loadButton = document.getElementById('loadButton')
const loadSecondButton = document.getElementById('loadSecondButton')
const row = document.getElementById('row')


const createCard = function (img1) {
    img1.forEach((img) => {
        const newCol = document.createElement('div');
        newCol.classList.add('col', 'col-4');
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = ` 
        <img src="${img.src.large}" class="card-img-top">
        <div class="card-body d-flex flex-column justify-content-between">
           <button class="btn btn-outline-warning" onclick="hideMe(event)">hide</button>
            <p>${img.id}</p>
           </div>
           `

        newCol.appendChild(newCard);
        row.appendChild(newCol);
    });
};

loadButton.addEventListener('click', getApi)
loadSecondButton.addEventListener('click', getSecondApi)