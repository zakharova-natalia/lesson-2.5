let titleProject = prompt("Название проекта?");
let screensValue = prompt(
  "Типы экранов? (шаблонные, с уникальным дизайном, с анимациями)",
);
let responsive = confirm("Нужен ли респонсивный сайт?");
let screenPrice = 2000;
let percentage = 15;

let service1 = prompt("Какой сервис нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой еще сервис тебе нужен?");
let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.round(
  fullPrice - fullPrice * (percentage / 100),
);

console.log(
  "Итоговая сумма после вычета процента подрядчику:" + servicePercentPrice,
);

if (fullPrice > 50000) {
  console.log("сделаем скидку в 10%");
} else if (fullPrice === 50000 || fullPrice === 20000) {
  console.log("Вы попали точно в границу ценового диапазона!");
} else if (fullPrice > 20000 && fullPrice < 50000) {
  console.log("сделаем скидку 5%");
} else if (fullPrice > 0 && fullPrice < 20000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice === 0) {
  console.log("цена не указана");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}

console.log("Название проекта:", titleProject);
console.log("Типы экранов:", screensValue);

console.log("Адаптивность:", responsive);
console.log("Общая стоимость проекта:", fullPrice);
console.log("Название проекта:", titleProject);
console.log("Типы экранов:", screensValue);

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

let allServicePrices = getAllServicePrices();
console.log(allServicePrices);

function getFullPrice(allServicePrices, screenPrice) {
  return allServicePrices + screenPrice;
}

fullPrice = getFullPrice(allServicePrices, screenPrice);

console.log("Полная стоимость проекта:" + fullPrice);

function getTitle() {
  return (
    titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase()
  );
}

titleProject = getTitle();

console.log("Название проекта после обработки:", titleProject);

function getServicePercentPrices() {
  return Math.round(fullPrice - fullPrice * (percentage / 100));
}

servicePercentPrice = getServicePercentPrices();

console.log(
  "Итоговая сумма после вычета процента подрядчику:",
  servicePercentPrice,
);

function getRollbackMessage() {
  if (fullPrice > 50000) {
    console.log("сделаем скидку в 10%");
  } else if (fullPrice === 50000 || fullPrice === 20000) {
    console.log("Вы попали точно в границу ценового диапазона!");
  } else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log("сделаем скидку 5%");
  } else if (fullPrice > 0 && fullPrice < 20000) {
    console.log("Скидка не предусмотрена");
  } else if (fullPrice === 0) {
    console.log("цена не указана");
  } else if (fullPrice < 0) {
    console.log("Что то пошло не так");
  }
}

getRollbackMessage(fullPrice);
