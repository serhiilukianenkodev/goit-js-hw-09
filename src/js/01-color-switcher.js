const refs = {
    btnStartEl: document.querySelector('button[data-start]'),
    btnStopEl: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

let intervalId = null;
preload();

refs.btnStartEl.addEventListener('click', onBtnStartClick);
refs.btnStopEl.addEventListener('click', onBtnStopClick);

function preload(){
    refs.btnStopEl.disabled = true
}

function onBtnStartClick(){
    intervalId = setInterval(()=>{refs.body.style.backgroundColor = getRandomHexColor()}, 1000);
    refs.btnStartEl.disabled = true;
    refs.btnStopEl.disabled = false;
}

function onBtnStopClick(){
    clearInterval(intervalId);
    refs.btnStartEl.disabled = false;
    refs.btnStopEl.disabled = true;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

