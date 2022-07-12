const bstTrail = document.getElementById('btn1')
const gmTrial = document.getElementById('btn2')
const erTrail = document.getElementById('btn3')

let trailName = document.getElementById('trail')
let trailLocation = document.getElementById('location')
let difficultyValue = document.getElementById('difficulty')

bstTrail.addEventListener('click', getBst);

function getBst () {
    console.log('hit getBST')
    axios.get('http://localhost:4000/bst-trail')
    .then(res => {
        console.log(res)
        res.data.forEach(elem => {
            let bstTrailCard = `<div class="country-card">
                <h2>${tr.trailName}, ${elem.locationName}</h2>
                <h3>Difficulty: ${elem.difficulty}</h3>
                <h4>Rating: ${elem.rating}/5</h4>
                <button onclick="hideCard()">Hide</button>
                </div>
            `

            bstTrail.innerHTML += bstTrailCard
        })
    }).catch(err => console.log(err))
}

function getGm () {
    return `
        <div class="gmTrail">
        <p class="trailName">${trail.name}</p>
        <p>Location: ${trail.location}</p>
        <p>Difficulty: ${trail.difficulty} damage</p>
        <p>Rating: ${trail.rating} damage</p>
        <button class="trail-btn2" onclick="hideTrail()">Hide Trail</button>
        </div>
    `
}

function getEr () {
    return `
        <div class="erTrail">
        <p class="trailName">${trail.name}</p>
        <p>Location: ${trail.location}</p>
        <p>Difficulty: ${trail.difficulty} damage</p>
        <p>Rating: ${trail.rating} damage</p>
        <button class="trail-btn3" onclick="hideTrail()">Hide Trail</button>
        </div>
    `
}



function submitTrail () {
    if (trailName.value < 1){
        alert('Make sure to add the name of your trail!')
        return
    } 
    
    if (trailLocation.value < 1){
        alert('Make sure to add the location of your trail!')
        return
    }

    let userRating = document.querySelector('input[name="rating"]:checked').value
    let body = {
        name: trailName.value,
        location: trailLocation.value,
        difficulty: difficultyValue.value, 
        rating: +userRating, 
    }

    axios.post('/new-trail', body)
    .then(() => {
        countrySelect.value = 1
        trailName.value = ''
        trailLocation.value = ''
        difficultyValue.value = 'easy'
        document.querySelector('#rating-one').checked = true
    })
}

