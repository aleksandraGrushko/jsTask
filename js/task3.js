window.onload = function() {

	addClassOnChild('#holder');
};

function addClassOnChild(holder) {
	var doc = document,
	holder = doc.querySelector(holder),
	children = holder.children;

	for (var i = children.length - 1; i >= 0; i--) {
		children[i].className = 'element';
	}
}