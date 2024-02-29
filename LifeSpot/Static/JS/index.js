/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
* 
* */

/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */

function handleSession(sessionLoger, checkUserAge) {
    if (sessionStorage.getItem("startDate") == null) {
        sessionStorage.setItem("startDate", new Date().toLocaleString());
    }
    if (sessionStorage.getItem("startAgent") == null) {
        sessionStorage.setItem("userAgent", window.navigator.userAgent);
    }
    if (sessionStorage.getItem("userAge") == null) {
        sessionStorage.setItem("userAge", prompt("Пожалуйста, введите ваш возраст?"));
        checkUserAge(true);
    }
    else {
        checkUserAge(false);
    }
    sessionLoger();
}

///*
//* Проверка возраста пользователя
//* 
//* */
function checkAge(newVisit) {

    if (sessionStorage.getItem("userAge") >= 18) {
        if (newVisit)
        {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        }
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}


///*
//* Вывод данных сессии в консоль
//* 
//* */
let sessionLog = function () {
    console.log(sessionStorage.getItem("startDate"));
    console.log(sessionStorage.getItem("userAge"));
    console.log(sessionStorage.getItem("userAgent"));
}

///*
//* Функция для фильтраци контента
//* Будет вызываться благодаря атрибуту oninput на index.html
//* 
//* */

function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

function scrollImg(direction) {
    let img = ["/slider/london.jpg", "/slider/spb.jpg", "/slider/ny.jpg"];
    let numImg = 0;
    let imgTeg = document.getElementById('imgScroll');
    let str = imgTeg.src.slice(24, imgTeg.src.length);
    for (let i = 0; i < img.length; i++) {
        if (img[i].includes(str)){
            numImg = i;
            if (direction) {
                numImg++;
            }
            else {
                numImg--;
            }
            
        }
    }
    if (numImg > img.length - 1) {
        numImg = 0;
    }
    if (numImg < 0) {
        numImg = img.length - 1;
    }
    imgTeg.src = img[numImg];
}
///*
//* Всплывающее окно будет показано по таймауту
//* 
//* */
//// setTimeout(() =>
////     alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!" ),
//// 7000);




