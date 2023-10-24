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