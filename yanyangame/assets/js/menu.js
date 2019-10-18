var background, button, startSound;
var Menu = {

	preload: function(){
		game.load.image('menu', 'assets/img/menu.png');
		game.load.image('startButton','assets/img/start.png');
		game.load.audio('startSound','assets/sound/startSound.wav');
	},

	create: function(){
		background = game.add.tileSprite(0, 0, 600, 600, 'menu');
		button = game.add.button(game.world.centerX-90,game.world.centerY-40,'startButton',startGame,this,null,null,null)
		startSound = game.add.audio('startSound');
	},



}

function startGame(){
	startSound.play();
	game.state.start('Game')
}
