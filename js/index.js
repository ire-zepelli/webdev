document.getElementById('solve').addEventListener('click', function () {
    let x = parseInt(document.getElementById('num11').value);
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

//////////////////////////////////////////////////////

document.getElementById('Enter').addEventListener('click', function () {
    let l = parseInt(document.getElementById('length').value);
    let w = parseInt(document.getElementById('width').value);
    let operations = document.getElementById('founded').value;

    var name;
    switch (operations) {
        case 'AreaR':
            name = l * w;
            break;
        case 'PerimeterR':
            name = 2 * (l + w);
            break;
    }
    document.getElementById('Valued').innerHTML = `<h1 style="color: #FF92C2; font-size: 50px; text-shadow: 2px 2px #000;margin: 0; padding: 0;"> ${name} </h1>`;
})
document.getElementById('closed').addEventListener('click', function(){
    document.getElementById('Rectanglemodal').style.display = 'none';
})
document.getElementById('Rectangle').addEventListener('click', function(){
    document.getElementById('Rectanglemodal').style.display = 'block';
    
})
document.getElementById('dropback').addEventListener('click', function(){
    document.getElementById('Rectanglemodal').style.display = 'none';
})
/////////////////////////////////////
console.log(answer)
////////////////////////////////////////////////////

    
