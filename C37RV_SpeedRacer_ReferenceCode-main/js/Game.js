class Game {
  constructor() {}

  getState() {
    var data = database.ref("gameState").on("value", data=>{
      gameState = data.val();
    });
  }

  changeState(state) {
    database.ref("/").update({
      gameState:state
    })
  };

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    
  }
  handleElements() {
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect");
  }

 

  play() {
    this.handleElements();

    Player.getPlayersInfo();
    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage(car1_img);
    car1.scale = 0.07;
    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage(car2_img);
    car2.scale = 0.07;
    console.log(playerCount);

    cars = [car1, car2]

   if (allPlayers !== undefined) {
     // image(track, 0, -height * 5, width, height * 6);
      image(track,0,-height*5,windowWidth,windowHeight*6)
      drawSprites();
    }
  }
}
