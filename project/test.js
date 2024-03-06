function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100,200,200);
  testFunction(mouseX/10,mouseX/5);
}





function testFunction( var1, var2 ) {




  for (let i = 0; i < 10; i++) {
    strokeWeight(.3);

    while(i=0){
    let sizeFactor = i*10*var1;
    text("size factor:" + sizeFactor, 50,50);
    }

    fill(100,80);
    ellipse(width/2 + i*10, height/2 + i*10, i*10*var1, i*var2);
    push();
    strokeWeight(2)
    fill(200,100,i*20);
    rect( width/2 + i*10, height/2 + i*10, i*var1, -i*2.2*var2 );
    pop();
  }
}