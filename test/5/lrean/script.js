const stop = document.getElementById('stop');
const start = document.getElementById('start');

let number = 0;

function text() {
    value = setInterval(
        function(){
            document.querySelector('p').innerHTML += " Ali "
        },1000)
}

stop.addEventListener('click',function(){
    number--;
    clearInterval(value);   
    update();
})
start.addEventListener('click',function(){
    number++;
    text();
    update();
})

function update() {
    if (number > 0) {
    stop.disabled = false;
    start.disabled = true;
    }
    else if (number == 0) {
        stop.disabled = true;
        start.disabled = false;
    }
}