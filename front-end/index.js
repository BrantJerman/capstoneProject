const bstTrail = document.getElementById('btn1')
const gmTrial = document.getElementById('btn2')
const erTrail = document.getElementById('btn3')

let trailName = document.getElementById('trail')
let trailLocation = document.getElementById('location')
let difficultyValue = document.getElementById('difficulty')

function bstTrail () {
    axios.get(`/bst-trail`)
    .then(res => {
        res.da
    })
    
    return `
        <div class="bstTrail">
        <p class="trailName">Trail Number:${brantTrails.trail_id[1]}</p>
        <p class="trailName">${brantTrails.trailName}</p>
        <p>Location: ${brantTrails.locationName}</p>
        <p>Difficulty: ${brantTrails.difficulty} damage</p>
        <p>Rating: ${brantTrails.rating} damage</p>
        <button class="trail-btn" onclick="hideTrail()">Hide Trail</button>
        </div>
    `
}

function gmTrail () {
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

function erTrail () {
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
