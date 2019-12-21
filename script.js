function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

		var colors = [
			'#490A3D',
			'#BD1550',
			'#E97F02',
			'#F8CA00',
			'#8A9B0F',
			'#69D2E7',
			'#FA6900',
			'#16a085',
			'#27ae60',
			'#2c3e50',
			'#f39c12',
			'#e74c3c',
			'#9b59b6',
			'#FB6964',
			'#342224',
			'#472E32',
			'#77B1A9',
			'#73A857'
		];

var quotes = [
    ["शहरमा घरहरू नजिक नजिक हुन्छन तर मनहरू टाढा टाढा हुन्छन, गाउँमा घरहरू टाढा टाढा हुन्छन तर मनहरू नजिक नजिक हुन्छन ।","बिकास गुरुङ 'उदासी'"],
    ["क्षमता छ भन्दैमा हुँदैनँ । वर्षौदेखि सूर्यले जलाउन नसकेको  कागजलाई एउटा सानो हाते लेन्सले त्यो पनि दुई मिनेटमै सूर्यको प्रकाश लिएर जलाइदिन सक्छ । यदि हाम्रो दिमाग हजारतिर छरियो भने बर्षौ लगाएर नि एउटा गतिलो काम राम्रो बन्दैनँ । यसर्थ आफ्नो लक्ष्यमा यसरी केन्द्रित हुनुस् कि तपाइको दिमागबाट पनि आगो  बर्षियोस् ।","बिकास गुरुङ 'उदासी'"],
    ["यात्राको थालनि भएपछि कहिल्यै हिम्मत हार्नू हुँदैनँ किनकी पहाडबाट निस्केको नदिले कहिल्यै कसैसंग सोधेको छैन कि 'समून्द्र कहाँ पर्छ' भनेर ।","बिकास गुरुङ 'उदासी'"],
	["नदीमा हाम फाल्दैमा कसैको मृत्यु हुदैनँ । मृत्यु त तब हुन्छ जब  पौडिन आउदैनँ । परिस्थिति कहिल्यै समस्या बन्दैनँ, समस्या त तब बन्छ, जब हामीलाई परिस्थितिसँग जुध्न आउदैनँ ।","बिकास गुरुङ 'उदासी'"]
	["यदि सपना पूरा भैरहेको छैन भने बाटो बदल्नुस, सिद्धान्त होइनँ । किनकी रुखले हमेशा पात बदल्ने गर्छ, जरा हैन ।","बिकास गुरुङ 'उदासी'"],
	["जीवनमा जति नै दुःख परेपनि कहिल्यै नआतिनु । किनकी विहान हुनको लागी उषाका किरणसंगै शितका थोपा झर्नु पर्छ । अनि खुशि हुनको लागी दुई नयनबिच आँशुका थोपा बग्नुपर्छ ।","बिकास गुरुङ 'उदासी'"],
	["तपाईका महत्वकांक्षामाथि प्रहार गर्ने मान्छेदेखि टाढै बस्नुस् । किनभने कमजोर मान्छेहरू त्यस्तै गर्छन् । शक्तिशाली मान्छेहरू भने तपाईलाई पनि उनीहरू जस्तै बनाउन उत्प्रेरित गर्दछन् ।","बिकास गुरुङ 'उदासी'"],
	["विश्व बदल्नु अघि देश बदल, देश बदल्नु अघि आफ्नो समाज बदल, समाज बदल्नु अघि आफ्नो परिवार बदल, परिवार बदल्नु अघि आफैलाई बदल । आफूलाई बदल्नका लागि आफ्नो सोच बदल । लक्ष्य जती नै उच्च भए पनि सुरूवात आफैबाट गर ।","बिकास गुरुङ 'उदासी'"],
	["निराशाले चारैतिरबाट घेरा हालेका बेला आफ्नो सफलता र उपलब्धिको सम्झना गर्नुपर्छ । आफ्नो असफलताका बारेमा सोचेर बस्नुहुँदैनँ । अब केही पनि गर्न सकिँदैन भन्नुको साटो असफलतालाई खुसी साथ स्वीकार गर्नुपर्छ । त्यसपछि एउटा नयाँ र राम्रो सुरुवातले तपाईंको बाटो पर्खिरहेको छ ।","बिकास गुरुङ 'उदासी'"],
	["विश्व बदल्नु अघि देश बदल, देश बदल्नु अघि आफ्नो समाज बदल, समाज बदल्नु अघि आफ्नो परिवार बदल, परिवार बदल्नु अघि आफैलाई बदल । आफूलाई बदल्नका लागि आफ्नो सोच बदल । लक्ष्य जती नै उच्च भए पनि सुरूवात आफैबाट गर ।","बिकास गुरुङ 'उदासी'"]
	];


var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var randomcolor = "";

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
	randomcolor = Math.floor(Math.random() * colors.length);
    currentQuote = quotes[randomquote][0];
    currentAuthor = quotes[randomquote][1];
	if (inIframe()) {
		$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=aLamm&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
	}

	$(document).ready(function () {
	    $('html body').animate({
	        backgroundColor: colors[randomcolor],
	        color: colors[randomcolor]
	    }, 500);
	    $('#newquote, .social-icons .fa-twitter').animate({ backgroundColor: colors[randomcolor] }, 500);
			$('blockquote footer').animate({ color: colors[randomcolor] }, 500);	
	    $('blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
	    $('#quotetext').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentQuote);
	    });
	    $('#quotesource').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentAuthor);
	    });
    });    
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

getQuote();

$(document).ready(function () {
    $('#newquote').on('click', getQuote);
    $('#tweetquote').on('click', function () {
        if (!inIframe()) {
            openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        }
    });
});