function preload() {
    
}
function setup() {
    canvas = createCanvas(400, 400)
    canvas.position(100, 150)
    video = createCapture(VIDEO)
    video.size(200,200)
    video.hide()
}
function draw() {
    image(video, 90, 100, 200, 200)
    
    fill(0,0,255)
    stroke(255,255,255)
    rect(40,74,20,270)
    fill(0,0,255)
    stroke(255,255,255)
    rect(60,75,270,20)
    fill(0,0,255)
    stroke(255,255,255)
    rect(330,74,20,270)
    fill(0,0,255)
    stroke(255,255,255)
    rect(60,324,270,20)
    fill(255,0,0)
    stroke(255,255,255)
    circle(50,80,50)
    fill(255,0,0)
    stroke(255,255,255)
    circle(50,335,50)
    fill(255,0,0)
    stroke(255,255,255)
    circle(340,80,50)
    fill(255,0,0)
    stroke(255,255,255)
    circle(340,335,50)
    

    
    
}
function applyfilter () {
    tint_colour= document.getElementById("filterinput").value
}
function take_snapshot () {
    save("dhanvin.png")
}