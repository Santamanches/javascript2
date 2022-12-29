var x = +prompt('Введите первое число');
var y = +prompt('Введите второе число');
var z = +prompt('Введите третье число');

if (x<z && x>y || x>z && x<y){
    alert('Ваше среднее число равно ' + x)
}else if (y<z && y>x || y>z && y<z){
    alert('Ваше среднее число равно ' + y);
}else if (z<x && z>y || z>x && z<y){
    alert('Ваше среднее число равно ' + z);
}