for (let i = 1; i <=150; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.sec').appendChild(box);
}

function animBg(){
    let boxes = document.querySelectorAll('.box');
    let num = Math.floor(Math.random()* boxes.length);
    boxes[num].classList.toggle('animate');
}

setInterval(animBg);