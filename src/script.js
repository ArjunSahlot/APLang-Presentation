var hoverCovers = document.querySelectorAll(".hover-cover");
hoverCovers.forEach(function (hoverCover) {
	hoverCover.addEventListener("click", function () {
		toggleVisibility(hoverCover.id);
	});
});

function toggleVisibility(idName) {
	var cover = document.querySelector("#" + idName);
	var highlights = document.getElementsByClassName("h" + idName.slice(1));
	cover.classList.toggle("revealed");
	for (var i = 0; i < highlights.length; i++) {
		highlights[i].classList.toggle("yellow");
	}
}

function positionHoverBoxes() {
	var article = document.getElementById("article");
	var articleRect = article.getBoundingClientRect();

	var b1 = document.getElementById("b1");
	var c1 = document.getElementById("c1");
	var b2 = document.getElementById("b2");
	var c2 = document.getElementById("c2");
	var b3 = document.getElementById("b3");
	var c3 = document.getElementById("c3");
	var b4 = document.getElementById("b4");
	var c4 = document.getElementById("c4");

	setupLeftBox(articleRect, b1, c1, 500);
	setupRightBox(articleRect, b2, c2, 600);
	setupRightBox(articleRect, b3, c3, 800);
	setupLeftBox(articleRect, b4, c4, 1300);
}

function setupLeftBox(a, b, c, y) {
	b.style.left = a.left - b.offsetWidth + 25 + "px";
	b.style.top = a.top + window.scrollY + y + "px";
	c.style.left = b.offsetLeft + "px";
	c.style.top = b.offsetTop + "px";
	c.style.width = b.offsetWidth + "px";
	c.style.height = b.offsetHeight + "px";
	b.style.textAlign = "right";
}

function setupRightBox(a, b, c, y) {
	b.style.left = a.right - 25 + "px";
	b.style.top = a.top + window.scrollY + y + "px";
	c.style.left = b.offsetLeft + "px";
	c.style.top = b.offsetTop + "px";
	c.style.width = b.offsetWidth + "px";
	c.style.height = b.offsetHeight + "px";
	b.style.textAlign = "left";
}

positionHoverBoxes();

window.onresize = positionHoverBoxes;
