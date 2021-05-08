
let aBox = function(imgAdd, div){
  new p5(function (p) {
    let img;
    let k = -1;
    let pp = 0;
    let s = 1;
    let x = 0;
    let xd = 10;
    let tp = 0;
    let td = 1;
    let flag = true;
  
    let arr = new Array();
    for(let i=1; i<=30; i++){
        arr.push(255-i*5);
    }
  
    p.preload = function() {
      img = p.loadImage(imgAdd);
    }
    
    p.setup = function() {
      p.createCanvas(240, 240);
      p.frameRate(10);
    }
  
    p.draw = function() {
      if(flag){
        p.rectMode(p.CENTER);
        let idx;
        let count = 0;
        for(let i=30; i>0; i--){
          idx = (k+i)%30;
          p.stroke("beige");
          p.fill(0,0,arr[idx]);
          p.rect(120,120, i*i*i*i*i*i/2430000, i*i*i*i*i*i/2430000,i*i*i*i*i*i*(30-i)*4/(2430000*100));
        }
        //stroke("Black");
        p.line(0,0,240,240);
        p.line(0,240,240,0);
        if(pp==0){
          s = 1;
        }else if(pp==30){
          flag = false;
          s = -1;
        }
        
        let i = pp;
        p.fill(25,25,112);
        p.rect(120,120, i*i*i*i*i*i/2430000, i*i*i*i*i*i/2430000,i*i*i*i*i*i*(30-i)*4/(2430000*100));
        k = (k-s+30)%31;
        pp = (pp+s)%31;
      }else{
        
        p.image(img, 0, 0,240,240);
        p.fill(25,25,112);
        p.rectMode(p.CORNER);
        p.rect(x,0,300,300);
        if(x==300){
          xd = -10;
        }
        
        if(x==0 && xd==-10){
          flag = true;
          xd = 10;
        }
        
        x += xd;
      }
      
    }

  }, div)
}

let a1 = aBox("./images/Box1.jpg", 'c1');
let a2 = aBox("./images/Box2.jpg", 'c2');
let a3 = aBox("./images/Box3.jpg", 'c3');
let a4 = aBox("./images/Box4.jpg", 'c4');
let a5 = aBox("./images/Box5.jpg", 'c5');
let a6 = aBox("./images/Box6.jpg", 'c6');
let a7 = aBox("./images/Box7.jpg", 'c7');
let a8 = aBox("./images/Box8.jpg", 'c8');
let a9 = aBox("./images/Box9.jpg", 'c9');
let a10 = aBox("./images/Box10.jpg", 'c10');
let a11 = aBox("./images/Box11.jpg", 'c11');
let a12 = aBox("./images/Box12.jpg", 'c12');