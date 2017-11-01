window.onload = function() {

	customList('.list');
};

function customList(holder) {
	var doc = document,
	holder = doc.querySelectorAll(holder);

	holder.forEach(function(item, i){
		colorNumberedList(holder[i]);
	})
}

function colorNumberedList(list) {
	var list,
	children = list.children;

	for (var i = children.length - 1; i >= 0; i--) {
		var li = children[i];
		
		createNumber(i, li);

		if ([i] % 2) {
			li.className = 'alt';
		}
	}
}

function createNumber(value, el) {
	span = document.createElement('span');
	span.innerHTML = value + 1;

	el.insertBefore(span, el.firstChild);
}