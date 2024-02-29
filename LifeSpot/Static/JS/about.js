/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
* 
* */
function getComment() {
    // Создадим объект
    function Review() {
        this.userName = prompt("Как вас зовут ?"),
            this.comment = prompt("Напишите свой отзыв"),
            this.date = new Date().toLocaleString()
    };

    let feedback = new Review();

    if (confirm('Хотите чтобы ваш отзыв могли оценить другие пользователи?')) {
        feedback.rate = 0;
    }
    writeReview(feedback);
}

/*
* Запишем отзыв на страницу 
* 
* */
const writeReview = review => {
    let rateComment = '';
    if (review.hasOwnProperty('rate')) {
        let buttonId = Math.random();
        rateComment += '<b style="color: green">Рейтинг: </b>' + '<button style=" border: none" backgroundcolor:  " id="' + buttonId + '" onclick="addLike(this.id)">' + review.rate + ' ❤️' + '</button>';
    }
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']} ${rateComment}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}

function addLike(id) {
    let buttonLike = document.getElementById(id);

    let array = buttonLike.innerText.split(' ');

    let numLike = parseInt(array[0], 10);

    numLike++;

    array[0] = numLike;

    buttonLike.innerText = array.join(' ');
}