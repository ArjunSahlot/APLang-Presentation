var hoverBoxes = document.querySelectorAll(".hover-box");
hoverBoxes.forEach(function (hoverBox) {
	hoverBox.addEventListener("click", function () {
		toggleVisibility(hoverBox.id);
	});
});

function toggleVisibility(idName) {
	var element = document.querySelector("#" + idName);
	element.classList.toggle("revealed");
}

function positionHoverBoxes() {
	var article = document.getElementById("article");
	var articleRect = article.getBoundingClientRect();

	var b1 = document.getElementById("b1");

	b1.style.left = articleRect.left - b1.offsetWidth + 25 + "px";
	b1.style.top = articleRect.top + window.scrollY + 1000 + "px";
}

positionHoverBoxes();

window.onresize = positionHoverBoxes;
