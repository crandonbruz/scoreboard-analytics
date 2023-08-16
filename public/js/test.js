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
const centerFieldElement = document.querySelector("#centerField")
const rightFieldElement = document.querySelector("#rightField")
const dhElement = document.querySelector("#dh")
const pitcherNameElement = document.querySelector("#pitcherName")

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
    const dh = []
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
    // make for loop for each position dont forget element
    for (let i = 0; i < secondBase.length; i++) {
        let nextsecondBasemen = document.createElement("option")
        nextsecondBasemen.setAttribute("value", secondBase[i].Name)
        nextsecondBasemen.textContent = `${secondBase[i].Name} - ${secondBase[i].Team}`
        secondBaseElement.append(nextsecondBasemen)
    }

    for (let i = 0; i < thirdBase.length; i++) {
        let nextthirdBasemen = document.createElement("option")
        nextthirdBasemen.setAttribute("value", thirdBase[i].Name)
        nextthirdBasemen.textContent = `${thirdBase[i].Name} - ${thirdBase[i].Team}`
        thirdBaseElement.append(nextthirdBasemen)
    }

    for (let i = 0; i < ss.length; i++) {
        let nextshortStopmen = document.createElement("option")
        nextshortStopmen.setAttribute("value", ss[i].Name)
        nextshortStopmen.textContent = `${ss[i].Name} - ${ss[i].Team}`
        shortStopElement.append(nextshortStopmen)
    }

    for (let i = 0; i < catcher.length; i++) {
        let nextcatchermen = document.createElement("option")
        nextcatchermen.setAttribute("value", catcher[i].Name)
        nextcatchermen.textContent = `${catcher[i].Name} - ${catcher[i].Team}`
        catcherElement.append(nextcatchermen)
    }

    for (let i = 0; i < lf.length; i++) {
        let nextleftFieldmen = document.createElement("option")
        nextleftFieldmen.setAttribute("value", lf[i].Name)
        nextleftFieldmen.textContent = `${lf[i].Name} - ${lf[i].Team}`
        leftFieldElement.append(nextleftFieldmen)
    }

    for (let i = 0; i < cf.length; i++) {
        let nextcenterFieldmen = document.createElement("option")
        nextcenterFieldmen.setAttribute("value", cf[i].Name)
        nextcenterFieldmen.textContent = `${cf[i].Name} - ${cf[i].Team}`
        centerFieldElement.append(nextcenterFieldmen)
    }

    for (let i = 0; i < rf.length; i++) {
        let nextrightFieldmen = document.createElement("option")
        nextrightFieldmen.setAttribute("value", rf[i].Name)
        nextrightFieldmen.textContent = `${rf[i].Name} - ${rf[i].Team}`
        rightFieldElement.append(nextrightFieldmen)
    }

    for (let i = 0; i < dh.length; i++) {
        let nextdhmen = document.createElement("option")
        nextdhmen.setAttribute("value", dh[i].Name)
        nextdhmen.textContent = `${dh[i].Name} - ${dh[i].Team}`
        dhElement.append(nextdhmen)
    }

    for (let i = 0; i < startingPitcher.length; i++) {
        let nextpitcherNamemen = document.createElement("option")
        nextpitcherNamemen.setAttribute("value", startingPitcher[i].Name)
        nextpitcherNamemen.textContent = `${startingPitcher[i].Name} - ${startingPitcher[i].Team}`
        pitcherNameElement.append(nextpitcherNamemen)
    }


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

