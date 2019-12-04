'use strict'
var results=[];

function Locationtravel( name ,image, perpose , badget ,location ){
    this.name = name;
    this.image = image;
    this.location = location;
    this.perpose = perpose;
    this.badget = badget;
    if (badget < 3000) {
        
    } else if (badget > 3000) {
        
    } else if (badget === 3000) {
        
    }
    results.push(this);
};
var aya = new Locationtravel('Hagia Sophia', '../img/aya7.jpg' ,'Recreational tourism','500$ - 3000 $', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3010.76196177466!2d28.9779863!3d41.008583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9be92011c27%3A0x236e6f6f37444fae!2sHagia%20Sophia%20Museum!5e0!3m2!1sen!2sjo!4v1575296564780!5m2!1sen!2sjo');
var tajMahal = new Locationtravel('Taj Mahal','../img/tajjj3.jpg', 'Recreational tourism','5000 $','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14197.530031645714!2d78.0290942!3d27.1757122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sjo!4v1575300397773!5m2!1sen!2sjo');
var wadirame = new Locationtravel('Wadi Rum - Jordan','../img/wadi_rum1.jpg','adventurous tourism','0 - 500 $','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d887900.0826380447!2d35.1424315!3d29.6222945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150093a5d3b537b3%3A0xe9885592958b5d07!2sMagic%20Bedouin%20Star!5e0!3m2!1sen!2sjo!4v1575300575312!5m2!1sen!2sjo');
var mountEverest = new Locationtravel('MountEverest','../img/sboul-img/Everest2.jpg','adventurous tourism', '5000 $','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28185.510535377554!2d86.90746548742861!3d27.98811904127681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2sMt%20Everest!5e0!3m2!1sen!2sjo!4v1575300632200!5m2!1sen!2sj');
var petra = new Locationtravel('Petra','../img/petra1.jpg', 'Historical tourism' ,'0 - 500 $','https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1765165.0121276986!2d35.53595414899054!3d30.22030681718137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spetra%20jordan!5e0!3m2!1sen!2sjo!4v1575300776089!5m2!1sen!2sjo');
var rome = new Locationtravel('Rome' ,'../img/rome3.jpg', 'Historical tourism' ,'5000 $', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380059.5561632262!2d12.255814103766959!3d41.90973055559072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy!5e0!3m2!1sen!2sjo!4v1575300928280!5m2!1sen!2sjo');
var dubai = new Locationtravel(' Dubai', '../img/Dubai4.jpg', 'tourism' , '5000 $', 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d462565.197581445!2d54.94755498654818!3d25.075085310621684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smap%20of%20dubai%20in%20html!5e0!3m2!1sen!2sjo!4v1575301018079!5m2!1sen!2sjo');
var turkeyh = new Locationtravel('Turkey' , '../img/Turkey 2.jpg' , 'tourism' , '500 $ - 3000 $' ,'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12746665.261471225!2d26.18442755451708!3d38.74124816754356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sjo!4v1575301656747!5m2!1sen!2sjo');
console.log(results);