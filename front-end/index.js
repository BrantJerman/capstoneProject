const bstTrail = document.getElementById('btn1')
const divBST = document.getElementById('divBST')
const gmTrail = document.getElementById('btn2')
const divGm = document.getElementById('divGm')
const erTrail = document.getElementById('btn3')
const divEr = document.getElementById('divEr')
const submitTrailBtn = document.getElementById('add')

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



let newTrailName = document.getElementById('trail').value
let newTrailLocation = document.getElementById('location').value
let difficulty = document.getElementById('difficulty').value
let userRating = document.querySelector('input[name="rating"]:checked').value


function submitTrail () {
    console.log('hit submit trail btn')

    console.log(document.getElementById('trail').value)
    console.log(document.getElementById('location').value)
    console.log(document.getElementById('difficulty').value)
    console.log(document.querySelector('input[name="rating"]:checked').value)

    if (document.getElementById('trail').value < 1){
        alert('Make sure to add the name of your trail!')
        return
    } 
    
    if (document.getElementById('location').value < 1){
        alert('Make sure to add the location of your trail!')
        return
    }

    let body = {
        trailname: document.getElementById('trail').value,
        locationname: document.getElementById('location').value,
        difficultyValue: document.getElementById('difficulty').value, 
        rating: document.querySelector('input[name="rating"]:checked').value 
    }

    console.log(body)

    axios.post('/create-trail', body)
    .then(() => {
        document.getElementById('trail').value = ''
        document.getElementById('location').value = ''
        document.getElementById('difficulty').value = 'easy'
        document.querySelector('#rating-one').checked = true

        console.log('Successfully Created a Trail!')
    })
}

submitTrailBtn.addEventListener('click', submitTrail);

// function check1 () {
//     console.log(newTrailName)
// }