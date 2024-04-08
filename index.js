import fs from 'fs';

import csv from 'csv-parser';


function count(file) {
    let count = 0;
    fs.createRead(file)
        .pipe(csv())
        .on('data', () => {
            count = count + 1
        })
        .on ('end', () => {
            console.log(`Количество автомобилей: ${count}`)
        });
}

export default count;
