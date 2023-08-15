const fs = require('fs');
const fetch = require('node-fetch');

(async () => {
    try {
        const currentDate = new Date().toISOString().slice(0, 10);

        const response = await fetch(`https://api.sportsdata.io/v3/mlb/projections/json/BakerPlayerGameProjections/2023-08-15?key=4bcea2e7b0a647bba0a34522a4ee04b1`);
        const data = await response.json();

        console.log('Fetched API data:', data);

        const activePlayers = [];
        for (let i = 0; i < data.length; i++) {
            const player = {
                PlayerID: data[i].PlayerID,
                Name: data[i].Name,
                Team: data[i].Team,
                Position: data[i].Position,
                Opponent: data[i].Opponent,
                FantasyPoints: data[i].FantasyPoints
                // Add More things to the card
            };
            if (data[i].Started === 1) {
                activePlayers.push(player);
            }
        }

        const cf = [];
        const rf = [];
        const lf = [];
        const ss = [];
        const firstBase = [];
        const secondBase = [];
        const thirdBase = [];
        const catcher = [];
        const startingPitcher = [];

        for (let i = 0; i < activePlayers.length; i++) {
            if (activePlayers[i].Position === 'CF') {
                cf.push(activePlayers[i]);
            }
            if (activePlayers[i].Position === 'RF') {
                rf.push(activePlayers[i]);
            }
            if (activePlayers[i].Position === 'LF') {
                lf.push(activePlayers[i]);
            }
            if (activePlayers[i].Position === 'SS') {
                ss.push(activePlayers[i]);
            }
            if (activePlayers[i].Position === '1B') {
                firstBase.push(activePlayers[i]);
            }
            if (activePlayers[i].Position === '2B') {
                secondBase.push(activePlayers[i]);
            }
            if (activePlayers[i].Position === '3B') {
                thirdBase.push(activePlayers[i]);
            }
            if (activePlayers[i].Position === 'C') {
                catcher.push(activePlayers[i]);
            }
            if (activePlayers[i].Position === 'SP') {
                startingPitcher.push(activePlayers[i]);
            }
        }

        console.log('Position arrays:', cf, rf, lf, ss, firstBase, secondBase, thirdBase, catcher, startingPitcher);

        const positionArrays = {
            cf,
            rf,
            lf,
            ss,
            firstBase,
            secondBase,
            thirdBase,
            catcher,
            startingPitcher
        };

        const jsonPositionArrays = JSON.stringify(positionArrays, null, 2);

        fs.writeFileSync('draft.json', jsonPositionArrays, 'utf8');

        console.log('Data successfully written to draft.json');
    } catch (err) {
        console.log('An error occurred:', err);
    }
})();
