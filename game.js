//Створюємо сцену
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);
//Завантажуємо спрайти
function preload ()
{
this.load.image('sky', 'assets/sky.png');
this.load.image('ground', 'assets/platform.png');
this.load.image('star', 'assets/star.png');
this.load.image('bomb', 'assets/bomb.png');
this.load.spritesheet('dude',
    'assets/dude.png',
    {frameWidth: 32, frameHeight: 48}
);
}
//Додаємо спрайти до сцени
function create ()
{
this.add.image(400, 300, 'sky');
platforms = this.physics.add.staticGroup();
platforms.create(400, 590, 'ground').setScale(1.2).refreshBody();
platforms.create(600, 400, 'ground').setScale(0.5).refreshBody();
platforms.create(800, 400, 'ground').setScale(0.5).refreshBody();
platforms.create(50, 250, 'ground').setScale(0.5).refreshBody();
platforms.create(750, 220, 'ground').setScale(0.5).refreshBody();
}

function update ()
{
}