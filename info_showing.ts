function buttonClick(clickedButton, elementType, elementID) {
	let itemFunction = {"show": show, "hide": hide}[clickedButton.value];
	clickedButton.value = {"show": "hide", "hide": "show"}[clickedButton.value];
	
    let items = document.querySelectorAll("[data_group='" + elementID + "']");
    for (let itemNum = 0; itemNum < items.length; itemNum++) {
        let item = items[itemNum];
        itemFunction(item, elementType);
    }
}

function show(element, _) {
    element.className = "shown";
}

function hide(element, parentType) {
	element.className = "hidden";
	
	if (parentType != "link") {
		let containerType = {"verb": "frame", "frame": "link"}[parentType];
		
		let items = document.querySelectorAll("[data_group='" + element.id + "']");
		for (let itemNum = 0; itemNum < items.length; itemNum++) {
			let item = items[itemNum];
			hide(item, containerType);
		}
		
		let buttonID = element.id.concat("_but");
		let button = document.getElementById(buttonID);
		button.value = "show";
	}
}