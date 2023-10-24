document.getElementById('solve').addEventListener('click', function () {
    let x = parseInt(document.getElementById('num1').value);
    let operation = document.getElementById('find').value;

    var answer;
    switch (operation) {
        case 'area':
            answer = x * x;
            break;
        case 'perimeter':
            answer = x * 4;
            break;
    }
    document.getElementById('value').innerHTML = `<h1 style="color: #FF92C2; font-size: 50px; text-shadow: 2px 2px #000;margin: 0; padding: 0;"> ${answer} </h1>`;
})
document.getElementById('close').addEventListener('click', function(){
    document.getElementById('Squaremodal').style.display = 'none';
})
document.getElementById('Square').addEventListener('click', function(){
    document.getElementById('Squaremodal').style.display = 'block';
    
})
document.getElementById('backdrop').addEventListener('click', function(){
    document.getElementById('Squaremodal').style.display = 'none';
})

function areaRectangle(){

    var l = parseInt(document.getElementById("length").value);
    var w = parseInt(document.getElementById("width").value);
    var area = length * width;
  
}

function areaAndPerimeter(){

    var l = parseInt(document.getElementById("length").value);
    var w = parseInt(document.getElementById("width").value);
    var area = l * w;
    var perimeter = 2 * (l + w);

}

document.getElementById('submit').addEventListener('click', function(){
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var num1 = parseInt(num1.value);
    var num2 = parseInt(num2.value);
    var operator = document.getElementById('operations').value

    const pi = 3.14; 
    const radius = 10;

    var results;

        if(operator === 'diameter'){
            results = pi* (num1 * num1);
        }else if(operator === 'radius'){
            results = 2*pi*num1;

        }
        document.getElementById('Answer').innerHTML= `<div>${results}</div>`;
    })
    document.getElementById('close').addEventListener('click', function(){
        document.getElementById('CIRCLE-MODAL').style.display = 'none';
    })
    document.getElementById('Circle').addEventListener('click', function(){
        document.getElementById('CIRCLE-MODAL').style.display = 'block';
        
    })
    document.getElementById('backdrop').addEventListener('click', function(){
        document.getElementById('CIRCLE-MODAL').style.display = 'none';
    })