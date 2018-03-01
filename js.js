var Soleil;
var Mercure;
var Vénus;
var Terre;
var Lune;
var Mars;
var Jupiter;
var Saturne;
var SaturnRing;
var Uranus;
var Neptune;
var song;

var increment = 0;

function preload() {
    Soleil = loadImage('Soleil.jpg');
    Mercure = loadImage('Mercure.jpg');
    Vénus = loadImage('Vénus.jpg');
    Terre = loadImage('Terre.jpg');
    Lune = loadImage('Lune.jpg');
    Mars = loadImage('Mars.jpg');
    Jupiter = loadImage('Jupiter.jpg');
    Saturne = loadImage('Saturne.jpg');
    SaturnRing = loadImage('saturn_ring.png');
    Uranus = loadImage('Uranus.png');
    Neptune = loadImage('Neptune.jpg');
    Pluton = loadImage('Pluton.jpg');
    song = loadSound('Tokyo Bon 東京盆踊り2020 (Makudonarudo) Namewee黃明志 ft.Meu Ninomiya二宮芽生.mp3');
    // song = loadSound('Rick Astley - Never Gonna Give You Up.mp3');
    // song = loadSound('Get Schwifty Music Video  _ Rick and Morty _ Adult Swim.mp3');
    // song = loadSound('Weird russian singer - Chum Drum Bedrum.mp3');
    // song = loadSound('Lazy Town _ We are Number One Music Video.mp3');
    // song = loadSound('Peanut Butter Jelly Time with Lyrics!!!.mp3');
    // song = loadSound('SKRILLEX - Bangarang feat. Sirah [Official Music Video].mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    camera(0, 0, 5000, 0, 0, 0, 0, 1, 0);
    if (song) {
        song.play();
    }
    amplitude = new p5.Amplitude();
    fft = new p5.FFT();
}

function draw() {
    background(51);
    orbitControl();
    // Sound Part
    var level = amplitude.getLevel();
    if (level === 0) {
        level = 0.10;
    }
    var spectrum = fft.analyze();
    increment+= pow(level, 2)*5000;
    push();
    translate(-5500,0,0);
    var color = ['#7B4F00','#FFFC00','#C2F80C','#4EF400','#35EF1F','#05EF36','#00EEBF','#0BEFF8','#1092EA','#123BD3','#0F23A8','#580AF4','#B105F7','#DD05D4','#DE088C','#E60853'];
    var division = spectrum.length / color.length;
    if (song) {
        for (var i = 0; i < spectrum.length; i++) {
            translate(11,0,0);
            var x = map(i, 0, spectrum.length, 0, width);
            var h = -height + map(spectrum[i], 0, 255, height, 0);
            fill(color[parseInt(i/division)]);
            plane(10, h*5);
        }
    }
    pop();

    // Solar Sytem
    push();
    rotateY(increment / 2000);
    var planetteSoleil = createPlanet(1000, Soleil);
    pop();

    push();
    rotateY(increment / 144);
    translate(1100, 0, 0);
    rotateY(increment / 1000);
    var planetteMercure = createPlanet(18, Mercure);
    pop();

    push();
    rotateY(increment / 372);
    translate(1200, 0, 0);
    rotateY(increment / -1000);
    var planetteVénus = createPlanet(43, Vénus);
    pop();

    push();
    rotateY(increment / 606);
    translate(1400, 0, 0);
    rotateY(increment / 1000);
    var planetteTerre = createPlanet(46.75, Terre);
    translate(30, 0, 0);
    rotateY(increment / 1000);
    var planetteLune = createPlanet(10.75, Lune);
    pop();

    push();
    rotateY(increment / 1139);
    translate(1600, 0, 0);
    rotateY(increment / 1000);
    var planetteMars = createPlanet(25.2, Mars);
    pop();

    push();
    rotateY(increment / 7190);
    translate(2300, 0, 0);
    rotateY(increment / 1000);
    var planetteJupiter = createPlanet(514.4, Jupiter);
    pop();

    push();
    rotateY(increment / 17870);
    translate(3300, 0, 0);
    rotateY(increment / 1000);
    var planetteSaturne = createPlanet(435.25, Saturne);
    pop();

    push();
    rotateY(increment / 50990);
    translate(4000, 0, 0);
    rotateY(increment / -1000);
    var planetteUranus = createPlanet(183.45, Uranus);
    pop();

    push();
    rotateY(increment / 100000);
    translate(4400, 0, 0);
    rotateY(increment / 1000);
    var planetteNeptune = createPlanet(179.85, Neptune);
    pop();

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, WEBGL);
}

function createPlanet(diametre, img) {
    texture(img);
    sphere(diametre);
}
