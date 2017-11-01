window.onload = function() {

	initCenterImg('#list-holder');
};

function initCenterImg(holder) {
	var doc = document,
	list = doc.querySelector(holder),
	children = list.children;

	for (var i = children.length - 1; i >= 0; i--) {
		var li = children[i],
		img = li.getElementsByTagName('img')[0];

		setPosition(li, img);
	}
}

function setPosition(parent, image) {
	var parent, image,
		imgTopPosition = (parent.offsetHeight - image.offsetHeight)/2,
		imgLeftPosition = (parent.offsetWidth - image.offsetWidth)/2;
		
		image.style.margin = imgTopPosition + 'px' + " " + imgLeftPosition + 'px';
}
