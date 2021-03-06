var animationHappening = false;

function expand(toExpand)
{
	if(!animationHappening) {
		animationHappening = true;
		toExpand.classList.add("expandToFull");
		toExpand.style.zIndex = 1;
		
		var expandHandler = function(){
			animationHappening = false;
			toExpand.style.width = "100vw";
			toExpand.style.height = "100vh";
			if(toExpand.classList.contains("center"))
			{
				toExpand.style.top = "0%";
				toExpand.style.left = "0%";
			}
			
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
		if(toRetract.classList.contains("center")) {
			toRetract.classList.add("retractToCenter");
		}
		else {
			toRetract.classList.add("retractToQuarter");
		}
		
		var retractHandler = function(){
			animationHappening = false;
			if(toRetract.classList.contains("center"))
			{
				toRetract.style.width = "30vw";
				toRetract.style.height = "30vh";
				toRetract.style.top = "35vh";
				toRetract.style.left = "35vw";
				toRetract.classList.remove("retractToCenter");
				toRetract.style.zIndex = -1;
			}
			else
			{
				toRetract.style.width = "50vw";
				toRetract.style.height = "50vh";
				toRetract.classList.remove("retractToQuarter");
				toRetract.style.zIndex = -2;
			}
			toRetract.onclick = function() {expand(toRetract)};
			toRetract.removeEventListener("animationend", retractHandler);
		}
		
		toRetract.addEventListener("animationend", retractHandler, false);
	}
}