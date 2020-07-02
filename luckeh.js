var arrayOfLuckeh = [
    'When life gives you meLons, you have dyslexia.',
    'Skool Holiays!',
    'Ms.Boswell, if you fall, at least you will bounce back.',
    'Fart.',
    'Thou art not luckeh.',
    'Fun stuff lies at the credits page!',
    '2 weeks no newsletters, come on scott!',
    'Ideas go to aaron@10168.com',
    'Fornite is so yesterday.',
    'Burp.'
  ];
var me = document.getElementById('this')
me.onclick = function(){
    me.innerHTML = arrayOfLuckeh[Math.floor(Math.random()*10)]
}