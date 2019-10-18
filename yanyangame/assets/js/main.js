// 源代码可以在https://github.com/yanyangames/yanyangames.github.io找到
// 本游戏开源，在使用时请注明作者semimage
// 游戏中的音频下载于https://www.freesound.org/，均可免费使用
// 音频作者为：matrix145, fins, nenadsimic, scrampunk
var game;

game = new Phaser.Game(600,600,Phaser.AUTO,'');

game.state.add('Menu',Menu);

game.state.add('Game',Game);

game.state.add('Game_Over',Game_Over);



game.state.start('Menu');

// game.state.start('Game');
