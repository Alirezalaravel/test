

const carousel  = document.querySelectorAll('.activ');
const proj  = document.querySelectorAll('.carousel');

const div1  = document.querySelector('.div1');
const div2  = document.querySelector('.div2');
const div3  = document.querySelector('.div3');

proj.forEach(element => {
    element.addEventListener('click',() => {
        myfunction1();
        element.classList.add('select');
    })
});


function myfunction1() {
    proj.forEach(element => {
        element.classList.remove('select');
    });
}







carousel.forEach(element => {
    element.addEventListener('click',() => {
        myfunction();
        element.classList.add('hide');
        console.log(carousel);
        var number = 4;
        carousel.forEach(element => {
            number -= 1;
            console.log(number);
            var x = element.className;
            if ("activ d1 hide" == x) {
                div1.style.display = 'block';
            }
            else if ("activ d2 hide" == x) {
                div2.style.display = 'block';
            }
            else if ("activ d3 hide" == x) {
                div3.style.display = 'block';
            }
        });
    })
});


function myfunction() {
    carousel.forEach(element => {
        element.classList.remove('hide');
    });
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
}

