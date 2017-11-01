window.onload = function() {

	addClassOnChild('.list');
};

function addClassOnChild(holder) {
	var doc = document,
	holder = doc.querySelectorAll(holder);

	for (var i = holder.length - 1; i >= 0; i--) {
		var list = holder[i],
			children = list.children,
			firstEl = children[0];
			lastEl = children[children.length - 1];

		firstEl.className = 'first';
		lastEl.className = 'last';
	}
}