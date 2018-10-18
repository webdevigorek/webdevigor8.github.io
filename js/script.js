$(document).ready (function(){

$( "button" ).click(function(){ // функция срабатывает по нажатию кнопки
var taskArray = [];

function loadingbar(){ //loading bar
if(!Modernizr.meter){
				alert('Извините, но Ваш браузер не поддерживает HTML5 прогресс бар!');
			} else {
				var progressbar = $('#progressbar'),
					max = progressbar.attr('max'),
					time = (300/max)*5,	
			        value = progressbar.val();

			    var loading = function() {
			        value += 1;
			        addValue = progressbar.val(value);
			        
			        $('.progress-value').html(value + '%');

			        if (value == max) {
			            clearInterval(animate);			           
			        }
			    };

			    var animate = setInterval(function() {
			        loading();
			    }, time);
			};
		};
loadingbar();

$("textarea[name=task]").each(function() { // функция перевода текста из текстового поля в массив
   taskArray.push($(this).val());
});


var gluing = taskArray.join('');
var massiv = [];
massiv = gluing.split('');

function unique(massiv){ //функция поиска уникального элемента
	for (var i = 0; i < massiv.length; i++){
	var non_exclusive = false;
	for (var j = 0; j < massiv.length; j++){
	if (massiv[i] == massiv[j] && i != j){
	non_exclusive = true;
	break;
	} 
	}
	if(!non_exclusive){
	//colorOdd(document.getElementById('#text')[1],'#f90');	
	//$("#text")[1].style.color = '#ff0000';
	return $('resultaty').innerHTML = 'Найденный элемент'+' : '+ massiv[i];
	}
}
return "Исключений нет!";
}
 document.getElementById("resultaty").innerHTML = unique(massiv);
//$('#contenInput').text([ massiv.join('') ]);
//$('#contenInput').text($.inArray(element,massiv)).style.color = 'blue'; 
});
//document.getElementById(massiv[element]).style.color = 'blue';
});

