const allTrails1 = document.getElementById('allTrails1')
const divAllTrails = document.getElementById('divAllTrails')

function getAllTrails () {
    console.log('hit getAllTrails')
    document.getElementById("allTrails").style.display = "block";
    axios.get('/all-trails')
    .then(res => {
        console.log(res)
        res.data.forEach(elem => {
            let allTrailsCard = `
                <pre><p class="small">Name of Trail: ${res.data[0].trailname} || Location of Trail: ${res.data[0].locationname} || Difficulty: ${res.data[0].difficulty} || Rating: ${res.data[0].rating}/5</p>
            `
            divAllTrails.innerHTML = allTrailsCard
        })
    }).catch(err => console.log(err))
}

allTrails1.addEventListener('click', getAllTrails);