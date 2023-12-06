var hoverCovers = document.querySelectorAll(".hover-cover");
hoverCovers.forEach(function (hoverCover) {
	hoverCover.addEventListener("click", function () {
		toggleVisibility(hoverCover.id);
	});
});

function toggleVisibility(idName) {
	var cover = document.querySelector("#" + idName);
	var highlight = document.querySelector(".h" + idName.slice(1));
	cover.classList.toggle("revealed");
	highlight.classList.toggle("yellow");
}

function positionHoverBoxes() {
	var article = document.getElementById("article");
	var articleRect = article.getBoundingClientRect();

	var b1 = document.getElementById("b1");
	var c1 = document.getElementById("c1");

	b1.style.left = articleRect.left - b1.offsetWidth + 25 + "px";
	b1.style.top = articleRect.top + window.scrollY + 1000 + "px";

	c1.style.left = b1.offsetLeft + "px";
	c1.style.top = b1.offsetTop + "px";
	c1.style.width = b1.offsetWidth + "px";
	c1.style.height = b1.offsetHeight + "px";
}

positionHoverBoxes();

window.onresize = positionHoverBoxes;
