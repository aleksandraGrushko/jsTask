window.onload = function() {
	randomImage('visual');
};

function randomImage(el) {
	var listImg = document.getElementById(el),
		listImgText = listImg.innerHTML.replace(" ", '').match(/\w+\/\w+\.jpg/gi),
		img = document.createElement("img"),
		imgSrc = Math.floor ( Math.random() * (listImgText.length));

		img.src = listImgText[imgSrc];

	listImg.innerHTML = '';
	listImg.append(img);
}