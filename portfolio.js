var animationHappening = false;

function expand(toExpand)
{
	if(!animationHappening) {
		animationHappening = true;
		toExpand.classList.add("expandToFull");
		toExpand.style.zIndex = 0;
		
		var expandHandler = function(){
			animationHappening = false;
			toExpand.style.width = "100vw";
			toExpand.style.height = "100vh";
			toExpand.classList.remove("expandToFull");
			toExpand.onclick = function() {retract(toExpand)};
			toExpand.removeEventListener("animationend", expandHandler);
		}
		
		toExpand.addEventListener("animationend", expandHandler, false);
	}
}

function retract(toRetract)
{
	if(!animationHappening) {
		animationHappening = true;
		toRetract.classList.add("retractToQuarter");
		
		var retractHandler = function(){
			animationHappening = false;
			toRetract.style.width = "50vw";
			toRetract.style.height = "50vh";
			toRetract.classList.remove("retractToQuarter");
			toRetract.onclick = function() {expand(toRetract)};
			toRetract.style.zIndex = -1;
			toRetract.removeEventListener("animationend", retractHandler);
		}
		
		toRetract.addEventListener("animationend", retractHandler, false);
	}
}