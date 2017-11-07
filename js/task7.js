window.onload = function() {
	popupOpen('.button');
};

function popupOpen(el) {
	var button = document.querySelectorAll(el);

	for (var i = button.length - 1; i >= 0; i--) {
		button[i].addEventListener("click", handler);
	}

	function handler(e) {
		e.stopPropagation();

		var target = e.target,
		baseSubling = target.nextSibling,
		sibling = (baseSubling.nodeType == 1) ? baseSubling : baseSubling.nextSibling;


		if (window.getComputedStyle(sibling).display == "none") {
			sibling.style.display = "block"
		} else {
			sibling.style.display = "none"
		}
	}
}