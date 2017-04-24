console.log("Twerkin");

$(document).ready(function(){

// displays all qoutes in Db on page load
function displayALL(){
	$.get('/api/quotes', function(res){
		res.forEach(function(res, i){
			console.log(i);
			var auth = res.author;
			var q = res.quote;
			var id = res._id;
			$('.dbq').append(i+2+") "+"'"+q+"'<br>  -- "+auth+"<br>"+"<span class='idclass'>"+id+"</span><br><br>");
			$('.idclass').css("color","#e3ecf9");	
		});
	});
}
displayALL();
console.log('displayALL');
function getLast(){
	$.get('/api/quotes', function(res){

	});
}

function getALL(){
	$('.dbq').empty();
	$.get('/api/quotes', function(res){
		res.forEach(function(res){
			var auth = res.author;
			var q = res.quote;
			var id = res._id;
			$('.dbq').append("'"+q+"'<br>  -- "+auth+"<br>"+"<span class='idclass'>"+id+"</span><br><br>");
			$('.idclass').css("color","#e3ecf9");	
		});
	
	});
}

// getALL();

///// // // // // // // // // // // // // // Get a New Random Quote from the API
var randoQ;
	$('#rando').on("click", function(){
		
		$(".qbox").empty();
		$('.abox').empty();

		console.log("clik");
		var randoQ = $.get('/api/quotes/getRandom')
			.done(function(data){
				// console.log(data); 
				$('.qbox').append(data.quote);
				$('.abox').append(data.author);
			});
	});

// ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ Save a Random Quote
	$("#save").on("click", function(){
		console.log('save clik');
		var q =  $('.qbox').text();
		var a =  $('.abox').text();
		$.ajax({
		
			url:'http://localhost:3000/api/quotes',
			type: 'POST',
			dataType:"json",
			data: { quote: q, author: a},
			ContentType:"application/json"
            }).done(function(res){
            	
			$('.dbq').append("'"+q+"'<br>  -- "+a+"<br>"+"<span class='idclass'>"+res._id+"</span><br><br>");
			$('.idclass').css("color","#e3ecf9");	
				// });
			// });
		});

	});
// ////////////////////////     Add a custom Quote to the DataBase   //////////////////////
	$('#remove').on("click", function(){
		$('.qbox').empty();
		$('.abox').empty();
	});

	var newQ;
	var newAuth;

	$('#submit').on("click", function(){
		event.preventDefault();
		console.log('submit clicked');
		var newQ = $('#saveQuote').val();
		var newAuth = $('#newAuthor').val();
		console.log("newQ: "+ newQ);
		console.log("newQ: "+ newAuth);

		var newObj = {
			quote: newQ,
			author:newAuth
		};
		$.ajax({
		
			url:'http://localhost:3000/api/quotes',
			type: 'POST',
			data: newObj
			
            }).done(function(res){

            	console.log("Thanks for the quote: "+newObj);
            	displayALL();
		});
		
	});
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Delete a quote -- -- -- -- -- --- -- -- --
	$('#delButton').on('click', function(){
		event.preventDefault();
		var urlID = $('#delRoute').val();
		console.log(urlID);
		$.ajax({
			url:'http://localhost:3000/api/quotes/'+urlID,
			type:'DELETE'
			

		}).done(function(){
			console.log("ID: "+urlID+"was deleted");
			getALL();
			$('#delRoute').val("");
		});
	});



}); //Document Ready