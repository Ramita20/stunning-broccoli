import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

const myDoggy: Sprite = Sprite.from("doggy.png");

myDoggy.anchor.set(0.5);

myDoggy.x = app.screen.width / 2;
myDoggy.y = app.screen.height / 2;

app.stage.addChild(myDoggy);