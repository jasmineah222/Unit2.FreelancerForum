
let workTable =[{name: 'Alice', occupation: 'Writer', startingPrice: 30}, 
            {name: 'Bob', occupation: 'Teacher', startingPrice: 50},
            {name: 'Carol', occupation: 'Programmer', startingPrice: 70},]



/*
    Expected result
    created div:

    <div>
        <h1>Name:</h1>
        <h1>Occupation:</h1>
        <h1>Starting Price:</h1>
    </div>

    Use css flex box to arrange in row

    freelance-box is the flex box container

*/


function renderWorkers() {
    let workbox = document.getElementById('freelance-box')

    for (let i = 0; i < workTable.length; i++) {

    let currentWork = workTable[i]

    let workDiv = document.createElement('div')

        workDiv.innerHTML = `<p>Name: ${currentWork.name}</p>
                             <p>Occupation: ${currentWork.occupation}</p>
                             <p>Starting Price: $${currentWork.startingPrice}</p>`
                            
        workbox.appendChild(workDiv)

    }
} 

renderWorkers()

function addNew() {

    let workbox = document.getElementById('freelance-box')

    let i = 0
    
    let currentWork = workTable[i]


    let workDiv = document.createElement('div')

        workDiv.innerHTML = `<p>Name: ${currentWork.name}</p>
                             <p>Occupation: ${currentWork.occupation}</p>
                             <p>Starting Price: $${currentWork.startingPrice}</p>`
                            
        workbox.appendChild(workDiv)

}

setInterval(() => {
    addNew()
}, 5000)
