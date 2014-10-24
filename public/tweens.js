var game = new Phaser.Game(800, 600, Phaser.AUTO, 'sounds', { preload: preload, create: create, update:update });

function preload() {
  game.load.spritesheet('button', '/img/buttons/button_sprite_sheet.png', 193, 71);
  game.load.image('background','/img/misc/starfield.jpg');
  game.load.audio('sfx', '/img/audio/SoundEffects/fx_mixdown.ogg');
  game.load.audio('sweet', ['/img/audio/bodenstaendig_2000_in_rock_4bit.mp3', '/img/audio/bodenstaendig_2000_in_rock_4bit.ogg']);
  game.load.image('ball', '/img/sprites/yellow_ball.png');
  game.load.image('shiny', '/img/sprites/shinyball.png');
  game.load.image('dragon', '/img/pics/cougar_dragonsun.png');
}

var ball, shiny, shiny1;

function create() {
  ball = game.add.sprite(300, 0, 'ball');
  moveBall();
  shiny = game.add.sprite(200, 0, 'shiny');
  moveShiny();
  shiny1 = game.add.sprite(400, 0, 'shiny');
  moveShiny1();

  var dragon = game.add.sprite(250, 250, 'dragon');
  dragon.scale.setTo(0.2);

  game.add.tween(dragon).to({ alpha: 0 }, 2000, Phaser.Easing.Bounce.In, true, 0, Number.MAX_VALUE, true);

  game.add.tween(dragon).to({ x: 600 }, 2000, Phaser.Easing.Bounce.In)
    .to({ y: 300 }, 1000, Phaser.Easing.Linear.None)
    .to({ x: 100 }, 2000, Phaser.Easing.Bounce.Out)
    .to({ y: 100 }, 1000, Phaser.Easing.Linear.None)
    .loop()
    .start();
}

function moveBall(){
  ball.y = 0;
  var bounce = game.add.tween(ball);
  bounce.to({y:game.world.height - ball.height}, 3000, Phaser.Easing.Bounce.In);
  bounce.onComplete.add(moveBall);
  bounce.start();
}

function moveShiny(){
  shiny.y = 0;
  game.add.tween(shiny).to({y:200}, 4000, Phaser.Easing.Quadratic.InOut, true, 500, 30);
}

function moveShiny1(){
  shiny1.y = 0;
  game.add.tween(shiny1).to({y:200}, 4000, Phaser.Easing.Quadratic.InOut, true, 500, 30, true);
}

function update(){
}
