'use strict';

const modal = document.getElementById('modal');
const modal_test = document.getElementById('modal-test');
const modal_result = document.getElementById('modal-result');
const modal_timesup = document.getElementById('modal-timesup');
const btn_test = document.getElementById('btn_test');
const btn_cancel = document.getElementById('btn_cancel');
const question_container = document.getElementById('question-container');
const btn_submit = document.getElementById('btn_submit');
const item_count = document.getElementById('item-count');
let options_container = document.getElementById('options-container');
var radios = document.getElementsByName('option_list');
var timer = document.getElementById('timer');
let minutes = 1;
let seconds = 10;

const user_answer = [];
let user_select;
let correct_answers = [];
let num3 = [];
let ans;
let index = 0;
let item = 1;

window.onclick = (e) => {
    if (e.target == btn_test) {
        showElement(modal);
        hideElement(modal_result);
        hideElement(modal_timesup);
    } else if (e.target == btn_cancel) {
        hideElement(modal);
    } else if (e.target == document.getElementById('btn_start')) {
        showElement(document.querySelector('.exam-section'));
        hideElement(document.querySelector('.landing-section'));
        hideElement(modal);
        loadQuestions(index);
        item_count.innerHTML = `${item} / ${questions.length}`;
        Timer();
        minutes--;
        //console.log(ans);
    } else if (e.target == document.getElementById('btn_next')) {

        //Get the value of selected radio button
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) user_select = radios[i].value;
        }
        user_answer.push(user_select);
        correct_answers.push(ans);
        console.log(user_answer);
        console.log(correct_answers);

        loadQuestions(index += 1);
        item_count.innerHTML = `${item += 1} / ${questions.length}`;

        if (index == questions.length - 1) {
            hideElement(btn_next);
            showElement(btn_submit);
        }

    } else if (e.target == document.getElementById('btn_submit')) {
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) user_select = radios[i].value;
        }

        user_answer.push(user_select);
        correct_answers.push(ans);
        console.log(user_answer);
        console.log(correct_answers);
        let txt1;
        let percent;
        let indicator = document.getElementById('indicator');
        for (let i = 0; i < user_answer.length; i++) {
            if (correct_answers.includes(user_answer[i])) {
                num3.push(correct_answers[i]);
                percent = Math.floor((num3.length * 100 / correct_answers.length) * 1);
                console.log(percent);

                if (percent < 50) {
                    indicator.innerText = 'Failed';
                    indicator.style.color = 'red';
                } else {
                    indicator.innerText = 'Passed'
                    indicator.style.color = 'green';
                }
                indicator.innerText == 'Passed' ? txt1 = 'Congratulations' : txt1 = 'Retry Exam';

                document.getElementById('indicator1').innerHTML = `${txt1}`;
                document.getElementById('percentage').innerHTML = `${percent}%`;
                document.getElementById('correct_items').innerHTML = `Correct Items : ${num3.length}`;
                document.getElementById('incorrect_items').innerHTML = `Incorrect Items : ${correct_answers.length - num3.length}`;
                document.getElementById('total_items').innerHTML = `Total Items : ${user_answer.length}`;
            } else {
                percent = Math.floor((num3.length * 100 / correct_answers.length) * 1);
                if (percent < 50) {
                    indicator.innerText = 'Failed';
                    indicator.style.color = 'red';
                } else {
                    indicator.innerText = 'Passed'
                    indicator.style.color = 'green';
                }
                indicator.innerText == 'Passed' ? txt1 = 'Congratulations' : txt1 = 'Retry Exam';
                document.getElementById('indicator1').innerHTML = `${txt1}`;
                document.getElementById('correct_items').innerHTML = `Correct Items : ${num3.length}`;
                document.getElementById('percentage').innerHTML = `${percent}%`;
                document.getElementById('incorrect_items').innerHTML = `Incorrect Items : ${correct_answers.length - num3.length}`;
                document.getElementById('total_items').innerHTML = `Total Items : ${user_answer.length}`;
            }
        }

        showElement(modal);
        hideElement(modal_test);
        showElement(modal_result);
    } else if (e.target == document.getElementById('btn_retry')) {
        //window.location.href = 'index.html';
        hideElement(document.getElementById('modal'));
        showElement(document.querySelector('.exam-section'));
        loadQuestions(index);


    } else if (e.target == document.getElementById('btn_home')) {
        window.location.href = 'index.html';
    } else if (e.target == document.getElementById('btn_checkresult')) {
        showElement(modal);
        hideElement(modal_timesup);
        showElement(modal_result);
        clearInterval(Timer());
    }
}


function showElement(id) {
    id.style.display = 'flex';
}

function hideElement(id) {
    id.style.display = 'none';
}

function Timer() {
    var s = setInterval(function () {


        if (seconds > 0) {
            if (seconds < 10) {
                timer.innerHTML = `${minutes} : 0${seconds--}`;
            } else {
                timer.innerHTML = `${minutes} : ${seconds--}`;
            }
        } else if (minutes == 0 && seconds == 0) {

            clearInterval(s);
            showElement(modal);
            hideElement(modal_test);
            showElement(modal_timesup);
        }
        else {
            minutes--;
            seconds = 10;
            timer.innerHTML = `${minutes} : ${seconds--}`;
        }


    }, 1000);

}

function loadQuestions(index) {
    index = Math.floor(Math.random() * 54);
    options_container.innerHTML = '';
    question_container.innerHTML = `
    <p>${questions[index].question}</p>
    <img src="images/icons/${questions[index].image}" alt="Traffic Light" id="question-image">`
    ans = questions[index].answer
    for (let x = 0; x < questions[index].options.length; x++) {
        options_container.innerHTML +=
            `
            <label >
                <input type="radio" name="option_list" id="${questions[index].options[x]}" value="${questions[index].options[x]}" class="user_select">${questions[index].options[x]}
            </label>`

    }
    hideElement(btn_submit);
}
