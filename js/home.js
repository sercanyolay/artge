const images = [
	"../images/gallery/facacapt-demo-1.gif",
	"../images/gallery/facecapt-demo-2.gif",
	"../images/gallery/facecapt-1.gif",
	"../images/gallery/gudumlu-mimikleme.gif",
	"../images/gallery/lip-demo.gif",
	"../images/gallery/facecapt-demo-tramvay.gif"
];

$(document).ready(function () {
	let current = 0;
	$("#mirror-content").on("click", function () {
		$(this).css({
			"background-image": `url(${images[++current % images.length]})`
		});
	});
});
