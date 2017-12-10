var language = 'UKR';

function translate(key, dictionary, lang) {
	var inputWordExist = false;
	key = key.replace(/\s/g, '');
	var newResult = document.createElement('div');
	newResult.id = 'result';
	document.getElementById('block').appendChild(newResult);

	if (lang == 'UKR') {
		for (var i = 0; i < dictionary.length; i++) {
	        if (dictionary[i].UKR.toUpperCase() === key.toUpperCase()) {
	        	inputWordExist = true;
	        	create('translation', dictionary[i].ENG);
	        }
    	}
	}

	if (lang == 'ENG') {
		for (var i = 0; i < dictionary.length; i++) {
	        if (dictionary[i].ENG.toUpperCase() === key.toUpperCase()) {
	        	inputWordExist = true;
	        	create('translation', dictionary[i].UKR);
	        }
    	}
	}

	if (key == "") {
		create('error', 'Необхідно ввести слово');
	}
    else if (!inputWordExist) {
    	create('error', 'Немає перекладу для введеного слова');
    };

};

document.getElementById('word').addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('translateButton').click();
    }
});

function create(className, content) {
	var newDiv = document.createElement('div');
	newDiv.className = className;
	newDiv.innerHTML = content;
	document.getElementById('result').appendChild(newDiv);
};

function clear() {
	document.getElementById('result').remove();
}

window.addEventListener("load", function() {
	document.querySelector('#en').addEventListener("click", function() {
		language = 'ENG';
	});

	document.querySelector('#ua').addEventListener("click", function() {
		language = 'UKR';
	});

	// document.querySelector('input[name="lang"]').addEventListener("click", function() {
	// 	language = document.querySelector('input[name="lang"]:checked').value;
	// 	console.log(document.querySelector('input[name="lang"]:checked').value)
	// });

    document.getElementById('translateButton').addEventListener("click", function(){
        var word = document.getElementById('word').value;
        clear();
        translate(word, dict, language);
        if (!document.body.classList.contains('show')) {
        	document.getElementById('result').className += 'show';
		};
    });
});

