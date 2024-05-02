
const downBtn = document.querySelector('#down');
const upBtn = document.querySelector('#up');
const output = document.querySelector('#info');


let counter = 0;



function downCounter(){
    counter --;
    if(counter < 0 ){counter = 5}
    infoOutput();
};


function upCounter(){
    counter ++;
    if (counter > 5){counter = 0}
    infoOutput();
   
};

function infoOutput(){
    const infoString = `Du hast <b>${counter}</b> mal geklickt`;
    output.innerHTML = infoString;
}


downBtn.addEventListener('click',downCounter);
upBtn.addEventListener('click',upCounter);

















