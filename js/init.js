$(document).ready(function() {

	color_palette = ["#DC2C90", "#2BD740", "#34DDDD"];
	$(".section").each(function(index, element) {
		$(element).hover(function(e) {
			$(event.currentTarget).children(".colorshadow").css({
				"background-color": color_palette[index % color_palette.length],
			});
		}, 
			shadow_out
		);
			
	});

	$("#who").click(function(e) { $(this).text("lu."); });
});

var shadow_out = function(e) {
	$(event.currentTarget).children(".colorshadow").css({
		"background-color": "#0F0D0B",
	});
}