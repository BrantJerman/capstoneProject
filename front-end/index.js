const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')

// function btn1() {
//     axios.get('http://localhost')
// }

function bstTrail () {
    return `
        <div class="bstTrail">
        <p class="trailName">${trail.name}</p>
        <p>Location: ${trail.location}</p>
        <p>Difficulty: ${trail.difficulty} damage</p>
        <p>Rating: ${trail.rating} damage</p>
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
    if (trail.value < 1){
        alert('Make sure to add the name of your trail!')
        return
    } else if (location.value < 1){
        alert('Make sure to add the location of your trail!')
        return
    }

    let userRating = document.querySelector('input[name="rating"]:checked').value
    let body = {
        name: nameInput.value, 
        rating: +userRating, 
        countryId: +countrySelect.value
    }
}