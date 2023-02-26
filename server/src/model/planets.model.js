const fs = require('fs');
const path = require('path')
const {parse} = require('csv-parse');

const exoplanet = [];

let isHabitable =(planet)=>{
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.1
    && planet['koi_prad'] < 1.6;
}

function loadPlanets (){
    return new Promise((resolve, reject)=>{



    fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
        .pipe(parse({
            comment: '#',
            columns: true
        }))
        .on('data', (data) => {
            if(isHabitable(data)){
                exoplanet.push(data);
            }
        })
        .on('error', (err) => {
            console.log(err);
            reject(err);
        })
        .on('end', () => {
            // console.log(exoplanet.map((planet)=>{
            //     return planet['kepler_name'];
            // }))
            // console.log(`number of habitable planets found: ${exoplanet.length}`);
            // console.log('all done')
            resolve();
        })


    })
}


module.exports = {
    loadPlanets,
    planets: exoplanet
}