
var ready;
ready = function() {
  main()
};


$(document).ready(ready);
$(document).on('page:load', ready);

main = function() {
	$('table.root').each(function(index){
		$(this).wrap("<div class=\"panel panel-default\"></div>")
		.wrap("<div class=\"panel-body\"></div>");
	});
	
	$('body p').each(function(index){
		$(this).wrap("<div class=\"panel panel-info\"></div>").wrap("<div class=\"panel-body\"></div>");
		$(this).parent().parent().prepend("<div class=\"panel-heading\">Application Started</div>");
	});
	
}