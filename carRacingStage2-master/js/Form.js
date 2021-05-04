class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
   
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    
  }

  display(){
    this.title.html("Aadu puli aatam");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/4-330, displayHeight/2-400);
      this.button1 = createButton("Play With Computer")
      this.button2 = createButton("Play with Friends")
      this.button1.position(displayWidth/2-100,displayHeight/2-100)
      this.button2.position(displayWidth/2-100,displayHeight/2-150)
      this.text.createElement('h2');
      this.text.html("Coins")
      this.text.position(displayWidth/4-100,displayHeight/2-400)
    });

  }
}
