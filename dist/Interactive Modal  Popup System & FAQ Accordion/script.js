const modalbtn = document.querySelector('#modalbtn');
const box = document.querySelector('#box');
const exitbtn = document.querySelector('#exitbtn');

let accordion1 = document.querySelector('#accordion1');
let accordion2 = document.querySelector('#accordion2');
let accordion3 = document.querySelector('#accordion3');
let para1 = document.querySelector('#para1');
let para2 = document.querySelector('#para2');
let para3 = document.querySelector('#para3');

modalbtn.addEventListener('click', function () {
    box.classList.remove('hidden');
});

exitbtn.addEventListener('click', () => {
    box.classList.add('hidden');
});

accordion1.addEventListener('click', () => {
    para1.classList.toggle('hidden')
});

accordion2.addEventListener('click', () => {
    para2.classList.toggle('hidden')
});

accordion3.addEventListener('click', () => {
    para3.classList.toggle('hidden')
});