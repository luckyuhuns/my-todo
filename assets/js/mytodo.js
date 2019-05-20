$("ul").on("click", "li", function(){
	$(this).toggleClass("taskComplete");
})

// $("span").click(function(event){
// 	$(this).parent().fadeOut("500", function(){
// 		$(this).remove();
// 	})
// 	event.stopPropagation();
// })

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut("500", function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var inputValue = $(this).val();
		$("ul").append("<li><span><i class='far fa-trash-alt'></i> </span>"+inputValue+"</li>")
		$("input").val("");
	}

})
$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
})