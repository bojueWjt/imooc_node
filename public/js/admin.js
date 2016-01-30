$(function(){

	$(".del").click(function(e){

		var target = $(e.target);

		var id = target.attr("delete-id");
		var tr = $("#item-id-" + id);

		$.ajax({
			method:"DELETE",
			url:"delete?_id=" + id
		}).done(function(results){

			if(results.success){

				if(tr){
					tr.remove()
				}
			}
		});
	});
});