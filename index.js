import fs from 'fs';
import csv from 'csv-parser';

function countCars(file) {
  let count = 0;
  fs.createReadStream(file)
    .pipe(csv())
    .on('data', () => {
      count += 1;
    })
    .on('end', () => {
      console.log(`Количество автомобилей: ${count}`);
    });
}

export default countCars;
