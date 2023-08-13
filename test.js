fetch("https://api.sportsdata.io/v3/mlb/projections/json/BakerPlayerGameProjections/2023-08-12?key=4bcea2e7b0a647bba0a34522a4ee04b1").then(data => {
    //as long as date in the fetch changes each day, the arrays will update themselves 
    return data.json()
}).then(data => {
    console.log(data.length)
    const activePlayers = []
    for (let i = 0; i < data.length; i++) {
        const player = {
            PlayerID: data[i].PlayerID,
            Name: data[i].Name,
            Team: data[i].Team,
            Position: data[i].Position,
            // Add More things to the card
        }
        if (data[i].Started === 1) {
            activePlayers.push(player)
        }
    }
    console.log(activePlayers.length)
    const cf = []
    const rf = []
    // make const for every position
    for (let i = 0; i < activePlayers.length; i++) {

        if (activePlayers[i].Position === 'CF') {
            cf.push(activePlayers[i])
        }
        if (activePlayers[i].Position === 'RF') {
            rf.push(activePlayers[i])
        }
        // make same if statement for every position

    }
    console.log(cf)
    console.log(rf)
    for (let player of cf) {
        const cfElement = document.querySelector(".cf")
        cfElement.innerHTML += `
<div>
    <p> ${player.Name} </p>
    <p> ${player.Team} </p>
</div>`
        // create more data for buttons
    }
}).catch(err => {
    console.log(err)
});


