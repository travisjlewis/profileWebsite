var backgroundVideo;

var currentPosition = "incoming";
var videos = ["elite_dangerous_bg.mp4", "wow_bg.mp4", "hots_bg.mp4", "super_smash_bg.mp4"];
var portfolioItems;
var numItems = 0;

function initialize()
{
	backgroundVideo = document.getElementById("backgroundVideo");
	populatePortfolioItems();
	populateBackgroundImages();
}

function populateBackgroundImages()
{
	var numImages = videos.length;
	if(numImages > numItems)
		numImages = numItems;
}

function populatePortfolioItems()
{
	portfolioItems = document.getElementsByClassName("portfolioItem");
	numItems = portfolioItems.length;
	for(i = numItems-1; i >= 0; i--)
	{
		portfolioItems[i].id = "portfolioItem" + i;
		portfolioItems[i].classList.add("parallax_item");
	}
}