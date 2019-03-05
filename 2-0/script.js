function readyFunction(){
	var data = [
		{
			text: 'Overshadowing #UNGA is the big question: Will Obama and Rouhani meet?',
			href: 'https://twitter.com/cnnbrk/status/382528782738800641'
		},
		{
			text: "Marine's family hopes visiting Iranian president will help free their son",
			href: 'https://twitter.com/cnnbrk/status/382519683053649920'
		},
		{
			text: 'Obama addresses United Nations.',
			href: 'https://twitter.com/cnnbrk/status/382507500903202817'
		},
		{
			text: '',
			href: 'https://twitter.com/CNNMoney/status/382497891723804672'
		},
		{
			text: "If you're seeing this as a button, congratulations!",
			href: 'http://twitter.com'
		}
	];
	for (var i = 0; i<data.length; i++) {
			if (data[i].href){
			var newDiv = document.createElement("div");
			newDiv.innerHTML += "<a class='btn btn-default' href="+data[i].href+"><span class='glyphicon glyphicon-star'></span>"+data[i].text+"</a>";
			let x = document.getElementById("news").appendChild(newDiv);
			console.log(x);
			}
	}

	// var btnsArray = document.getElementsByTagName("a");
	// for(var k = 4; k<btnsArray.length;k++)
	// {
	// 	console.log(btnsArray);
	// 	btnsArray[k].addEventListener("click",function(event){
	// 		if (btnsArray[k].href) {
	// 		// 	console.log(btnsArray[k].href);
	// 			document.location.href = btnsArray[k].href;
	// 		}
	// 	});
	// }
}