const CONFIG_DATA = {
  images: [
    // الصورة الأولى: تظهر في العصر الأول (Ancient Age)
    { 
      id:'img-001', 
      era:1, 
      src:'https://i.postimg.cc/RZq8nXmQ/9592f1ec3101223ae30cbc7cc15bf4dd.jpg', 
      label:'The Ancient Vessel', 
      w:220, h:300, x:80, y:-40, depth:1, secret:true 
    },

    // الصورة الثانية: تظهر في العصر الثاني (Transmigration)
    { 
      id:'img-002', 
      era:2, 
      src:'https://i.postimg.cc/2SFY20JJ/32e47602c98a03a072813bfcc55be230.jpg', 
      label:'The Migration', 
      w:200, h:300, x:120, y:20, depth:2, secret:false 
    },

    // الصورة الثالثة: تظهر في العصر الثالث (Geto's Age)
    { 
      id:'img-003', 
      era:3, 
      src:'https://i.postimg.cc/3r6cp28/53930b381bb705bea9251a235c54389a.jpg', 
      label:'Borrowed Face', 
      w:230, h:340, x:100, y:-60, depth:1, secret:false 
    },

    // الصورة الرابعة: تظهر في العصر الرابع (The Merger)
    { 
      id:'img-004', 
      era:4, 
      src:'https://i.postimg.cc/63q9mdJS/a2091cf53e305f8e53bd044619e9a49e.jpg', 
      label:'The Culling Game', 
      w:260, h:360, x:150, y:-80, depth:1, secret:true 
    },

    // الصورة الخامسة: تظهر في نهاية الـ Timeline (The Final Evolution)
    { 
      id:'img-005', 
      era:4, 
      src:'https://i.postimg.cc/HWSSmbDD/ea231ab4d705798067163a3866213178.jpg', 
      label:'The Grand Merger', 
      w:240, h:320, x:450, y:40, depth:3, secret:false 
    }
  ],

  eras: [
    { id:1, num:'ERA_01', name:'The Ancient Age', year:'-~500 BCE', title:'Before the World<br><em>Forgot His Name</em>', desc:'بداية لعنة كينجاكو في أقدم العصور.' },
    { id:2, num:'ERA_02', name:'Transmigration', year:'~600 CE', title:'The Soul<br><em>Finds New Flesh</em>', desc:'انتقال الوعي من جسد لجسد عبر القرون.' },
    { id:3, num:'ERA_03', name:"Geto's Age", year:'2017 CE', title:'A Perfect<br><em>Face to Wear</em>', desc:'السيطرة على جسد جيتو سوجورو وبداية الخطة النهائية.' },
    { id:4, num:'ERA_04', name:'The Great Merger', year:'Present', title:'The Game<br><em>Has Always Been Mine</em>', desc:'لحظة الاندماج الكبير وتحول العالم.' }
  ]
};

export default CONFIG_DATA;
