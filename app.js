"use strict";

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let titleProject = prompt("Название проекта?");
let screensValue = prompt(
  "Типы экранов? (шаблонные, с уникальным дизайном, с анимациями)",
);
let responsive = confirm("Нужен ли респонсивный сайт?");
let screenPrice;
let percentage = 15;

while (
  !isNumber(screenPrice) ||
  screenPrice === null ||
  screenPrice.trim() === ""
) {
  screenPrice = prompt("Сколько будет стоить верстка экранов?");
}
screenPrice = +screenPrice; // Переводим в числовой тип

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let serviceName = prompt("Какой сервис нужен?");
    let servicePrice = "";

    while (
      !isNumber(servicePrice) ||
      servicePrice === null ||
      servicePrice.trim() === ""
    ) {
      servicePrice = prompt("Сколько это будет стоить?");
    }

    sum += +servicePrice; // Прибавляем к общей сумме
  }

  return sum;
};

let allServicePrices = getAllServicePrices();

function getFullPrice(allServicePrices, screenPrice) {
  return allServicePrices + screenPrice;
}

let fullPrice = getFullPrice(allServicePrices, screenPrice);

function getTitle() {
  return (
    titleProject.trim().charAt(0).toUpperCase() +
    titleProject.trim().slice(1).toLowerCase()
  );
}

titleProject = getTitle();

function getServicePercentPrices() {
  return Math.round(fullPrice - fullPrice * (percentage / 100));
}

let servicePercentPrice = getServicePercentPrices();

function getRollbackMessage(price) {
  if (price > 50000) {
    return "Сделаем скидку в 10%";
  } else if (price === 50000 || price === 20000) {
    return "Вы попали точно в границу ценового диапазона!";
  } else if (price > 20000 && price < 50000) {
    return "Сделаем скидку 5%";
  } else if (price > 0 && price < 20000) {
    return "Скидка не предусмотрена";
  } else if (price === 0) {
    return "Цена не указана";
  } else {
    return "Что-то пошло не так";
  }
}

console.log("Название проекта:", titleProject);
console.log("Типы экранов:", screensValue);
console.log("Адаптивность:", responsive);
console.log("Общая стоимость проекта (fullPrice):", fullPrice);
console.log("Стоимость доп. услуг (allServicePrices):", allServicePrices);
console.log("Итоговая сумма после отката подрядчику:", servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
