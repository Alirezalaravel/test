        
        const on = document.getElementById('on');
        const off = document.getElementById('off');
        
        let number = 0;

        on.addEventListener('click',function(){
            number++;
            update();
            document.getElementById('img').src = "image/pic_bulbon (1).gif"; 
        })
        off.addEventListener('click',function(){
            number--;
            update();
            document.getElementById('img').src = "image/pic_bulboff (2).gif";
        })


        function update() {
            if (number > 0) {
            on.disabled = true;
            off.disabled = false;
            }
            else if (number == 0) {
                off.disabled = true;
                on.disabled = false;
            }
        }