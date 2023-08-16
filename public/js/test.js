// const dayjs = require("dayjs");
// const yesterday = dayjs().subtract(1, 'day');
// const currentDate = `$("#currentDay").text(dayjs().format("dddd, MM DD"))`;
// const newDate = `${yesterday.format("YYYY")}-${yesterday.format("MMM").toUpperCase()}-${yesterday.format("DD")}`
const currentDate = new Date().toISOString().slice(0, 10); // Get current date in 'YYYY-MM-DD' format
const firstBaseElement = document.querySelector("#firstBase")
const secondBaseElement = document.querySelector("#secondBase")
const thirdBaseElement = document.querySelector("#thirdBase")
const shortStopElement = document.querySelector("#shortStop")
const catcherElement = document.querySelector("#catcher")
const leftFieldElement = document.querySelector("#leftField")
const rightFieldElement = document.querySelector("#rightField")
const centerFieldElement = document.querySelector("#centerField")
const pitcherNameElement = document.querySelector("#pitcherName")
const dhElement = document.querySelector("#dh")
// make element for each position

async function fetchData() {
    try {
        const response = await fetch(`https://api.sportsdata.io/v3/mlb/projections/json/PlayerGameProjectionStatsByDate/${currentDate}?key=1694be448de4478ba2c3201aeb2ad64d`);
        const data = await response.json();
        // console.log(data.length);
        return data;
    } catch (err) {
        console.log(err)
    }

    // .then(data => {
    //     return data.json()
    // }).then(data => {
    //     console.log(data.length)
    // }).catch(err => {
    //     console.log(err)
    // });
};

fetchData().then(data => {
    console.log(data)



    const activePlayers = []
    for (let i = 0; i < data.length; i++) {
        const player = {
            Name: data[i].Name,
            Team: data[i].Team,
            Position: data[i].Position

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
    const dh = []


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
        if (activePlayers[i].Position === 'DH') {
            dh.push(activePlayers[i])
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
    console.log(dh)


    for (let i = 0; i < firstBase.length; i++) {
        let nextFirstBasemen = document.createElement("option")
        nextFirstBasemen.setAttribute("value", firstBase[i].Name)
        nextFirstBasemen.textContent = `${firstBase[i].Name} - ${firstBase[i].Team}`
        firstBaseElement.append(nextFirstBasemen)
    }
    for (let i = 0; i < secondBase.length; i++) {
        let nextSecondBasemen = document.createElement("option")
        nextSecondBasemen.setAttribute("value", secondBase[i].Name)
        nextSecondBasemen.textContent = `${secondBase[i].Name} - ${secondBase[i].Team}`
        secondBaseElement.append(nextSecondBasemen)
    }
    for (let i = 0; i < thirdBase.length; i++) {
        let nextThirdBasemen = document.createElement("option")
        nextThirdBasemen.setAttribute("value", thirdBase[i].Name)
        nextThirdBasemen.textContent = `${thirdBase[i].Name} - ${thirdBase[i].Team}`
        thirdBaseElement.append(nextThirdBasemen)
    }
    for (let i = 0; i < shortStop.length; i++) {
        let nextShortStop = document.createElement("option")
        nextShortStop.setAttribute("value", ss[i].Name)
        nextShortStop.textContent = `${ss[i].Name} - ${ss[i].Team}`
        shortStopElement.append(nextShortStop)
    }
    for (let i = 0; i < catcher.length; i++) {
        let nextCatcher = document.createElement("option")
        nextCatcher.setAttribute("value", catcher[i].Name)
        nextCatcher.textContent = `${catcher[i].Name} - ${catcher[i].Team}`
        catcherElement.append(nextCatcher)
    }
    for (let i = 0; i < leftField.length; i++) {
        let nextLeftFielder = document.createElement("option")
        nextLeftFielder.setAttribute("value", lf[i].Name)
        nextLeftFielder.textContent = `${lf[i].Name} - ${lf[i].Team}`
        leftFieldElement.append(nextLeftFielder)
    }
    for (let i = 0; i < rightField.length; i++) {
        let nextRightFielder = document.createElement("option")
        nextRightFielder.setAttribute("value", rf[i].Name)
        nextRightFielder.textContent = `${rf[i].Name} - ${rf[i].Team}`
        rightFieldElement.append(nextRightFielder)
    }
    for (let i = 0; i < centerField.length; i++) {
        let nextCenterFielder = document.createElement("option")
        nextCenterFielder.setAttribute("value", cf[i].Name)
        nextCenterFielder.textContent = `${cf[i].Name} - ${cf[i].Team}`
        centerFieldElement.append(nextCenterFielder)
    }
    for (let i = 0; i < dh.length; i++) {
        let nextDh = document.createElement("option")
        nextDh.setAttribute("value", dh[i].Name)
        nextDh.textContent = `${dh[i].Name} - ${dh[i].Team}`
        dhElement.append(nextDh)
    }
    for (let i = 0; i < pitcherName.length; i++) {
        let nextPitcherName = document.createElement("option")
        nextPitcherName.setAttribute("value", startingPitcher[i].Name)
        nextPitcherName.textContent = `${startingPitcher[i].Name} - ${startingPitcher[i].Team}`
        pitcherNameElement.append(nextPitcherName)
    }

    // make for loop for each position dont forget element



    // for (let player of cf) {
    //     const cfElement = document.querySelector(".cf")
    //     cfElement.innerHTML += `
    // <div>
    //     <p> ${player.Name} </p>
    //     <p>Current Team: ${player.Team} </p>
    //     <p>Position: ${player.Position}</p>
    //     <p>Opponent: ${player.Opponent}</p>
    //     <p>Fantasy Points: ${player.FantasyPoints}</p>
    // </div>`
    // }
    // for (let player of rf) {
    //     const rfElement = document.querySelector(".rf")
    //     rfElement.innerHTML += `
    // <div>
    //     <p> ${player.Name} </p>
    //     <p>Current Team: ${player.Team} </p>
    //     <p>Position: ${player.Position}</p>
    //     <p>Opponent: ${player.Opponent}</p>
    //     <p>Fantasy Points: ${player.FantasyPoints}</p>
    // </div>`
    // }
    // for (let player of lf) {
    //     const lfElement = document.querySelector(".lf")
    //     lfElement.innerHTML += `
    // <div>
    //     <p> ${player.Name} </p>
    //     <p>Current Team: ${player.Team} </p>
    //     <p>Position: ${player.Position}</p>
    //     <p>Opponent: ${player.Opponent}</p>
    //     <p>Fantasy Points: ${player.FantasyPoints}</p>
    // </div>`
    // }
    // for (let player of ss) {
    //     const ssElement = document.querySelector(".ss")
    //     ssElement.innerHTML += `
    // <div>
    //     <p> ${player.Name} </p>
    //     <p>Current Team: ${player.Team} </p>
    //     <p>Position: ${player.Position}</p>
    //     <p>Opponent: ${player.Opponent}</p>
    //     <p>Fantasy Points: ${player.FantasyPoints}</p>
    // </div>`
    // }
    // for (let player of firstBase) {
    //     const firstBaseElement = document.querySelector(".firstBase")
    //     firstBaseElement.innerHTML += `
    // <div>
    //     <p> ${player.Name} </p>
    //     <p>Current Team: ${player.Team} </p>
    //     <p>Position: ${player.Position}</p>
    //     <p>Opponent: ${player.Opponent}</p>
    //     <p>Fantasy Points: ${player.FantasyPoints}</p>
    // </div>`
    // }
    // for (let player of secondBase) {
    //     const secondBaseElement = document.querySelector(".secondBase")
    //     secondBaseElement.innerHTML += `
    // <div>
    //     <p> ${player.Name} </p>
    //     <p>Current Team: ${player.Team} </p>
    //     <p>Position: ${player.Position}</p>
    //     <p>Opponent: ${player.Opponent}</p>
    //     <p>Fantasy Points: ${player.FantasyPoints}</p>
    // </div>`
    // }
    // for (let player of thirdBase) {
    //     const thirdBaseElement = document.querySelector(".thirdBase")
    //     thirdBaseElement.innerHTML += `
    // <div>
    //     <p> ${player.Name} </p>
    //     <p>Current Team: ${player.Team} </p>
    //     <p>Position: ${player.Position}</p>
    //     <p>Opponent: ${player.Opponent}</p>
    //     <p>Fantasy Points: ${player.FantasyPoints}</p>
    // </div>`
    // }
    // for (let player of catcher) {
    //     const catcherElement = document.querySelector(".catcher")
    //     catcherElement.innerHTML += `
    // <div>
    //     <p> ${player.Name} </p>
    //     <p>Current Team: ${player.Team} </p>
    //     <p>Position: ${player.Position}</p>
    //     <p>Opponent: ${player.Opponent}</p>
    //     <p>Fantasy Points: ${player.FantasyPoints}</p>
    // </div>`
    // }
    // for (let player of startingPitcher) {
    //     const startingPitcherElement = document.querySelector(".startingPitcher")
    //     startingPitcherElement.innerHTML += `
    // <div>
    //     <p> ${player.Name} </p>
    //     <p>Current Team: ${player.Team} </p>
    //     <p>Position: ${player.Position}</p>
    //     <p>Opponent: ${player.Opponent}</p>
    //     <p>Fantasy Points: ${player.FantasyPoints}</p>
    // </div>`
    // }
});

