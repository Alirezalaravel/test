


const large = document.getElementById('large');
const small = document.getElementById('small');

const next = document.getElementById('Next');
const prev = document.getElementById('Prev');

const ud = document.getElementById('upside_down');
const normal = document.getElementById('normal');

let number = 0;

let photo = 1;

let stateOf = 0;


ud.addEventListener("click",() => {
    stateOf++;
    document.querySelector('img').classList.add("activ");
    update();
})

normal.addEventListener("click",() => {
    stateOf--;
    document.querySelector('img').classList.remove("activ");
    update();
})



next.addEventListener('click', () => {
    if (photo == 3) {
        photo = 0;
    }
    photo++;
    change();
})
prev.addEventListener('click', () => {
    if (photo == 1) {
        photo = 4;
    }
    photo--;
    change();
})


large.addEventListener('click', () => {
    number--;
    document.querySelector('img').style.width = '600px';
    document.querySelector('img').style.marginTop = '0px';
    size();
})
small.addEventListener('click', () => {
    number++;
    document.querySelector('img').style.width = '300px';
    document.querySelector('img').style.marginTop = '186px';
    size();
})

function size() {
    if (number == 0) {
        document.getElementById('large').style.display = 'none';
        document.getElementById('small').style.display = 'inline';
    }
    else if (number > 0) {
        document.getElementById('small').style.display = 'none';
        document.getElementById('large').style.display = 'inline';
    }
}

function change() {
    if (photo == 1) {
        document.querySelector('img').src = 'image/poster_1.jpeg';
    }
    else if (photo == 2) {
        document.querySelector('img').src = 'image/poster_2.jpeg';
    }
    else if (photo == 3) {
        document.querySelector('img').src = 'image/poster_3.webp';
    }

}

function update() {
    if (stateOf == 0) {
        ud.style.display = 'inline';
        normal.style.display = 'none';
    }
    else if (stateOf > 0) {
        normal.style.display = 'inline';
        ud.style.display = 'none';
    }
}
