

console.log('js-linked');

soundManager.setup({
  url: 'soundmanager/swf/',
  ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
  }
});

var tardis = soundManager.createSound({
  id: 'tardis',
  url: './sounds/tardis.mp3',
  // autoLoad: true,
  // autoPlay: false,
  // onload: function() {
  //   alert('The sound '+this.id+' loaded!');
  // },
  // volume: 50
});


//

// clams = document.getElementById('clams')

// play(clams,'clams')

// function addClick(location,title) {
//   location.addEventListener('click',function() {
//     var title = soundManager.createSound({
//       id: 'title',
//       url: './sounds/'+title+'.mp3'
//     });
//     title.play();
//   });
// }



document.getElementById('img1').addEventListener('click',function() {
    var eccleston = soundManager.createSound({
      id: 'eccleston',
      url: './sounds/banana.mp3'
    });
    eccleston.play();
  });


document.getElementById('img2').addEventListener('click',function() {
    var tennant = soundManager.createSound({
      id: 'david-tennant',
      url: './sounds/beautiful.mp3'
    });
    tennant.play();
  });

document.getElementById('img3').addEventListener('click',function() {
    var smith = soundManager.createSound({
      id: 'matt-smith',
      url: './sounds/clever.mp3'
    });
    smith.play();
  });

document.getElementById('img4').addEventListener('click',function() {
    var capaldi = soundManager.createSound({
      id: 'peter-capaldi',
      url: './sounds/wrong.mp3'
    });
    capaldi.play();
  });


document.getElementById('img5').addEventListener('click',function() {
    var tardis = soundManager.createSound({
      id: 'tardis',
      url: './sounds/tardis.mp3'
    });
    tardis.play();
  });


document.getElementById('img6').addEventListener('click',function() {
    var rose = soundManager.createSound({
      id: 'rose',
      url: './sounds/die.mp3'
    });
    rose.play();
  });

document.getElementById('img7').addEventListener('click',function() {
    var dalek = soundManager.createSound({
      id: 'dalek',
      url: './sounds/dalek.mp3'
    });
    dalek.play();
  });

document.getElementById('img8').addEventListener('click',function() {
    var theme = soundManager.createSound({
      id: 'theme',
      url: './sounds/theme.mp3'
    });
    theme.play();
  });


document.getElementById('img9').addEventListener('click',function() {
    var strax = soundManager.createSound({
      id: 'strax',
      url: './sounds/apathy.mp3'
    });
    strax.play();
  });




