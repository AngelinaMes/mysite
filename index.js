import fs from 'fs';
import csv from 'csv-parser';

//function countCars(file) {
  //let count = 0;
  //fs.createReadStream(file)
    //.pipe(csv())
    //.on('data', () => {
      //count += 1;
    //})
    //.on('end', () => {
      //console.log(`Количество автомобилей: ${count}`);
    //});
//}

//export default countCars;


function calculateAv(file) {
    let totalMileage = 0;
    let carCount = 0;

    fs.createReadStream(file)
        .pipe(csv())
        .on('data', (row) => {
            totalMileage += parseInt(row.mileage);
            carCount++;
        })
        .on('end', () => {
            const averageMileage = Math.round(totalMileage / carCount);
            console.log(`Средний пробег: ${averageMileage}`);
        });
}

export default calculateAv;
