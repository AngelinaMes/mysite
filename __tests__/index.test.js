// @ts-check

// eslint-disable-next-line import/no-unresolved
import { test } from 'node:test';
import assert from 'assert/strict';

import { execSync } from 'child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = { encoding: 'utf8', cwd: path.join(__dirname, '..') };
const result1 = execSync(
  'bin/cars.js __fixtures__/cars1.csv',
  // @ts-ignore
  options,
);
const result2 = execSync(
  'bin/cars.js __fixtures__/cars2.csv',
  // @ts-ignore
  options,
);
const rows1 = result1.trim().split('\n');
const rows2 = result2.trim().split('\n');

test('step1', () => {
  assert.strictEqual(rows1[0], 'Количество автомобилей: 20');
  assert.strictEqual(rows2[0], 'Количество автомобилей: 16');
});

test('step2', () => {
  assert.strictEqual(rows1[1], 'Средний пробег: 30300');
  assert.strictEqual(rows2[1], 'Средний пробег: 39000');
});

test('step3', () => {
  assert.strictEqual(rows1[2], 'Стоимость самой дорогой машины: 85000');
  assert.strictEqual(rows2[2], 'Стоимость самой дорогой машины: 90000');
});

test('step4', () => {
  assert.strictEqual(rows1[3], 'Самый старый автомобиль: Volkswagen Jetta');
  assert.strictEqual(rows2[3], 'Самый старый автомобиль: Kia Optima');
});

test('step5', () => {
  assert.strictEqual(rows1[4], 'Все цвета: Red: 3, Black: 4, White: 5, Gray: 3, Yellow: 1, Blue: 3, Green: 1');
  assert.strictEqual(rows2[4], 'Все цвета: Red: 3, Black: 4, Gray: 4, White: 3, Blue: 2');
});
