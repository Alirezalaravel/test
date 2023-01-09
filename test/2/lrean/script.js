
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let number = 1;

next.addEventListener('click',function(){
    number++;
    update();
})

prev.addEventListener('click',function(){
    number--;
    update();
})

function update() {
    circles.forEach((value,key) => {
        if (key < number) {
            value.classList.add('active');
        }else{
            value.classList.remove('active');
        }
    })


    if(number === 1) {
        prev.disabled = true
    } else if(number === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

