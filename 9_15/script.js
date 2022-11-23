const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = 0

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = 1

        console.log(counter.innerText);

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})