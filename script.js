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
    ["शहरमा घरहरु नजिक नजिक त हुन्छन् तर मनहरु टाढा टाढा हुन्छन् । गाउँमा घरहरू टाढा-टाढा हुन्छन तैपनि मनहरु भने सदा नजिक र आत्मिय हुन्छन ।","बिकास गुरुङ 'उदासी'"],
    ["शहरमा घरहरु ठुला र पक्का हुन्छन तर सम्बन्धहरु सधैं कच्चा हुन्छन् । तर, गाउँमा घरहरू साना र कच्चा हुन्छन तैपनि सम्बन्धहरु आत्मिय र पक्का हुन्छन् ।","बिकास गुरुङ 'उदासी'"],
    ["मनमा लोभ, लालच, दुःख, पीडा, स्वार्थ र घमण्ड नभएको मान्छेलाई देख्ने रहर थियो । रहर त पूरा भयो किन्तु ऊ जीउँदो मानिस नभएर चिताको लास थियो ।","बिकास गुरुङ 'उदासी'"],
	["कुनै पनि मान्छे असाधारण हुँदैनँ । सबै मान्छे हामीजस्तै सामान्य हो, तर सहि समयमा सहि निर्णय लिँदा उनीहरु असाधारण बन्छन जुन एउटा कला हो ।","बिकास गुरुङ 'उदासी'"]
	["अविरल यात्रामा निस्किने हो भने कहिल्यै दुरिको चिन्ता नगर्नु किनकी पहाडबाट  निस्केको नदिले कहिल्यै चिन्ता गर्दैनन् कि समून्द्र कहाँ कति टाढा पर्छ भनेर ।","बिकास गुरुङ 'उदासी'"],
	["नदीमा खस्दैमा कसैको मृत्यु हुदैनँ । मृत्यु त तब हुन्छ जब उसलाई तैरिनँ आउदैन । परिस्थिति कहिल्यै समस्या हुँदैन, समस्या त तब हुन्छ जब जुध्न आउदैन ।","बिकास गुरुङ 'उदासी'"],
	["मान्छेहरू तब मात्र तिम्रो हात समाउन आउँछन् जब उनीहरूलाई यो कुरा यकिनका साथ थाहा हुन्छ कि तिमी एक्लै पनि अगाडि बढ्न सक्छौ भनेर ।","बिकास गुरुङ 'उदासी'"],
	["यदि आफ्नो सपना पूरा भैरहेको छैन भने तरिका र विधी बदल्नुस, आफ्नो सपना होइन किनकी रुखले हमेशा रितु अनुसार पात बदल्ने गर्छ, जरा होइन ।","बिकास गुरुङ 'उदासी'"],
    ["लापरवाहीसँग जंगलमा फालिएको एक सानो झिल्कोले पनि आगलागी हुन सक्छ । तर, आवश्यकताको बेला चुल्हो सल्काउन पुरै बट्टा चाहिन सक्छ ।","बिकास गुरुङ 'उदासी'"],
    ["हावाले भरीएको बेलुन र घमण्डले भरीएको मान्छे उस्तै हुन् । जसलाई फुटाउनै पर्दैनँ, आफै फुट्छ । बस्, केही समय आफ्नै गतिमा उड्न दिनुपर्छ ।","बिकास गुरुङ 'उदासी'"],
	["तपाईको उदेश्यलाई खिल्ली उडाउने मान्छेदेखि टाढै बस्नुस्, कमजोर मान्छेहरु मात्र त्यस्तो गर्छन् । शक्तिशाली मान्छेहरू त तपाईंलाई उत्प्रेरित गर्दछन् ।","बिकास गुरुङ 'उदासी'"]
	["यति कुरा याद राख्नुस् साना कुरामा भरोसा गर्नेहरूले सानै कुरामा जिन्दगी दिन्छन्, ठूला कुरामा भरोसा गर्नेहरूले ठूलै कुराको लागि जिन्दगी दिन्छन् ।","बिकास गुरुङ 'उदासी'"],
	["सफलता त्यो जमिन मुनीको पानी जस्तै हो, जुन सय ठाँउमा एक मिटर खन्नाले मिल्दैन बरु एकै ठाँउमा अनवरत रुपले सय मिटर खन्नाले मिल्दछ ।","बिकास गुरुङ 'उदासी'"],
	["मानिसहरू टाकुरा चढ्ने सपना त देख्छन् तर तगारो नाघी अघि बढ्ने हिम्मत गर्न सक्दैनन् । सपना देख्नेले हैन हिम्मत गर्ने मात्र शिखरमा पाइला राख्न सक्छ ।","बिकास गुरुङ 'उदासी'"],
	["धनी हुनलाई ‘सम्पत्तीको थुप्रो’ होइन, ‘सन्तुष्ट मन’ चाहिन्छ । जब जिन्दगीमा सन्तुष्टि मिल्छ तब मामुली साग-सिस्नु नै व्यञ्जन लाग्छ, सानो झुपडी नै महल ।","बिकास गुरुङ 'उदासी'"],
    ["निराशाले चारैतिरबाट घेरा हालेका बेला आफ्नो सफलता र उपलब्धिको सम्झना गर्नुपर्छ । कहिल्यै पनि आफ्नो असफलताका बारेमा मात्र सोंचेर बस्नुहुँदैन ।","बिकास गुरुङ 'उदासी'"],
    ["कसैले आफ्नो आलोचना गर्छ भने त्यसमा पटक्कै ध्यान दिनुहुँदैनँ । बरु त्यो व्यक्तिका बारेमा मात्र सोच्नुपर्छ जसले आफूप्रति विश्वास र आस्था राख्छ ।","बिकास गुरुङ 'उदासी'"],
	["साहस भनेको नडराउनु मात्र हैन बरु डर माथी विजय पाउनु हो । बहादुर त्यो होइन जो डराउदैन, बहादुर त त्यो हो जो डरको बाबजुद सङ्घर्ष गर्दै अघी बढ्दछ ।","बिकास गुरुङ 'उदासी'"]
	["हामी त्यही बन्छौं जुन कुरा लगातार गर्दै रहन्छौ । त्यसैले कामले हैन, काम गर्ने बानीले मात्र हामीलाई सदा महानताको शिखरमा पुर्‍याउने काम गर्छ ।","बिकास गुरुङ 'उदासी'"],
	["सफलताको वाधक परिवारको साथ नहुनु होइन, किनभने अब्दुल कलाम र हेनरिक इब्सन परिवारबाट टाढीनुपरेको थियो जसले महान सफलता प्राप्ति गरे ।","बिकास गुरुङ 'उदासी'"],
	["हाम्रो सफलताको बाधक हामी स्वयं हौ । किनकी हामी संघर्ष गर्न हैन केवल आफ्नो दायित्व र कर्मबाट पन्छिन अनेक प्रयत्न र तरिकाहरु खोज्छौं ।","बिकास गुरुङ 'उदासी'"],
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
