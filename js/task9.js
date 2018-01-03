window.onload = function() {
	initGallery('gallery', 'btn');
};

function initGallery(el, button) {
	var gallery = document.getElementById(el),
	li = gallery.children,
	button = document.getElementById(button),
	value = li.length,
	index = 0,
	timer;


	button.addEventListener("click", handler);

	function handler(e) {
		var target = e.target;

		if(target.innerHTML == "PLAY") {
			target.innerHTML = "PAUSE";
			clearTimeout(timer);
		} else {
			target.innerHTML = "PLAY";
			timer = setTimeout(galleryFunction, 500);
		}
	}

	function removeIndex(el) {
		for (var i = el.length - 1; i >= 0; i--) {
			el[i].style.zIndex = '';
		}
	}

	function galleryFunction() {
		if(index < value) {
			removeIndex(li);
			li[index].style.zIndex = 3;

			index++;
			timer = setTimeout(galleryFunction, 500);
		} else {
			li[index - 1].style.zIndex = '';
			li[0].style.zIndex = 3;
			clearInterval(timer);
			value = li.length,
			index = 1;
			timer = setTimeout(galleryFunction, 500);
		}
	}

	galleryFunction();
}