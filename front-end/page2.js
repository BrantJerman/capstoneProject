const allTrails1 = document.getElementById('allTrails1')
const divAllTrails = document.getElementById('divAllTrails')
const plzwork = document.getElementById('allTrails')

function getAllTrails () {
    console.log('hit getAllTrails')
    document.getElementById("allTrails").style.display = "block";
    axios.get('/all-trails')
    .then(res => {
        console.log(res)
        for (i = 0; i <= res.data.length; i++) {
            console.log(res.data.length)
            allTrailsCard = document.createElement('p')

            allTrailsCard.innerHTML = `
                <pre><p class="small">Name of Trail: ${res.data[i].trailname} || Location of Trail: ${res.data[i].locationname} || Difficulty: ${res.data[i].difficulty} || Rating: ${res.data[i].rating}/5</p>
            `
            plzwork.appendChild(allTrailsCard)
        }
    }).catch(err => console.log(err))
}

allTrails1.addEventListener('click', getAllTrails);