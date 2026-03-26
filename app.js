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
