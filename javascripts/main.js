$.ajax('./db/dinosaurs.json').done(function(data) {
	var dinoArray = data.dinosaurs;
	makeDom(dinoArray);
}).fail(function(error) {
	console.log("failureeeee!", error);
});

function makeDom(printDinoArray) {
	var dinoString = "";


	for (var i=0; i < printDinoArray.length; i++) {
		dinoString += `<div class="row col-md-3 dino-card">`;
		dinoString += `<header><h1>${printDinoArray[i].type}</h1></header>`;
		dinoString += `<section>`;
		dinoString += `<img src="${printDinoArray[i].img}">`;
		dinoString += `<p class="bio">${printDinoArray[i].bio}</p>`;
		dinoString += `<footer>${printDinoArray[i].info}</footer>`;
		dinoString += `</section>`;
		dinoString += `</div>`;
	}
	$("#dinosaurs").append(dinoString);
}

$("#dinosaurs").on("click", ".dino-card", function(e) {
	$(".dino-card").removeClass("dotted-border");
	$(this).addClass("dotted-border");
	$("#text-input").val("").focus();
});

$("#text-input").keyup(mirrorText);

function mirrorText (e) {
	var selectedDino = $(".dotted-border");
	var editedBio = $("#text-input").val();
	var bio = selectedDino.find(".bio");
	bio.html(editedBio);

	if (e.keyCode === 13) {
		$("#text-input").val("");
	}
}







