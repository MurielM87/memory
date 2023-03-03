//liste 12 images = 2 x 6 images
let a = [1,2,3,4,5,6,1,2,3,4,5,6]
    //pour melanger
    .map(p => [p,Math.random()])
    .sort( (a,b) => a[1]-b[1] )
    .map(p => p[0])

console.log(a)

let pics = document.getElementsByTagName('img');
let eltScore = document.getElementById('score');
let score = 0;
let step = 1;
let p1, p2;
let timer = null;

for (let i=0; i<pics.length; i++){
    pics[i].src2 = 'images/img' + a[i] + '.jpg';
}


document.addEventListener('click', function(e){
    switch(step){
        case 1: //premier clic
        if (e.target.tagName=='IMG'){
            e.target.src = e.target.src2;
            p1 = e.target;
            step = 2;
        }
        break;
        case 2: //deuxieme clic
        if (e.target.tagName == 'IMG'){
            e.target.src = e.target.src2;
            p2 = e.target;
            step = 3;
        }
        timer = setTimeout(check, 1500);
        break;
        case 3: //clic suivant, n'importe ou : comparaison/action
        clearTimeout(timer);
        check();
        break;
    }
})

function check(){
    if (p1.src2==p2.src2){
        p1.replaceWith(document.createElement('span'))
        p2.replaceWith(document.createElement('span'))
        score += 50;
    }else{
        console.log("hop");
        p1.src = p2.src = 'images/img0.jpg';
        score = Math.max(0, score-30);
    }
    step = 1;
    //score
    eltScore.textContent = score;
    //fin du jeu
    if (document.getElementsByTagName('img').length == 0){
        eltScore.textContent += " Gagné !";
    }
}