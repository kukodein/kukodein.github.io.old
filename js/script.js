var x = "",i,j;
var myData = {
	"name":"Labs Kukode.in",
	"post": [
		{
			"image":"img/f.jpg",
			"title":"Freedom Fighters", 
			"subtitle":"When it's too hot to think",
			"avatar":"img/authors/6.png",
			"author":"Tom Goldman",
			"date":"06/10/2015",
			"content":"<p>Business model canvas bootstrapping deployment startup. In A/B testing pivot niche market alpha conversion startup down monetization partnership business-to-consumer success for investor mass market business-to-business.</p><p>Release creative social proof influencer iPad crowdsource gamification learning curve network effects monetization. Gamification business plan mass market www.discoverartisans.com direct mailing ecosystem seed round sales long tail vesting period.</p><p>Product management ramen bootstrapping seed round venture holy grail technology backing partner network entrepreneur beta marketing value proposition. Android stealth conversion scrum project network effects. Creative alpha long tail conversion stealth growth hacking iteration investor A/B testing prototype customer. Startup www.discoverartisans.com direct mailing launch party partnership market ramen metrics focus value proposition.</p><p>Stock infrastructure seed round sales paradigm shift technology user experience focus gamification. Partnership metrics business plan stealth business-to-business. Deployment graphical user interface monetization. Twitter incubator scrum project entrepreneur branding burn rate ramen backing paradigm shift virality crowdsource.</p><p>Social proof MVP ecosystem. Ramen launch party pitch deployment stealth. Vesting period MVP equity. Focus creative partnership founders iteration agile development infographic.</p><p>Low hanging fruit burn rate innovator user experience niche market A/B testing creative launch party product management release. Www.discoverartisans.com influencer business model canvas user experience gamification paradigm shift startup research &amp; development iPad agile development. Strategy incubator infographic success marketing buzz A/B testing responsive web design. Traction research &amp; development pitch seed money venture niche market accelerator network effects.</p>",
		},
	]
};

// Load data from array Assets
function loadAssets(idName) {
	for (i in myData.post) {
		x += '<div class="card"><div class="card__container card__container--closed">';
		x += '<svg class="card__image" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 500" preserveAspectRatio="xMidYMid slice"><defs><clipPath id="clipPath6"><circle class="clip" cx="960" cy="250" r="992"></circle></clipPath></defs><image clip-path="url(#clipPath6)" width="1920" height="500" xlink:href="'+myData.post[i].image+'"></image></svg>';
		x += '<div class="card__content"><i class="card__btn-close fa fa-times"></i>';
		x += '<div class="card__caption"><h2 class="card__title">'+myData.post[i].title+'</h2><p class="card__subtitle">'+myData.post[i].subtitle+'</p></div>';
		x += '<div class="card__copy"><div class="meta"><img class="meta__avatar" src="'+myData.post[i].avatar+'" alt="author01"/><span class="meta__author">'+myData.post[i].author+'</span><span class="meta__date">'+myData.post[i].date+'</span></div>';
		x += myData.post[i].content+'</div></div></div></div>';
	}
	document.getElementById(idName).innerHTML = x;
}