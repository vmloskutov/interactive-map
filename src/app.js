import './app.scss';
import 'bootstrap';

let dropdown = document.getElementById("dropdown");
let idArr = [
  ["RU-MOW",  "Москва"],
  ["RU-CHE", "Челябинская область"],
  ["RU-ORL",  "Орловская область"],
  ["RU-OMS",  "Омская область"],
  ["RU-LIP",  "Липецкая область"],
  ["RU-KRS",  "Курская область"],
  ["RU-RYA",  "Рязанская область"],
  ["RU-BRY",  "Брянская область"],
  ["RU-KIR",  "Кировская область"],
  ["RU-ARK",  "Архангельская область"],
  ["RU-MUR",  "Мурманская область"],
  ["RU-SPE",  "Санкт-Петербург"],
  ["RU-YAR",  "Ярославская область"],
  ["RU-ULY",  "Ульяновская область"],
  ["RU-NVS",  "Новосибирская область"],
  ["RU-TYU",  "Тюменская область"],
  ["RU-SVE",  "Свердловская область"],
  ["RU-NGR",  "Новгородская область"],
  ["RU-KGN",  "Курганская область"],
  ["RU-KGD",  "Калининградская область"],
  ["RU-IVA",  "Ивановская область"],
  ["RU-AST",  "Астраханская область"],
  ["RU-KHA",  "Хабаровский край"],
  ["RU-CE",  "Чеченская республика"],
  ["RU-UD",  "Удмуртская республика"],
  ["RU-SE",  "Республика Северная Осетия"],
  ["RU-MO",  "Республика Мордовия"],
  ["RU-KR",  "Республика  Карелия"],
  ["RU-KL",  "Республика  Калмыкия"],
  ["RU-IN",  "Республика  Ингушетия"],
  ["RU-AL",  "Республика Алтай"],
  ["RU-BA",  "Республика Башкортостан"],
  ["RU-AD",  "Республика Адыгея"],
  ["RU-CR",  "Республика Крым"],
  ["RU-SEV",  "Севастополь"],
  ["RU-KO",  "Республика Коми"],
  ["RU-PNZ",  "Пензенская область"],
  ["RU-TAM",  "Тамбовская область"],
  ["RU-LEN",  "Ленинградская область"],
  ["RU-VLG",  "Вологодская область"],
  ["RU-KOS",  "Костромская область"],
  ["RU-PSK",  "Псковская область"],
  ["RU-YAN",  "Ямало-Ненецкий АО"],
  ["RU-CHU",  "Чукотский АО"],
  ["RU-YEV",  "Еврейская автономская область"],
  ["RU-TY",  "Республика Тыва"],
  ["RU-SAK",  "Сахалинская область"],
  ["RU-AMU",  "Амурская область"],
  ["RU-BU",  "Республика Бурятия"],
  ["RU-KK",  "Республика Хакасия"],
  ["RU-KEM",  "Кемеровская область"],
  ["RU-ALT",  "Алтайский край"],
  ["RU-DA",  "Республика Дагестан"],
  ["RU-KB",  "Кабардино-Балкарская республика"],
  ["RU-KC",  "Карачаевая-Черкесская республика"],
  ["RU-KDA",  "Краснодарский край"],
  ["RU-ROS",  "Ростовская область"],
  ["RU-SAM",  "Самарская область"],
  ["RU-TA",  "Республика Татарстан"],
  ["RU-ME",  "Республика Марий Эл"],
  ["RU-CU",  "Чувашская республика"],
  ["RU-NIZ",  "Нижегородская край"],
  ["RU-VLA",  "Владимировская область"],
  ["RU-MOS",  "Московская область"],
  ["RU-KLU",  "Калужская область"],
  ["RU-BEL",  "Белгородская область"],
  ["RU-ZAB",  "Забайкальский край"],
  ["RU-PRI",  "Приморский край"],
  ["RU-KAM",  "Камачатский край"],
  ["RU-MAG",  "Магаданская область"],
  ["RU-SA",  "Республика Саха"],
  ["RU-KYA",  "Красноярский край"],
  ["RU-ORE",  "Оренбургская область"],
  ["RU-SAR",  "Саратовская область"],
  ["RU-VGG",  "Волгоградская область"],
  ["RU-VOR",  "Ставропольский край"],
  ["RU-SMO",  "Смоленская область"],
  ["RU-TVE",  "Тверская область"],
  ["RU-PER",  "Пермская область"],
  ["RU-KHM",  "Ханты-Мансийский АО"],
  ["RU-KHM",  "Ханты-Мансийский АО"],
  ["RU-TOM",  "Томская область"],
  ["RU-IRK",  "Иркутская область"],
  ["RU-NEN",  "Ненецскй АО"],
  ["RU-STA",  "Ставропольский край"],
  ["RU-TUL",  "Тульская область"]
];

let oblast = document.querySelectorAll("path");
window.onload = function(){
  oblast.forEach(function(item) {
    item.style.fill= "#dde1e6";
  });
  for (let i = 0; i < idArr.length; i++) {
    dropdown.insertAdjacentHTML('beforeend', `<li class=""><a href="#">${idArr[i][1]}<hr></a></li>`);
  }
}
oblast.forEach(function(item) {
  item.addEventListener("mouseover", function(event) {
    event.target.style.fill= "#ffffff";
  });
  item.addEventListener("mouseout", function(e) {
      event.target.style.fill= "#dde1e6";
  });
});

let description = document.querySelector(".description");
let enabled = document.querySelectorAll(".enabled");
enabled.forEach(function(item) {
  item.addEventListener("mouseover", function() {
  description.classList.add('active');
  let area;
  for (let i = 0; i < idArr.length; i++) {
    if (this.getAttribute("id") === idArr[i][0]) {
      area = idArr[i][1];
    }
  }
  description.innerHTML = area;
  });
  item.addEventListener("mouseout", function() {
    description.classList.remove("active");
  });
});

window.addEventListener('mousemove', function(e){
  description.style.left = e.pageX + "px";
  let y = e.pageY - 70
  description.style.top = y + "px";
});
