const flock = [];
let alignSlider, cohesionSlider, separationSlider, boidButtonPlus, boidButtonMinus;
let colB = 50;
let xoff = 0;


function setup() {
    colorMode(HSB, 100);
    createCanvas(720 , 720);
    alignSlider = createSlider(0, 2, 0.1, 0.1);
    cohesionSlider = createSlider(0, 2, 0.45, 0.1);
    separationSlider = createSlider(0, 2, 0.5, 0.1);
    boidButtonPlus = createButton("+1 Boid");
    boidButtonMinus = createButton("-1 Boid");
    let boidCount = 1;
    for(let i = 0; i < boidCount; i++){ 
    flock.push(new Boid());

  }

}



function draw() {

  // credit to p5xJS user jarivkin for this quick bit of colour interpolation
  // https://editor.p5js.org/jarivkin/sketches/KkuvWGhDv
   colH = map(noise(xoff), 0, 1, 40, 55);
   colS = map(noise(xoff), 0, 1, 60, 80);
   colB = map(noise(xoff), 0, 1, 90, 100);
  
    background(colH, colS, colB, 20);

    boidButtonPlus.mousePressed(() => {
      flock.push(new Boid());
    });

    boidButtonMinus.mousePressed(() => {
      flock.pop();
    });

    for(let boid of flock) {
      boid.flock(flock);
      boid.update();
      boid.show();  
      boid.edges();
    }

    xoff+= 0.003;
}


