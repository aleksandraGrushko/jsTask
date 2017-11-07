window.onload = function() {

	listInfo('li');
};

function listInfo(el) {
	var li = document.querySelectorAll(el);

	for (var i = li.length - 1; i >= 0; i--) {
		li[i].addEventListener("click", handler);
	}

	function handler(e) {
		e.stopPropagation();
		var target = e.target,
		ul = target.parentNode,
		li = ul.children,
		index = [].indexOf.call(li, target);

		alert((index + 1) + " элемент" + " из " + li.length);
	}
}