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

countCars('./__fixtures__/cars1.csv');

function calculateAv(file) {
  let totalMileage = 0;
  let carCount = 0;

  fs.createReadStream(file)
    .pipe(csv())
    .on('data', (row) => {
      totalMileage += parseInt(row.mileage, 10) || 0;
      carCount += 1;
    })
    .on('end', () => {
      if (carCount > 0) {
        const averageMileage = Math.round(totalMileage / carCount);
        console.log(`Средний пробег: ${averageMileage}`);
      } else {
        console.log('Нет данных о пробеге автомобилей.');
      }
    });
}

export default calculateAv;

function findMaxPrice(file) {
  let maxPrice = 0;

  fs.createReadStream(file)
    .pipe(csv())
    .on('data', (row) => {
      const price = parseFloat(row.price);
      if (price > maxPrice) {
        maxPrice = price;
      }
    })
    .on('end', () => {
      console.log(`Стоимость самой дорогой машины: ${maxPrice}`);
    });
}

findMaxPrice('__fixtures__/cars1.csv');

function findOldestCar(file) {
  let oldestCar = { year: Infinity };
  fs.createReadStream(file)
    .pipe(csv())
    .on('data', (row) => {
      const year = parseInt(row.year, 10);
      if (year < oldestCar.year) {
        oldestCar = { ...row, year };
      }
    })
    .on('end', () => {
      console.log(`Самый старый автомобиль: ${oldestCar.make} ${oldestCar.model}`);
    });
}

findOldestCar('__fixtures__/cars1.csv');

function countColors(file) {
  const colorCounts = {};

  fs.createReadStream(file)
    .pipe(csv())
    .on('data', (row) => {
      const { color } = row;
      colorCounts[color] = (colorCounts[color] || 0) + 1;
    })
    .on('end', () => {
      const colorsString = Object.entries(colorCounts)
        .map(([color, count]) => `${color}: ${count}`)
        .join(', ');
      console.log(`Все цвета: ${colorsString}`);
    });
}

countColors('__fixtures__/cars1.csv');
