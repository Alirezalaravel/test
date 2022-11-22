

const labels = document.querySelectorAll('p')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 500}ms">${letter}</span>`)
        .join('')    
});

// روش دوم روش زیر
// const label = document.querySelector('p')

// label.innerHTML = label.innerText
//     .split('')
//     .map((letter, idx) => `<span style="transition-delay:${idx * 500}ms">${letter}</span>`)
//     .join('')    

const spans = document.querySelectorAll("span");
const element = document.querySelector("p");


element.classList.add('activ');
const name = prompt('Please enter your name')

if (name != "") {
    const length= name.length;
    element.style.width = (length*10+9)+"px"
    element.innerText = name;
}

element.addEventListener("mouseover", function() {

    spans.forEach(span => {
        span.classList.add('x');
    });
    element.classList.remove('activ');

});
element.addEventListener("mouseout", function() {

    spans.forEach(span => {
        span.classList.remove('x');
    });
    element.classList.add('activ');

});







