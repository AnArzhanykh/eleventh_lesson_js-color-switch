const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];


const btnStartRef = document.querySelector('button[data-action="start"]');
const btnStopRef = document.querySelector('button[data-action="stop"]');
let timer;

btnStartRef.addEventListener('click', startChanged);
btnStopRef.addEventListener('click', stopChanged);

function startChanged(){

    btnStartRef.disabled = true;

    timer = setInterval(() => {

        const randomIntegerFromInterval = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        const index = randomIntegerFromInterval(0, colors.length);

        document.body.style.backgroundColor = colors[index];
    }, 1000);
}

function stopChanged(){
    btnStartRef.disabled = false;
    clearInterval(timer);
}


