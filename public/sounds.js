var game = new Phaser.Game(800, 600, Phaser.AUTO, 'sounds', { preload: preload, create: create, update:update });

function preload() {
  game.load.spritesheet('button', '/img/buttons/button_sprite_sheet.png', 193, 71);
  game.load.image('background','/img/misc/starfield.jpg');
  game.load.audio('sfx', '/img/audio/SoundEffects/fx_mixdown.ogg');
  game.load.audio('sweet', ['/img/audio/bodenstaendig_2000_in_rock_4bit.mp3', '/img/audio/bodenstaendig_2000_in_rock_4bit.ogg']);
}

var fx, sweet;

function create() {
  var background = game.add.tileSprite(0, 0, 800, 600, 'background');
  var button1 = game.add.button(game.world.centerX, 50, 'button', playSong, null, 2, 1, 0);
  var button2 = game.add.button(game.world.centerX, 150, 'button', playFx, null, 2, 1, 0);
  button1.scale.setTo(0.5);
  button1.anchor.setTo(0.5);
  button2.scale.setTo(0.5);
  button2.anchor.setTo(0.5);

  sweet = game.add.audio('sweet');
  fx = game.add.audio('sfx');
  fx.allowMultiple = true;

  fx.addMarker('alien death', 1, 1.0);
	fx.addMarker('boss hit', 3, 0.5);
	fx.addMarker('escape', 4, 3.2);
	fx.addMarker('meow', 8, 0.5);
	fx.addMarker('numkey', 9, 0.1);
	fx.addMarker('ping', 10, 1.0);
	fx.addMarker('death', 12, 4.2);
	fx.addMarker('shot', 17, 1.0);
	fx.addMarker('squit', 19, 0.3);
}

function playSong(button){
  if(sweet.isPlaying){
    sweet.pause();
  }else{
    sweet.play();
  }
}

function playFx(button){
  fx.play('meow');
}

function update(){
}
