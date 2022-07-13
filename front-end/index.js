const bstTrail = document.getElementById('btn1')
const divBST = document.getElementById('divBST')
const gmTrail = document.getElementById('btn2')
const divGm = document.getElementById('divGm')
const erTrail = document.getElementById('btn3')
const divEr = document.getElementById('divEr')

let trailName = document.getElementById('trail')
let trailLocation = document.getElementById('location')
let difficultyValue = document.getElementById('difficulty')

function getBst () {
    console.log('hit getBST')
    document.getElementById("bstTrail").style.display = "block";
    axios.get('/bst-trail')
    .then(res => {
        console.log(res)
        res.data.forEach(elem => {
            let bstTrailCard = `
                <h2 class="small">${res.data[0].trailname}, ${res.data[0].locationname}</h2>
                <h3 class="small">Difficulty: ${res.data[0].difficulty}</h3>
                <h4 class="small">Rating: ${res.data[0].rating}/5</h4>
                <button onclick="hideCardBST()">Hide</button>
            `

            divBST.innerHTML = bstTrailCard
        })
    }).catch(err => console.log(err))
}

bstTrail.addEventListener('click', getBst);

function getGm () {
    console.log('hit getGm')
    document.getElementById("gmTrail").style.display = "block";
    axios.get('/gm-trail')
    .then(res => {
        console.log(res)
        res.data.forEach(elem => {
            let gmTrailCard = `
                <h2 class="small">${res.data[0].trailname}, ${res.data[0].locationname}</h2>
                <h3 class="small">Difficulty: ${res.data[0].difficulty}</h3>
                <h4 class="small">Rating: ${res.data[0].rating}/5</h4>
                <button onclick="hideCardGm()">Hide</button>
            `

            divGm.innerHTML += gmTrailCard
        })
    }).catch(err => console.log(err))
}

gmTrail.addEventListener('click', getGm);


function getEr () {
    console.log('hit getEr')
    document.getElementById("erTrail").style.display = "block";
    axios.get('/er-trail')
    .then(res => {
        console.log(res)
        res.data.forEach(elem => {
            let erTrailCard = `
                <h2 class="small">${res.data[0].trailname}, ${res.data[0].locationname}</h2>
                <h3 class="small">Difficulty: ${res.data[0].difficulty}</h3>
                <h4 class="small">Rating: ${res.data[0].rating}/5</h4>
                <button onclick="hideCardEr()">Hide</button>
                
            `

            divEr.innerHTML += erTrailCard
        })
    }).catch(err => console.log(err))
}

erTrail.addEventListener('click', getEr);

function hideCardBST () {
    document.getElementById("bstTrail").style.display = "none";
}
function hideCardGm () {
    document.getElementById("gmTrail").style.display = "none";
}
function hideCardEr () {
    document.getElementById("erTrail").style.display = "none";
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
        trailname: trailName.value,
        traillocation: trailLocation.value,
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


