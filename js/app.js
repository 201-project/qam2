'use strict';

function Travel(name, travelPurpose, budget, picture, Brief) {
  this.name = name;
  this.travelPurpose = travelPurpose;
  this.budget = budget;
  this.picture = picture;
  this.Brief = Brief;
  this.placeScore = 0;
  if (this.name != localStorage.placeName) {
    builtInPlaces.push(this);
  }
};


var builtInPlaces = [];
var myPlaceScores = [];

var radioAnswerArray = JSON.parse(localStorage.answersData);
var formAnswerArray = JSON.parse(localStorage.formData);
var ownerName = localStorage.ownerName;
var placeName = localStorage.placeName;
var myPlace = new Place(placeName, formAnswerArray[2], formAnswerArray[0], formAnswerArray[1], 'My House', radioAnswerArray, 'bio-placeholder');

var aya = new Place('Evi', 'religiousTourism', '$3000 - $5000', 'img/aya1.jpg',`The Hagia Sophia was a former Eastern Orthodox cathedral before it was converted into a mosque by Mehmed
the Conqueror, and then to a religious museum in 1935, located in Istanbul, Turkey. It is one of the
most prominent examples of Byzantine architecture and Ottoman decoration.
Emperor Justinian began to build this church in 532 AD, and it took about five years to build it
officially opened in 537 AD, and Justinian did not want to build a church in the fashionable style of
his time, but always tended to new innovation. He commissioned the architects Isodore al-Melisi and
Anthemius Tralini to build this monumental religious edifice.
The attention was directed towards the beautification of the building and a large ornamentation from the
inside. Justinian used to gather the possibilities of the empire to decorate and decorate the building.
Of the plaster and painted above geometric decorations and Arabic calligraphy, but many of these layers
fell and the ancient scenes appeared below.`);

var taj = new Place('Daisy', 'religiousTourism', '$5000 $ and more', 'img/tajjjj8.jpg', '../dogImgs/beagle-puppy-4.jpg',  `It is a magnificent mausoleum, an elegant white marble architecture found in a hill in the strings of
Brads in India. It was built by King Shah Jahan of the Mughal Emperor (1630 - 1648) to include the
remains of his wife Mumtaz Mahal, the third wife known as Mumtaz Mahal. The word Taj Mahal is distorted
from the princess's name, Mumtaz Mahal. His design was developed by the well-known engineer Issa Shirazi
and Amanullah Khan Shirazi. The white alabaster from Jidhabur was built on a terrace covered with white
alabaster, and at each corner of the terrace was a harmonious minaret with a height of 37 m. The circles
are surrounded by three balconies, and in the center of the terrace, the mausoleum rises in the form of
a quadrant. Its height is 22.5 m. Each of the four facades of the building has a high entrance, covered
by a knot, beneath the large dome above the center of the building, the mausoleum of the princess, and
next to her husband's mausoleum, both decorated with inscriptions. One of the most beautiful models of
Islamic architecture, it is widely known as "the jewel of Islamic art in India and one of the world's
timeless masterpieces".
The Taj Mahal is considered by many of the finest examples of Mughal architecture, a style that combines
Persian, Turkish, Ottoman and Indian architectural styles.`);

var quds = new Place('Sadie', 'religiousTourism', '0 - $500', 'img/quds4.jpg', '../dogImgs/mixedpuppy.jpg', ` The area of Palestine, including Jerusalem, is the landing site of the monotheistic religions.
1. Al-Aqsa Mosque:
One of the largest mosques in the world and one of the three mosques to which Muslims are traveling, and
is also the first two kisses in Islam. Located inside the Old City of Jerusalem in Palestine. It is the
entire area surrounded by the wall and the name of everything that is inside the wall of the Aqsa Mosque
located in the far southeast corner of the walled old town.
Covering an area of approximately 144,000 square meters, it includes the Dome of the Rock, the Tribal
Mosque, the Marwani Chapel and several other landmarks of up to 200 monuments. Al-Aqsa Mosque is located
on a small plateau called the "Moriya Plateau", the rock is the highest point in it, located in its
heart.
Jews also sanctify the same place. They call the Temple Mount yards the Temple Mount relative to the
Temple of the Prophet Solomon, and many extremist Jewish organizations try to invoke this argument to
build the Temple according to their belief.
2. Alqiama charch:
The Church of the Holy Sepulcher is a church within the walls of the Old City of Jerusalem. The church
was built above Golgotha or Golgotha, the place of the rock on which Jesus is believed to be crucified.
It is considered the holiest and most important Christian church in the Christian world.
The Church of the Holy Sepulcher was named after Jesus' resurrection from the dead on the third day of
the events that led to his death on the cross. The Eastern Orthodox Church and the Eastern Orthodox
Catholic Church share.`);

var Makkah = new Place('Robb', 'religiousTourism', '"$500 - $3000','img/mecca.jpg', ` It is a holy city for Muslims, with the Grand Mosque, and the Kaaba, which is the kiss of Muslims in
their prayers. Located west of Saudi Arabia, away from Medina about 400 kilometers in the south-west
direction. Mecca has an area of 850 km², of which 88 km² is inhabited, and the central area surrounding
the Grand Mosque is about 6 km², and the height of Mecca is about 277 meters above sea level.
At the beginning it was a small village located in a dry valley surrounded by mountains on each side,
then people began to come and settle in the era of the Prophet Abraham and the Prophet Ismail, after the
Prophet Abraham left his wife Hajar and his son Ismail in this dry desert valley, in compliance with By
God's order, they stayed in the valley until the well of Zamzam exploded.
Mecca is home to many Islamic holy landmarks, most notably the Grand Mosque, the holiest place in the
earth for Muslims, because it includes the Holy Kaaba kissing Muslims in prayer, as it is one of the
three mosques to which the traveler, according to the Prophet Muhammad: Travelers are only three mosques
of this mosque, the Grand Mosque and the Al Aqsa Mosque.`);

var WadiRum = new Place('Zack', 'adventurousTourism', '0 - $500','img/wadi_rum3.jpg', `Wadi Rum is a protected area covering 720 square kilometers of dramatic desert wilderness in the south of Jordan. Huge mountains of sandstone and granite emerge, sheer-sided, from wide sandy valleys to reach heights of 1700 meters and more.`);

var MountEverest = new Place('Monchi', 'adventurousTourism', '$3000 - $5000', 'img/Everest3.jpg',  
`Its peak is on the border of Nepal and China.
It is above the Death Zone where the air is too thin for a human being to live,
so usually compressed gas tanks with different gas mixes for different altitudes are used when climbing.
The Death Zone refers to the parts of Mount Everest that are above 7,600 metres (24,900 ft) above sea
level.`);

var CapeTown = new Place('Bear', 'adventurousTourism', '$500 - $3000',  'img/cape_town1.jpg', `Perched on the southern tip of Africa, Cape Town has been named as one of the most beautiful cities on earth.
Table Mountain, with its near vertical cliffs, flanked by Devil’s Peak and Lion’s Head on either side,
is an ecological marvel – there is more floral diversity here than in the entire United Kingdom.`);

var AquaClub = new Place('Mia', 'adventurousTourism', '$5000 $ and more','img/aqua_clup2.jpg', ` Aqua Park has a variety of recreational facilities that enable you to spend a perfect time with children
and relax on the sun loungers and drink a favorite cocktail, as well as swimming pools and pitfalls and a range of cafes and restaurants where you will spend great times, in addition to green spaces A water park for young and old and the Dolphin Park to showcase the famous dolphin dances. Meet with visitors, and live in it. Famous dolphin dances.`);

var petra = new Place('Jack', 'HistoricalTourism', '0 - $500','img/petra4.jpg', `Famously known as the ‘Rose City’ because of its stunning architecture carved out in pink sandstone,
Petra has been enthralling travellers even before it was declared a World Heritage Site in 1985.
Believed to have been established in 312 B.C, Petra ishome to over 800 ancient structures including
buildings, tombs, baths and temples. The water conduit systems of this ancient archeological city will
leave you amazed.`);

var China = new Place('Tucker', 'HistoricalTourism', '$3000 - $5000', 'img/china2.jpg', `The First Emperor of China started the Qin Dynasty. The Xiongnu tribes in the north of China were his
enemies. The land in some parts of China is easy to cross, so Qin Shi Huang started building the Great
Wall to make it more difficult for the Xiongnu to invade China.Other dynasties in China had worked more
on the wall and made it longer. The Han, Sui, Northern and Jin Dynasties all repaired, rebuilt or
expanded the Great Wall. During the Ming Dynasty, major rebuilding work took place. Sections of the wall
were built with bricks and stone instead of earth. `);

var pyramids = new Place('Bentley', 'HistoricalTourism', '$500 - $3000', 'img/egypt-2.jpg', `They’re over 3,000 years old, and we still don’t have a good idea as to how they were built or how the
Egyptians made them so precise .The three pyramids align to the stars and the solstices and contain tons
of chambers that still haven’t been (andcannot be) opened.The largest one, called the Great Pyramid, was
built by the Pharaoh Khufu and has limited access to it. The Pyramids are truly a marvel of human
engineering that was fit for kings.`);

var rome = new Place('Cora', 'HistoricalTourism', '$5000 $ and more', 'img/rome3.jpg', `The famed Eternal City is home to few iconic pieces of architecture that include Pantheon, Forum, Arch
of Constantine, Circus Maximus; and the list goes on. We bet that a trip to Rome is incomplete without a
walk along the lanes around the Barouque and Renaissance buildings there. `);

var dubai = new Place('Coal', 'leisureTourism', '$5000 $ and more','img/Dubai3.jpg',` The most famous of the seven Emirates in the United Arab Emirates (UAE), Dubai is a world-class destination.
The story of ‘modern’ Dubai is relatively short. The Emirate has been established for thousands of years, yet within the last few decades, Dubai has transformed itself into the ambitious, dynamic Emirate we experience today.
In 1894, the introduction of full tax exemption invited traders around the world to take advantage of
the Emirate’s unique benefits. In the 1940’s and 50’s, Dubai prospered in the gold trade, providing a
strong economy for its 40,000 population. This was just the start as the mid 1960’s unveiled the
discovery of oil and Dubai’s economy went into overdrive, leading to an influx of foreign workers.
In 1973, Dubai joined the other Emirates to adopt a single, uniform currency: the UAE dirham. In the
late 70s, the Jebel Ali Free Zone was created, comprising the world’s largest port and providing foreign
countries and businesses unrestricted import and export. As oil prices increased, Dubai focused closely on developing free-trade and tourism. In 2000, the Dubai`);

var malaysia = new Place('Chickie', 'leisureTourism', '$3000 - $5000','img/malaysia 2.jpg',` To know Malaysia is to love Malaysia - a bubbling, bustling melting-pot of races and religions where Malays, Indians, Chinese and many other ethnic groups live together in peace and harmony. Our multiculturalism has made Malaysia a gastronomical paradise and home to hundreds of colourful festivals. It's no wonder that we love celebrating and socialising. As a people, Malaysians are very relaxed, warm and friendly. Geographically, Malaysia is almost as diverse as its culture. 11 states and 2 federal territories (Kuala Lumpur and Putrajaya) form Peninsular Malaysia which is separated by the South China Sea from East
Malaysia which includes the 2 states (Sabah and Sarawak on the island of Borneo) and a third federal territory, the island of Labuan. One of Malaysia's key attractions is its extreme contrasts which further add to this theme of
‘diversity’. Towering skyscrapers look down upon wooden houses built on stilts while five-star hotels sit just metres away from ancient reefs. Rugged mountains reach dramatically for the sky while their rainforest-clad slopes sweep down to
floodplains teeming with forest life. Cool highland hideaways roll down to warm, sandy beaches and rich, humid mangroves.
For the perfect holiday full of surprises, the time is now, the place is Malaysia.`);

var norway = new Place('Sam', 'leisureTourism', '0 - $500', 'img/Norway 4.png', `The main attractions of Norway are the varied landscapes that extend across the Arctic Circle. It is
famous for its fjord-indented coastline and its mountains, ski resorts, lakes and woods. Popular tourist
destinations in Norway include Oslo, Ålesund, Bergen, Stavanger, Trondheim and Tromsø. Much of the
nature of Norway remains unspoiled, and thus attracts numerous hikers and skiers. The fjords, mountains
and waterfalls in Western and Northern Norway attract several hundred thousand foreign tourists each
year. In the cities, cultural idiosyncrasies such as the Holmenkollen ski jump attract many visitors, as
well as science abilities and cultural learnings and things such as Bryggen in Bergen and the Vigeland Sculpture Park in Oslo, and they do not know about it.`);

var turkey = new Place('Benji', 'leisureTourism', '$500 - $3000', 'img/Turkey 3.jpg', `Turkey is a modern country with a captivating blend of antiquity and contemporary and East and West. Get interesting information about Turkey and read up on our history, culture and art, nature and geography, traditional culinary culture, real Turkish lifestyle and more. All you need to know about Turkey and beyond.`);

//pushes match scores (from comparePlace) to myPlaceScores
var makeScores = function() {
  for (var i = 0; i < builtInPlaces.length; i++) {
    comparePlace(myDog, builtInPlaces[i]);
    myPlaceScores.push(builtInPlaces[i]);
  }
};

//Takes two dogs, and compares how similar their multiple choice answers are. Returns "total" which is a value of how different your dogs are. Smaller = closest match.
var comparePlace = function(place1, place2) {
  for (var j = 0; j < 5; j++) {
    place2.placeScore += Math.abs(place1.quizResults[j] - place2.quizResults[j]);
    if(place1.travelPurpose === place2.travelPurpose){
        place2.placeScore --;
    }
    if(place1.days === place2.days){
        place2.placeScore --;
    }
    if(place1.budget === place2.budget){
        place2.placeScore --;
    }
  }
  return place2.placeScore;
};

// sorts the myDogScores from best match to worst. (See line 14 for more info.)
var whichPlace = function() {
    myPlaceScores.sort(function(a, b) {
    return (a.placeScore - b.placeScore);
  });
  appendToResults();
};

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
};

var appendToResults = function(){
  var targetLabel = document.getElementById('container');
  targetLabel.innerHTML = capitalize(ownerName) + ' and ' + capitalize(placeName) + '\'s Top Matches:';

  var firstH3 = document.getElementById('firstH3');
  firstH3.innerHTML = 'Top Match: ' + myPlaceScores[0].name;
  var secondH3 = document.getElementById('secondH3');
  secondH3.innerHTML = '2nd Match: ' + myPlaceScores[1].name;
  var thirdH3 = document.getElementById('thirdH3');
  thirdH3.innerHTML = '3rd Match: ' + myPlaceScores[2].name;

  var firstpic = document.getElementById('firstPic');
  firstPic.setAttribute('src', myPlaceScores[0].picture);
  var secondpic = document.getElementById('secondPic');
  secondPic.setAttribute('src', myPlaceScores[1].picture);
  var thirdpic = document.getElementById('thirdPic');
  thirdPic.setAttribute('src', myPlaceScores[2].picture);

  var target1 = document.getElementById('firstBio');
  target1.innerHTML = myPlaceScores[0].bio;
  var target2 = document.getElementById('secondBio');
  target2.innerHTML = myPlaceScores[1].bio;
  var target3 = document.getElementById('thirdBio');
  target3.innerHTML = myPlaceScores[2].bio;

  var firstMap = document.getElementById('result1map');
  firstMap.setAttribute('src', placeMap[myPlaceScores[0].name]);
  var secondMap = document.getElementById('result2map');
  secondMap.setAttribute('src', placeMap[myPlaceScores[1].name]);
  var thirdMap = document.getElementById('result3map');
  thirdMap.setAttribute('src', placeMap[myPlaceScores[2].name]);

  var firstLabel = document.getElementById('parkLabel1');
  firstLabel.innerHTML = myPlaceScores[0].name + '\'s local park:';
  var secondLabel = document.getElementById('parkLabel2');
  secondLabel.innerHTML = myPlaceScores[1].name + '\'s local park:';
  var thirdLabel = document.getElementById('parkLabel3');
  thirdLabel.innerHTML = myPlaceScores[2].name + '\'s local park:';
};

var resetArray = function(){
  myPlaceScores = [];
};

var placeMap = {
  Evi: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3010.76196177466!2d28.9779863!3d41.008583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9be92011c27%3A0x236e6f6f37444fae!2sHagia%20Sophia%20Museum!5e0!3m2!1sen!2sjo!4v1575296564780!5m2!1sen!2sjo',
 Daisy: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14197.530031645714!2d78.0290942!3d27.1757122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sjo!4v1575300397773!5m2!1sen!2sjo',
 Sadie: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d217027.54126626218!2d35.0352713!3d31.7962419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem%2C%20Israel!5e0!3m2!1sen!2sjo!4v1575300478142!5m2!1sen!2sjo',
 Robb: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237685.06936414653!2d39.7064577!3d21.4359571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2sMecca%20Saudi%20Arabia!5e0!3m2!1sen!2sjo!4v1575300530503!5m2!1sen!2sjo',
  Zack: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d887900.0826380447!2d35.1424315!3d29.6222945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150093a5d3b537b3%3A0xe9885592958b5d07!2sMagic%20Bedouin%20Star!5e0!3m2!1sen!2sjo!4v1575300575312!5m2!1sen!2sjo',
  Monchi: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28185.510535377554!2d86.90746548742861!3d27.98811904127681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2sMt%20Everest!5e0!3m2!1sen!2sjo!4v1575300632200!5m2!1sen!2sjo',
  Bear: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847627.2471124856!2d18.095609696971266!3d-33.91426882093706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sjo!4v1575300679534!5m2!1sen!2sjo',
  Mia: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12034.030491703712!2d28.6874069!3d41.0578954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4ff2d122a92ba2c5!2sAqua%20Club%20Dolphin!5e0!3m2!1sen!2sjo!4v1575300733473!5m2!1sen!2sjo',
  Jack: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1765165.0121276986!2d35.53595414899054!3d30.22030681718137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spetra%20jordan!5e0!3m2!1sen!2sjo!4v1575300776089!5m2!1sen!2sjo',
  Tucker: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.9589583960046!2d116.56818621539638!3d40.43190767936339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f121d7687f2ccf%3A0xd040259b950522df!2sGreat%20Wall%20of%20China!5e0!3m2!1sen!2sjo!4v1575300839637!5m2!1sen!2sjo',
  Bentley: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37709964616!2d31.223444832512136!3d30.05948381032293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sjo!4v1575300880548!5m2!1sen!2sjo',
  Cora: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380059.5561632262!2d12.255814103766959!3d41.90973055559072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy!5e0!3m2!1sen!2sjo!4v1575300928280!5m2!1sen!2sjo',
  Coal: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d462565.197581445!2d54.94755498654818!3d25.075085310621684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smap%20of%20dubai%20in%20html!5e0!3m2!1sen!2sjo!4v1575301018079!5m2!1sen!2sjo',
  Chickie: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8162525.260282759!2d105.9227714!3d2.6324184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2sjo!4v1575301069327!5m2!1sen!2sjo',
  Sam: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14595408.988784678!2d0.11047991508330603!3d63.47724508393667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461268458f4de5bf%3A0xa1b03b9db864d02b!2sNorway!5e0!3m2!1sen!2sjo!4v1575301613991!5m2!1sen!2sjo',
  Benji: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12746665.261471225!2d26.18442755451708!3d38.74124816754356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sjo!4v1575301656747!5m2!1sen!2sjo',
  
};

makeScores();
whichPlace();
