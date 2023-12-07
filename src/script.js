var hoverCovers = document.querySelectorAll(".hover-cover");
hoverCovers.forEach(function (hoverCover) {
	hoverCover.addEventListener("click", function () {
		toggleVisibility(hoverCover.id);
	});
});

function toggleVisibility(idName) {
	var cover = document.querySelector("#" + idName);
	var curly = document.querySelector("#cb" + idName.slice(1));
	var highlights = document.getElementsByClassName("h" + idName.slice(1));
	cover.classList.toggle("revealed");
	curly?.classList.toggle("hidden");
	for (var i = 0; i < highlights.length; i++) {
		if (idName == "c9") {
			highlights[i].classList.toggle("green");
		} else {
			highlights[i].classList.toggle("orange");
		}
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
	var b5 = document.getElementById("b5");
	var c5 = document.getElementById("c5");
	var b6 = document.getElementById("b6");
	var c6 = document.getElementById("c6");
	var b7 = document.getElementById("b7");
	var c7 = document.getElementById("c7");
	var b8 = document.getElementById("b8");
	var c8 = document.getElementById("c8");
	var b9 = document.getElementById("b9");
	var c9 = document.getElementById("c9");
	var b10 = document.getElementById("b10");
	var c10 = document.getElementById("c10");
	var b11 = document.getElementById("b11");
	var c11 = document.getElementById("c11");

	var cb1 = document.getElementById("cb1");
	var cb2 = document.getElementById("cb2");
	var cb3 = document.getElementById("cb3");
	var cb4 = document.getElementById("cb4");
	var cb5 = document.getElementById("cb5");

	setupArticleSide(articleRect, cb1, 210, 120, true, 400);
	setupLeftBox(articleRect, b1, c1, 350, -100);

	setupArticleSide(articleRect, cb2, 505, 110, true, 370);
	setupLeftBox(articleRect, b2, c2, 620, -100);

	setupArticleSide(articleRect, cb3, 775, 110, true, 370);
	setupLeftBox(articleRect, b3, c3, 865, -100);

	setupArticleSide(articleRect, cb4, 1050, 180, true, 600);
	setupLeftBox(articleRect, b4, c4, 1272, -150);

	setupArticleSide(articleRect, cb5, 1505, 150, true, 500);
	setupLeftBox(articleRect, b5, c5, 1687, -130);

	setupRightBox(articleRect, b6, c6, 380);
	setupRightBox(articleRect, b7, c7, 840);
	setupRightBox(articleRect, b8, c8, 1120);
	setupRightBox(articleRect, b9, c9, 1280);
	setupRightBox(articleRect, b10, c10, 1680);
}

function setupArticleSide(a, b, y, x = 0, left = true, h = 0) {
	if (left) {
		b.style.left = a.left - b.offsetWidth + 25 + x + "px";
		b.style.textAlign = "right";
	} else {
		b.style.left = a.right - 25 + x + "px";
		b.style.textAlign = "left";
	}
	b.style.top = a.top + window.scrollY + y + "px";
	if (h != 0) {
		b.style.height = h + "px";
	}
}

function setupCoverBox(b, c) {
	c.style.left = b.offsetLeft + "px";
	c.style.top = b.offsetTop + "px";
	c.style.width = b.offsetWidth + "px";
	c.style.height = b.offsetHeight + "px";
}

function setupLeftBox(a, b, c, y, x = 0) {
	setupArticleSide(a, b, y, x, true);
	setupCoverBox(b, c);
}

function setupRightBox(a, b, c, y, x = 0) {
	setupArticleSide(a, b, y, x, false);
	setupCoverBox(b, c);
}

positionHoverBoxes();

window.onresize = positionHoverBoxes;
window.onload = positionHoverBoxes;
