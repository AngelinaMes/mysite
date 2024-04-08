import fs from 'fs';
import csv from 'csv-parser';

// function countCars(file) {
// let count = 0;
// fs.createReadStream(__fixtures__/cars1.csv)
// .pipe(csv())
// .on('data', () => {
// count += 1;
// })
// .on('end', () => {
// console.log(`Количество автомобилей: ${count}`);
// });
// }

// export default countCars;

// function calculateAv(file) {
// let totalMileage = 0;
// let carCount = 0;

// fs.createReadStream(__fixtures__/cars1.csv)
// .pipe(csv())
// .on('data', (row) => {
// totalMileage += parseInt(row.mileage, 10);
// carCount += 1;
// })
// .on('end', () => {
// const averageMileage = Math.round(totalMileage / carCount);
// console.log(`Средний пробег: ${averageMileage}`);
// });
// }

// export default calculateAv;

// let maxPrice = 0;

// fs.createReadStream('__fixtures__/cars1.csv')
// .pipe(csv())
// .on('data', (row) => {
// const price = parseFloat(row.price);
// if (price > maxPrice) {
// maxPrice = price;
// }
// })
// .on('end', () => {
// console.log(`Стоимость самой дорогой машины: ${maxPrice}`);
// });

let earliestYear = Infinity;
let carWithEarliestYear = '';

fs.createReadStream('__fixtures__/cars1.csv')
  .pipe(csv())
  .on('data', (row) => {
    const year = parseInt(row.year, 10);
    if (year < earliestYear) {
      earliestYear = year;
      carWithEarliestYear = `${row.brand} ${row.model}`;
    }
  })
  .on('end', () => {
    console.log(`Самый старый автомобиль: ${carWithEarliestYear}`);
  });


const colorsCount = {};

fs.createReadStream('__fixtures__/cars1.csv')
    .pipe(csv())
    .on('data', (row) => {
        const color = row.color;
        colorsCount[color] = (colorsCount[color] || 0) + 1;
    })
    .on('end', () => {
        let result = '';
        for (const color in colorsCount) {
            result += `${color}: ${colorsCount[color]}, `;
        }
        result = result.slice(0, -2);
        console.log(`Все цвета: ${result}`);
    });
