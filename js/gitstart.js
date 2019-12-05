'use strict';
var form = document.getElementById("travelForm");

var results = [];
var money;
var purpose;
var resultPlace;
function TravelResult(
    travelPurpose,
    budget,
    days,
    travelq
) {

    this.travelPurpose = travelPurpose;
    this.budget = budget;
    this.days = days;
    this.travelq = travelq;
    results.push(this);
  
    if ((this.travelPurpose === "religiousTourism") && (this.travelq === "Alone")) {
        if (this.budget === "0 - $500") {
             this.place = "quds";
        }
        else if (this.budget === "$500 - $3000") {
             this.place = "Makkah";
        } else if (this.budget === "$3000 - $5000") {
             this.place = "aya";
        } else if (this.budget === "$5000 $ and more") {
             this.place = "taj";
        }
    }
    if ((this.travelPurpose === "religiousTourism") && (this.travelq === "Group")) {
        if (this.budget === "0 - $500") {
             this.place ="quds";
        }
        if (this.budget === "$500 - $3000") {
             this.place ="quds";
        } else if (this.budget === "$3000 - $5000") {
             this.place ="Makkah";
        } else if (this.budget === "$5000 $ and more") {
             this.place ="aya";
        }
    }
    if (this.travelPurpose === "HistoricalTourism" && this.travelq === "Alone") {
        if (this.budget === "0 - $500") {
             this.place ="petra";
        }
        else if (this.budget === "$500 - $3000") {
             this.place ="pyramids";
        } else if (this.budget === "$3000 - $5000") {
             this.place ="China";
        } else if (this.budget === "$5000 $ and more") {
             this.place ="rome";
        }
    }
    if (this.travelPurpose === "HistoricalTourism" && this.travelq === "Group") {
        if (this.budget === "0 - $500") {
             this.place ="petra";
        }
        if (this.budget === "$500 - $3000") {
             this.place ="petra";
        } else if (this.budget === "$3000 - $5000") {
             this.place ="pyramids";
        } else if (this.budget === "$5000 $ and more") {
             this.place ="China";
        }
    }
    if (this.travelPurpose === "leisureTourism" && this.travelq === "Alone") {
        if (this.budget === "0 - $500") {
             this.place ="norway";
        }
        else if (this.budget === "$500 - $3000") {
             this.place ="turkey";
        } else if (this.budget === "$3000 - $5000") {
             this.place = "malaysia";
        } else if (this.budget === "$5000 $ and more") {
             this.place ="dubai";
        }
    }
    if (this.travelPurpose === "leisureTourism" && this.travelq === "Group") {
        if (this.budget === "0 - $500") {
             this.place ="norway";
        }
        if (this.budget === "$500 - $3000") {
             this.place ="turkey";
        } else if (this.budget === "$3000 - $5000") {
             this.place ="malaysia";
        } else if (this.budget === "$5000 $ and more") {
             this.place ="dubai";
        }
    }
    if (this.travelPurpose === "adventurousTourism" && this.travelq === "Alone") {
        if (this.budget === "0 - $500") {
             this.place ="WadiRum";
        }
        else if (this.budget === "$500 - $3000") {
             this.place ="CapeTown";
        } else if (this.budget === "$3000 - $5000") {
             this.place ="MountEverest";
        } else if (this.budget === "$5000 $ and more") {
             this.place ="AquaClub";
        }
    }
    if (this.travelPurpose === "adventurousTourism" && this.travelq === "Group") {
        if (this.budget === "0 - $500") {
             this.place ="WadiRum";
        }
        if (this.budget === "$500 - $3000") {
             this.place ="CapeTown";
        } else if (this.budget === "$3000 - $5000") {
             this.place ="MountEverest";
        } else if (this.budget === "$5000 $ and more") {
            this.place ="AquaClub";
        }
    }
    resultPlace = this.place;
}


TravelResult.prototype.render = function () {
    if (resultPlace === "aya"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent =`Hagia Sophia`
        var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent= 'The Hagia Sophia was a former Eastern Orthodox cathedral before it was converted into a mosque by Mehmed the Conqueror, and then to a religious museum in 1935, located in Istanbul, Turkey. It is one of the most prominent examples of Byzantine architecture and Ottoman decoration. Emperor Justinian began to build this church in 532 AD, and it took about five years to build it officially opened in 537 AD, and Justinian did not want to build a church in the fashionable style of his time, but always tended to new innovation. He commissioned the architects Isodore al-Melisi and Anthemius Tralini to build this monumental religious edifice The attention was directed towards the beautification of the building and a large ornamentation from the inside. Justinian used to gather the possibilities of the empire to decorate and decorate the building. Of the plaster and painted above geometric decorations and Arabic calligraphy, but many of these layers fell and the ancient scenes appeared below.'
        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/aya.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3010.76196177466!2d28.9779863!3d41.008583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9be92011c27%3A0x236e6f6f37444fae!2sHagia%20Sophia%20Museum!5e0!3m2!1sen!2sjo!4v1575296564780!5m2!1sen!2sjo');
    }
    if (resultPlace === "quds"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent =`Jerusalem`
        var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent =`The area of Palestine, including Jerusalem, is the landing site of the monotheistic religions.
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
        Catholic Church share.`
        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/quds4.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d217027.54126626218!2d35.0352713!3d31.7962419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem%2C%20Israel!5e0!3m2!1sen!2sjo!4v1575300478142!5m2!1sen!2sjo');
    }
    if (resultPlace === "taj"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent =`Taj Mahal`
        var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent =` It is a magnificent mausoleum, an elegant white marble architecture found in a hill in the strings of
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
        Persian, Turkish, Ottoman and Indian architectural styles.`
        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/tajjjj8.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14197.530031645714!2d78.0290942!3d27.1757122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sjo!4v1575300397773!5m2!1sen!2sjo');
    }
    if (resultPlace === "Makkah"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent =`Makkah`
              var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent='It is a holy city for Muslims, with the Grand Mosque, and the Kaaba, which is the kiss of Muslims in their prayers. Located west of Saudi Arabia, away from Medina about 400 kilometers in the south-west direction. Mecca has an area of 850 km², of which 88 km² is inhabited, and the central area surroundingthe Grand Mosque is about 6 km², and the height of Mecca is about 277 meters above sea level.At the beginning it was a small village located in a dry valley surrounded by mountains on each side,then people began to come and settle in the era of the Prophet Abraham and the Prophet Ismail, after the Prophet Abraham left his wife Hajar and his son Ismail in this dry desert valley, in compliance with By God order, they stayed in the valley until the well of Zamzam exploded.Mecca is home to many Islamic holy landmarks, most notably the Grand Mosque, the holiest place in th  earth for Muslims, because it includes the Holy Kaaba kissing Muslims in prayer, as it is one of the three mosques to which the traveler, according to the Prophet Muhammad: Travelers are only three mosques of this mosque, the Grand Mosque and the Al Aqsa Mosque.'
 
        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/mecca2.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237685.06936414653!2d39.7064577!3d21.4359571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2sMecca%20Saudi%20Arabia!5e0!3m2!1sen!2sjo!4v1575300530503!5m2!1sen!2sjo');
    }
    if (resultPlace === "WadiRum"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent =`WadiRum`
    var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent =`  Wadi Rum is a protected area covering 720 square kilometers of dramatic desert wilderness in the south
        of Jordan. Huge mountains of sandstone and granite emerge, sheer-sided,
        from wide sandy valleys to reach heights of 1700 meters and more.`

        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/mecca2.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237685.06936414653!2d39.7064577!3d21.4359571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2sMecca%20Saudi%20Arabia!5e0!3m2!1sen!2sjo!4v1575300530503!5m2!1sen!2sjo');
    }
    if (resultPlace === "MountEverest"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent =`MountEverest`
        var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent =`Its peak is on the border of Nepal and China.
        It is above the Death Zone where the air is too thin for a human being to live,
        so usually compressed gas tanks with different gas mixes for different altitudes are used when climbing.
        The Death Zone refers to the parts of Mount Everest that are above 7,600 metres (24,900 ft) above sea
        level.`

        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/Everest1.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28185.510535377554!2d86.90746548742861!3d27.98811904127681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2sMt%20Everest!5e0!3m2!1sen!2sjo!4v1575300632200!5m2!1sen!2sjo');
    }
    if (resultPlace === "CapeTown"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent =`capeTown`
      var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent =`Perched on the southern tip of Africa, Cape Town has been named as one of the most beautiful cities on
        earth.
        Table Mountain, with its near vertical cliffs, flanked by Devil’s Peak and Lion’s Head on either side,
        is an ecological marvel – there is more floral diversity here than in the entire United Kingdom.`

        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/cape_town3.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847627.2471124856!2d18.095609696971266!3d-33.91426882093706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sjo!4v1575300679534!5m2!1sen!2sjo');
    }
    if (resultPlace === "AquaClub"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent = `aqua_clup2`
        var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent = ` Aqua Park) has a variety of recreational facilities that enable you to spend a perfect time with children
        and relax on the sun loungers and drink a favorite cocktail,
        as well as swimming pools and pitfalls and a range of cafes and restaurants where you will spend great
        times,
        in addition to green spaces A water park for young and old and the Dolphin Park to showcase the famous
        dolphin dances.
        Meet with visitors, and live in it. Famous dolphin dances.`

        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/aqua_clup2.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12034.030491703712!2d28.6874069!3d41.0578954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4ff2d122a92ba2c5!2sAqua%20Club%20Dolphin!5e0!3m2!1sen!2sjo!4v1575300733473!5m2!1sen!2sjo');
    }
    if (resultPlace === "petra"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent = `petra`
      var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent = ` Famously known as the ‘Rose City’ because of its stunning architecture carved out in pink sandstone,
        Petra has been enthralling travellers even before it was declared a World Heritage Site in 1985.
        Believed to have been established in 312 B.C, Petra ishome to over 800 ancient structures including
        buildings, tombs, baths and temples. The water conduit systems of this ancient archeological city will
        leave you amazed.`
        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/petra3.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1765165.0121276986!2d35.53595414899054!3d30.22030681718137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spetra%20jordan!5e0!3m2!1sen!2sjo!4v1575300776089!5m2!1sen!2sjo');
    }
    if (resultPlace === "China"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent =  'china'
        var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent = `The First Emperor of China started the Qin Dynasty. The Xiongnu tribes in the north of China were his enemies. The land in some parts of China is easy to cross, so Qin Shi Huang started building the Great Wall to make it more difficult for the Xiongnu to invade China.Other dynasties in China had worked more
        on the wall and made it longer. The Han, Sui, Northern and Jin Dynasties all repaired, rebuilt or
        expanded the Great Wall. During the Ming Dynasty, major rebuilding work took place. Sections of the wall
        were built with bricks and stone instead of earth`

        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/china3.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.9589583960046!2d116.56818621539638!3d40.43190767936339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f121d7687f2ccf%3A0xd040259b950522df!2sGreat%20Wall%20of%20China!5e0!3m2!1sen!2sjo!4v1575300839637!5m2!1sen!2sjo');
    }
    if (resultPlace === "pyramids"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent = 'Egypt'
        var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent = `They’re over 3,000 years old, and we still don’t have a good idea as to how they were built or how
        the
        Egyptians made them so precise .The three pyramids align to the stars and the solstices and contain
        tons
        of chambers that still haven’t been (andcannot be) opened.The largest one, called the Great Pyramid,
        was
        built by the Pharaoh Khufu and has limited access to it. The Pyramids are truly a marvel of human
        engineering that was fit for kings.`

        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/egypt-5.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37709964616!2d31.223444832512136!3d30.05948381032293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sjo!4v1575300880548!5m2!1sen!2sjo');
    }
    if (resultPlace === "rome"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent = `rome`
        var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent = `The famed Eternal City is home to few iconic pieces of architecture that include Pantheon, Forum,
        Arch
        of Constantine, Circus Maximus; and the list goes on. We bet that a trip to Rome is incomplete
        without a
        walk along the lanes around the Barouque and Renaissance buildings there.`
        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/rome3.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380059.5561632262!2d12.255814103766959!3d41.90973055559072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy!5e0!3m2!1sen!2sjo!4v1575300928280!5m2!1sen!2sjo');
    }
    if (resultPlace === "dubai"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent = `dubai`
        var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent = `The most famous of the seven Emirates in the United Arab Emirates (UAE), Dubai is a world-class
        destination.
        The story of ‘modern’ Dubai is relatively short. The Emirate has been established for thousands of
        years, yet within the last few decades, Dubai has transformed itself into the ambitious, dynamic
        Emirate
        we experience today.
        In 1894, the introduction of full tax exemption invited traders around the world to take advantage
        of
        the Emirate’s unique benefits. In the 1940’s and 50’s, Dubai prospered in the gold trade, providing
        a
        strong economy for its 40,000 population. This was just the start as the mid 1960’s unveiled the
        discovery of oil and Dubai’s economy went into overdrive, leading to an influx of foreign workers.
        In 1973, Dubai joined the other Emirates to adopt a single, uniform currency: the UAE dirham. In the
        late 70s, the Jebel Ali Free Zone was created, comprising the world’s largest port and providing
        foreign
        countries and businesses unrestricted import and export.
        As oil prices increased, Dubai focused closely on developing free-trade and tourism. In 2000, the
        Dubai.`
        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/Dubai3.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d462565.197581445!2d54.94755498654818!3d25.075085310621684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smap%20of%20dubai%20in%20html!5e0!3m2!1sen!2sjo!4v1575301018079!5m2!1sen!2sjo');
    }
    if (resultPlace === "malaysia"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent = `malaysia`
        var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent = ` To know Malaysia is to love Malaysia - a bubbling, bustling melting-pot of races and religions where
        Malays, Indians, Chinese and many other ethnic groups live together in peace and harmony. Our
        multiculturalism has made Malaysia a gastronomical paradise and home to hundreds of colourful
        festivals.
        It's no wonder that we love celebrating and socialising. As a people, Malaysians are very relaxed,
        warm
        and friendly.
        Geographically, Malaysia is almost as diverse as its culture. 11 states and 2 federal territories
        (Kuala
        Lumpur and Putrajaya) form Peninsular Malaysia which is separated by the South China Sea from East
        Malaysia which includes the 2 states (Sabah and Sarawak on the island of Borneo) and a third federal
        territory, the island of Labuan.
        One of Malaysia's key attractions is its extreme contrasts which further add to this theme of
        ‘diversity’. Towering skyscrapers look down upon wooden houses built on stilts while five-star
        hotels
        sit just metres away from ancient reefs.
        Rugged mountains reach dramatically for the sky while their rainforest-clad slopes sweep down to
        floodplains teeming with forest life. Cool highland hideaways roll down to warm, sandy beaches and
        rich,
        humid mangroves.
        For the perfect holiday full of surprises, the time is now, the place is Malaysia.`

        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/malaysia 3.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8162525.260282759!2d105.9227714!3d2.6324184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2sjo!4v1575301069327!5m2!1sen!2sjo');
    }
    if (resultPlace === "norway"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent = `norway`
      var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent = `The main attractions of Norway are the varied landscapes that extend across the Arctic Circle. It is
        famous for its fjord-indented coastline and its mountains, ski resorts, lakes and woods. Popular
        tourist
        destinations in Norway include Oslo, Ålesund, Bergen, Stavanger, Trondheim and Tromsø. Much of the
        nature of Norway remains unspoiled, and thus attracts numerous hikers and skiers. The fjords,
        mountains
        and waterfalls in Western and Northern Norway attract several hundred thousand foreign tourists each
        year. In the cities, cultural idiosyncrasies such as the Holmenkollen ski jump attract many
        visitors, as
        well as science abilities and cultural learnings and things such as Bryggen in Bergen and the
        Vigeland
        Sculpture Park in Oslo, and they do not know about it.`

        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/Norway 3.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14595408.988784678!2d0.11047991508330603!3d63.47724508393667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461268458f4de5bf%3A0xa1b03b9db864d02b!2sNorway!5e0!3m2!1sen!2sjo!4v1575301613991!5m2!1sen!2sjo');
    }
    if (resultPlace === "turkey"){
        console.log(resultPlace)

        var container = document.getElementById("container")
        var h2El = document.getElementById('h')
        container.appendChild(h2El)
        h2El.textContent = `turkey`
       var pEl = document.getElementById('brief')
        container.appendChild(pEl)
        pEl.textContent = `Turkey is a modern country with a captivating blend of antiquity and contemporary and East and West.
        Get
        interesting information about Turkey and read up on our history, culture and art, nature and
        geography,
        traditional culinary culture, real Turkish lifestyle and more. All you need to know about Turkey and
        beyond.`

        var image = document.getElementById('image')
        container.appendChild(image)
        image.setAttribute("src", 'img/Turkey 2.jpg');
        var map = document.getElementById('iframe')
        container.appendChild(map)
        map.setAttribute ("src",'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12746665.261471225!2d26.18442755451708!3d38.74124816754356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sjo!4v1575301656747!5m2!1sen!2sjo');
    }
}

// TravelResult.prototype.render = function () {
//     console.log(purpose);
//         if (purpose === "leisureTourism") {
//         var elem1 = document.getElementById('religious');
//         elem1.parentNode.removeChild(elem1);
//         var elem2 = document.getElementById('Historical');
//         elem2.parentNode.removeChild(elem2);
//         var elem3 = document.getElementById('adventurous');
//         elem3.parentNode.removeChild(elem3);

//     } else if (purpose === "HistoricalTourism") {
//             var elem4 = document.getElementById('religious');
//         elem4.parentNode.removeChild(elem4);
//         var elem5 = document.getElementById('leisure');
//         elem5.parentNode.removeChild(elem5);
//         var elem6 = document.getElementById('adventurous');
//         elem6.parentNode.removeChild(elem6);
//      } else if (purpose === "religiousTourism") {
//          var elem7 = document.getElementById('leisure');
//         elem7.parentNode.removeChild(elem7);
//         var elem8 = document.getElementById('Historical');
//         elem8.parentNode.removeChild(elem8);
//         var elem9 = document.getElementById('adventurous');
//         elem9.parentNode.removeChild(elem9);
//     }else if (purpose === "adventurousTourism") {
//         var elem10 = document.getElementById('religious');
//         elem10.parentNode.removeChild(elem10);
//         var elem11 = document.getElementById('Historical');
//         elem11.parentNode.removeChild(elem11);
//         var elem12 = document.getElementById('leisure');
//         elem12.parentNode.removeChild(elem12);
//     }
// }
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var travelPurpose = event.target.travelPurpose.value;
    var budget = event.target.budget.value;
    var days = event.target.days.value;
    var travelq = event.target.travelq.value;
    var newTravelResult = new TravelResult(travelPurpose, budget, days, travelq);
    // TravelResult.prototype.result();
    TravelResult.prototype.render();
    form.reset();
});

