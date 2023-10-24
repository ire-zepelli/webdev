function getAreaS(x){
    return x*x;
}

function getPerimeterS(x){
    return x*4;
}

function getAreaR(l,w){
    return l*w;
}

function getPerimeterR(l,w){
    return 2*(l+w);
}
function getCircumD(x){
    return 3.14*x;
}
function getCircumR(x){
    return 2*3.14*x;
}

//rectangle
document.getElementById('Rectangle').addEventListener('click', function(){
    document.getElementById('RectangleModal').style.display = 'block';
    
})
document.getElementById('close-rectangle').addEventListener('click', function(){
    document.getElementById('RectangleModal').style.display = 'none';
})

// square
document.getElementById('Square').addEventListener('click', function(){
    document.getElementById('Squaremodal').style.display = 'block';
})
document.getElementById('close-square').addEventListener('click', function(){
    document.getElementById('Squaremodal').style.display = 'none';
})
//circle
document.getElementById('close-circle').addEventListener('click', function(){
    document.getElementById('Ciclemodal').style.display = 'none';
})
document.getElementById('Cicle').addEventListener('click', function(){
    document.getElementById('Ciclemodal').style.display = 'block';
    
})
//circle
document.getElementById('solve-square').addEventListener('click', function () {
    let x = parseInt(document.getElementById('num1').value);
    let operation = document.getElementById('find-square').value;

    var answerSquare;
    switch (operation) {
        case 'area':
            answerSquare = getAreaS(x);
            break;
        case 'perimeter':
            answerSquare = getPerimeterS(x);
            break;
    }
    document.getElementById('value-square').innerHTML = `<h1 style="color: #FF92C2; font-size: 50px; text-shadow: 2px 2px #000;margin: 0; padding: 0;"> ${answerSquare} </h1>`;
})

// //rectangle
document.getElementById('solve-rectangle').addEventListener('click', function () {
    let l = parseInt(document.getElementById('Length').value);
    let w = parseInt(document.getElementById('Width').value);
    let operation = document.getElementById('find-rectangle').value;

    var answerRectangle;
    switch (operation) {
        case 'area':
            answerRectangle = getAreaR(l,w);
            break;
        case 'perimeter':
            answerRectangle = getPerimeterR(l,w);
            break;
    }
    console.log(answerRectangle)
    console.log(getAreaR(l,w));
    console.log(getPerimeterR(l,w));

    document.getElementById('value').innerHTML = `<h1 style="color: #FF92C2; font-size: 50px; text-shadow: 2px 2px #000;margin: 0; padding: 0;"> ${answerRectangle} </h1>`;
})

//circle
document.getElementById('solve-circle').addEventListener('click', function () {
    let x = parseInt(document.getElementById('dia-radValue').value);
    let operation = document.getElementById('find-circle').value;

    var answerCircle;
    switch (operation) {
        case 'diameter':
            answerCircle = getCircumD(x);
            break;
        case 'radius':
            answerCircle = getCircumR(x);
            break;
    }
    document.getElementById('value-circle').innerHTML = `<h1 style="color: #FF92C2; font-size: 50px; text-shadow: 2px 2px #000;margin: 0; padding: 0;"> ${answerCircle} </h1>`;
})