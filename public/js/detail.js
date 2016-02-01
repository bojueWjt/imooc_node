$(function(){

	$(".reply-btn").bind("click",function(e){

		var $this = $(this);
		var commentId = $this.data("cid");
		var toUserId = $this.data("tid");

		if($("#replycommentid").length >= 1){

			$("#replycommentid").val(commentId);
			$("#touserid").val(toUserId);

		}else{

			$("<input>").attr({
				type:"hidden",
				id:"replycommentid",
				name:"comment[cId]",
				value:commentId
			}).appendTo('#commentForm');

			$("<input>").attr({
				type:"hidden",
				name:"comment[tId]",
				id:"touserid",
				value:toUserId
			}).appendTo('#commentForm');
		}


	})
})