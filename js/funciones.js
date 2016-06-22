$(document).ready(function($){
	$("#btn-generate-matrix").click(generateMatrix);
});

function addRow() {
	var $row = $("<div>");
	$row.addClass("row");

	var $number = $("<div>");
	$number.addClass("col-sm-4 text-center column-n")
		.html($("#matrix-container .row").length);
}