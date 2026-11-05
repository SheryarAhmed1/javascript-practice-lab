const h1 = document.querySelector('h1');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const bg = document.querySelector('#bodyBg');

//Generating random rgb color
const getRandomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

count = 0;
function countStyle() {
    if (count < 0) {
        h1.classList.add('text-red-500');
        h1.classList.remove('text-green-500');
    } else if (count > 0) {
        h1.classList.remove('text-red-500');
        h1.classList.add('text-green-500');
    } else {
        h1.classList.remove('text-red-500');
        h1.classList.remove('text-green-500');
    }
}

function changebtn1() {
    count = count + 1;
    h1.textContent = count;
    countStyle();
    btn1.style.backgroundColor = getRandomColor();
}
function changebtn2() {
    count = count - 1;
    h1.textContent = count;
    countStyle();
    btn2.style.backgroundColor = getRandomColor();
}
function background() {
    document.body.style.backgroundColor = getRandomColor();
}