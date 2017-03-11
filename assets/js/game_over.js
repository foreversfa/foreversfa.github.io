var overText

var Game_Over = {

	preload : function(){
		game.load.image('sky','assets/img/sky.png');
	},

	create : function(){
		overText = game.add.text(game.world.width/2,game.world.height/2,'Game Over',{ fontSize: '64px', fill: '#333333' });
		// this.reportToDataBase();



	},

	reportToDataBase : function(){
		// var Records = Parse.Object.extend('Records');
		// var newRecord = new Records();

	}




}
