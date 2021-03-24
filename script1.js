// Есть 3 input. Выводить в textarea содержимое всех полей ввода через запятую. Использовать setInterval.


let inputElements = document.querySelectorAll('input');
let textareaElements = document.querySelector('textarea');


function showInput() {
	textareaElements.value = '';
	for (let i = 0; i < inputElements.length; i++) {
		if (i == inputElements.length - 1) {
			textareaElements.value += inputElements[i].value;
		} else {
			textareaElements.value += inputElements[i].value + ', ';
		}
	}
}

setInterval(showInput, 10000)


// Вы такой вариант записи имели в виду в комментарии?

// setInterval(showInput.bind(inputElements), 10000)