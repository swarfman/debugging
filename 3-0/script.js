function readyFunction(){

	var items = document.getElementsByClassName("list-group-item");
//	console.log(items);
	for(var i = 0; i<items.length;i++)
	{ console.log(items[i]);	
		items[i].addEventListener("click",function(event) {
			console.log(event.target.childNodes.length);
			for(var j = 0; j<event.target.childNodes.length;j++)
			{
				console.log(event.target.tagName);
				
				if(event.target.tagname=='LI')
				{
					let num = parseInt(event.target.childNodes[1].innerHTML);
					console.log(num);
					num--;
					if (num <= 0) {
						num = '';
					}
					if(event.target.childNodes[1].innerHTML!='') event.target.childNodes[1].innerHTML = num;	
				}
			}
		});
	}
}