



const tag = document.querySelector('div');

tag.addEventListener('click',() => {
    tag.style.backgroundColor = "coral"
});
tag.addEventListener('dblclick',() => {
    tag.style.backgroundColor = "cyan"
});
addEventListener('scroll',() => {
    tag.style.backgroundColor = "darkkhaki"
});
tag.addEventListener('mouseleave',() => {
    tag.style.backgroundColor = "red"
});
tag.addEventListener('mouseenter',() => {
    tag.style.backgroundColor = "blue"
});