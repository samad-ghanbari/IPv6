var el = document.documentElement,
	rfs =
		el.requestFullScreen ||
		el.webkitRequestFullScreen ||
		el.mozRequestFullScreen;
rfs.call(el);

if ("ontouchstart" in document.documentElement) {
	document.querySelector(".hint").innerHTML =
		"<p>Swipe left or right to navigate</p>";
}
document.addEventListener("contextmenu", (event) => event.preventDefault());

var wm = document.createElement("p");
wm.style.width = "100%";
wm.style.position = "absolute";
wm.style.display = "block";
wm.style.color = "dimgray";
wm.style.opacity = "0.5";
wm.style.zIndex = "50000";
wm.style.bottom = "20px";
wm.style.textAlign = "center";

var m = document.createTextNode("https://github.com/samad-ghanbari");
wm.appendChild(m);
document.body.appendChild(wm);
