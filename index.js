import _ from 'lodash';

import { showInfo } from '../index.js';


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


