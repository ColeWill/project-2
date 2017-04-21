console.log("Twerkin");

$(document).ready(function(){


//////// ajax get route to the backend first  triggers the matching router 
// goes to the macthing controller requesting with node (hw) request is in the controller res
// need to install and require request

var randoQ;
	$('#rando').on("click", function(){
		console.log("clike");
		var randoQ = $.get('/api/quotes/getRandom');
		//$.get('https://quotes.rest/quote/random.json?api_key=')
			.done(function(data){
				console.log(data);
				$('.qbox').append(data.contents.quote);
				$('.abox').append(data.contents.author);
			});
	});

	$("#save").on("click", function(){
		console.log('save clik');
		var q =  $('.qbox').text();
		var a =  $('.abox').text();
		
		$.ajax({
		
			url:'http://localhost:3000/api/quotes',
			type: 'POST',
			dataType:"json",
			data: {_id: 16, quote: q, author: a},
			ContentType:"application/json"
            }).done(function(res){
			console.log(res);
			$.get('/api/quotes', function(res){
				console.log(res);
				res.forEach(function(res){
					$(".saveBox").append(res);
				});
			});
		});

	});



});