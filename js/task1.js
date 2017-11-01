window.onload = function() {

	initSameHeight('#block1', '#block2');
	initSameHeight('.element', '.container', '.my-box');
	initSameHeight('#list-holder');
};

function initSameHeight() {
	var doc = document,
	argArray = [];

	for (var i = 0; i < arguments.length; i++) {
		argArray[i] = doc.querySelector(arguments[i]);
	}

	if (arguments.length === 1) {
		holder = doc.querySelector(arguments[0]),
		children = holder.children;
		findMaxHeight(children);
	} else {
		findMaxHeight(argArray);
	}

}


function findMaxHeight(elem) {
	var arg = elem,
	heightArray= [];

	for (var i = 0; i < arg.length; i++) {

		heightArray.push(arg[i].offsetHeight);
	}

	var maxHeight = Math.max.apply(null, heightArray);

	setMaxHeight(arg, maxHeight);
}

function setMaxHeight(elem, value) {
	var elem, value;

	for (var i = 0; i < elem.length; i++) {
		var elemHeight = parseInt(getComputedStyle(elem[i]).height),
			outerHeight = elem[i].offsetHeight,
			offset = outerHeight - elemHeight;

		if(offset) {
			elem[i].style.height = value - (offset) + 'px';
		} else {
			elem[i].style.height = value + 'px';
		}

	}
}

