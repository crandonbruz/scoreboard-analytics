// const dayjs = require("dayjs");
// const yesterday = dayjs().subtract(1, 'day');
// const currentDate = `$("#currentDay").text(dayjs().format("dddd, MM DD"))`;
// const newDate = `${yesterday.format("YYYY")}-${yesterday.format("MMM").toUpperCase()}-${yesterday.format("DD")}`
const currentDate = new Date().toISOString().slice(0, 10); // Get current date in 'YYYY-MM-DD' format



fetch(`https://api.sportsdata.io/v3/mlb/projections/json/PlayerGameProjectionStatsByDate/${currentDate}?key=1694be448de4478ba2c3201aeb2ad64d`).then(data => {
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
            Opponent: data[i].Opponent,
            FantasyPoints: data[i].FantasyPoints

            // Add More things to the card
        }
        if (data[i].Started === 1) {
            activePlayers.push(player)
        }
    }
    console.log(activePlayers.length)
    const cf = []
    const rf = []
    const lf = []
    const ss = []
    const firstBase = []
    const secondBase = []
    const thirdBase = []
    const catcher = []
    const startingPitcher = []


    // const
    // make const for every position
    for (let i = 0; i < activePlayers.length; i++) {

        if (activePlayers[i].Position === 'CF') {
            cf.push(activePlayers[i])
        }
        if (activePlayers[i].Position === 'RF') {
            rf.push(activePlayers[i])
        }
        if (activePlayers[i].Position === 'LF') {
            lf.push(activePlayers[i])
        }
        if (activePlayers[i].Position === 'SS') {
            ss.push(activePlayers[i])
        }
        if (activePlayers[i].Position === '1B') {
            firstBase.push(activePlayers[i])
        }
        if (activePlayers[i].Position === '2B') {
            secondBase.push(activePlayers[i])
        }
        if (activePlayers[i].Position === '3B') {
            thirdBase.push(activePlayers[i])
        }
        if (activePlayers[i].Position === 'C') {
            catcher.push(activePlayers[i])
        }
        if (activePlayers[i].Position === 'SP') {
            startingPitcher.push(activePlayers[i])
        }
        // make same if statement for every position

    }
    console.log(cf)
    console.log(rf)
    console.log(lf)
    console.log(ss)
    console.log(firstBase)
    console.log(secondBase)
    console.log(thirdBase)
    console.log(catcher)
    console.log(startingPitcher)


    for (let player of cf) {
        const cfElement = document.querySelector(".cf")
        cfElement.innerHTML += `
<div>
    <p> ${player.Name} </p>
    <p>Current Team: ${player.Team} </p>
    <p>Position: ${player.Position}</p>
    <p>Opponent: ${player.Opponent}</p>
    <p>Fantasy Points: ${player.FantasyPoints}</p>
</div>`
    }
    for (let player of rf) {
        const rfElement = document.querySelector(".rf")
        rfElement.innerHTML += `
<div>
    <p> ${player.Name} </p>
    <p>Current Team: ${player.Team} </p>
    <p>Position: ${player.Position}</p>
    <p>Opponent: ${player.Opponent}</p>
    <p>Fantasy Points: ${player.FantasyPoints}</p>
</div>`
    }
    for (let player of lf) {
        const lfElement = document.querySelector(".lf")
        lfElement.innerHTML += `
<div>
    <p> ${player.Name} </p>
    <p>Current Team: ${player.Team} </p>
    <p>Position: ${player.Position}</p>
    <p>Opponent: ${player.Opponent}</p>
    <p>Fantasy Points: ${player.FantasyPoints}</p>
</div>`
    }
    for (let player of ss) {
        const ssElement = document.querySelector(".ss")
        ssElement.innerHTML += `
<div>
    <p> ${player.Name} </p>
    <p>Current Team: ${player.Team} </p>
    <p>Position: ${player.Position}</p>
    <p>Opponent: ${player.Opponent}</p>
    <p>Fantasy Points: ${player.FantasyPoints}</p>
</div>`
    }
    for (let player of firstBase) {
        const firstBaseElement = document.querySelector(".firstBase")
        firstBaseElement.innerHTML += `
<div>
    <p> ${player.Name} </p>
    <p>Current Team: ${player.Team} </p>
    <p>Position: ${player.Position}</p>
    <p>Opponent: ${player.Opponent}</p>
    <p>Fantasy Points: ${player.FantasyPoints}</p>
</div>`
    }
    for (let player of secondBase) {
        const secondBaseElement = document.querySelector(".secondBase")
        secondBaseElement.innerHTML += `
<div>
    <p> ${player.Name} </p>
    <p>Current Team: ${player.Team} </p>
    <p>Position: ${player.Position}</p>
    <p>Opponent: ${player.Opponent}</p>
    <p>Fantasy Points: ${player.FantasyPoints}</p>
</div>`
    }
    for (let player of thirdBase) {
        const thirdBaseElement = document.querySelector(".thirdBase")
        thirdBaseElement.innerHTML += `
<div>
    <p> ${player.Name} </p>
    <p>Current Team: ${player.Team} </p>
    <p>Position: ${player.Position}</p>
    <p>Opponent: ${player.Opponent}</p>
    <p>Fantasy Points: ${player.FantasyPoints}</p>
</div>`
    }
    for (let player of catcher) {
        const catcherElement = document.querySelector(".catcher")
        catcherElement.innerHTML += `
<div>
    <p> ${player.Name} </p>
    <p>Current Team: ${player.Team} </p>
    <p>Position: ${player.Position}</p>
    <p>Opponent: ${player.Opponent}</p>
    <p>Fantasy Points: ${player.FantasyPoints}</p>
</div>`
    }
    for (let player of startingPitcher) {
        const startingPitcherElement = document.querySelector(".startingPitcher")
        startingPitcherElement.innerHTML += `
<div>
    <p> ${player.Name} </p>
    <p>Current Team: ${player.Team} </p>
    <p>Position: ${player.Position}</p>
    <p>Opponent: ${player.Opponent}</p>
    <p>Fantasy Points: ${player.FantasyPoints}</p>
</div>`
    }
}).catch(err => {
    console.log(err)
});


