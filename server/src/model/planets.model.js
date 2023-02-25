const {parse} = require('csv-parse');
const fs = require('fs');

const exoplanet = [];

let isHabitable =(planet)=>{
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.1
    && planet['koi_prad'] < 1.6;
}

fs.createReadStream('kepler_data.csv')
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
    })
    .on('end', () => {
        console.log(exoplanet.map((planet)=>{
            return planet['kepler_name'];
        }))
        console.log(`number of habitable planets found: ${exoplanet.length}`);
        console.log('all done')
    })


module.exports = {
    planets: exoplanet
}