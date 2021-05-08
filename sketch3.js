
let aBox = function(imgAdd, t_start, xdir, ydir, div){
  new p5(function (p) {
    let img;
    let tp = 0;
    let td = 1;
    let flag = true;
    let logo_colors = [[0,170,231],[0,127,198],[0,63,135]];
  
    let arr = new Array();
    for(let i=1; i<=30; i++){
        arr.push(255-i*5);
    }
  
    p.preload = function() {
      img = p.loadImage(imgAdd);
    }
    
    p.setup = function() {
      p.createCanvas(240, 240);
      p.frameRate(15);
      p.stroke("white");
     // p.strokeWeight(4);
    }
  
    p.draw = function() {

      p.background("white");
      //p.tint(255,20+235*(tp*tp*tp)/(126*126*126));
      p.image(img,0,0,240,240);
      p.rectMode(p.CORNER);
          
          let xcord = (tp-t_start)*24*xdir;
          let ycord = (tp-t_start)*24*ydir;
          let side = (240-Math.abs(xcord))/12;

        if(tp<t_start){
          xcord = 0;
          ycord = 0;
          side = 20;
        }

        if(xdir==-1){
          xcord = 0;
        }
        let transparency = 255*(120-tp)/120;

        p.fill(255,255,255,transparency);
        p.rect(0,0,240,240);
        
        let xidx;
        if(tp<=(t_start+10)){
          for(let i=0; i<12; i++){
            p.fill(logo_colors[i%3][0], logo_colors[i%3][1], logo_colors[i%3][2],255-tp);
            xidx = xcord + side*i;
            p.rect(xidx,ycord,side,240);
          }
        }
        
        tp += td;
        if(tp==126){
          td = -1;
        }else if(tp==0){
          td = 1;
        }
      
    }

  }, div)
}

let a1 = aBox("Box1.jpg",0,1,0, 'c1');
let a2 = aBox("Box2.jpg",10,1,0, 'c2');
let a3 = aBox("Box3.jpg",20,1,0, 'c3');
let a4 = aBox("Box4.jpg",30,0,1, 'c4');
let a5 = aBox("Box5.jpg",90,1,0, 'c5');
let a6 = aBox("Box6.jpg",100,1,0, 'c6');
let a7 = aBox("Box7.jpg",110,1,0, 'c7');
let a8 = aBox("Box8.jpg",40,0,1, 'c8');
let a9 = aBox("Box9.jpg",80,0,-1 ,'c9');
let a10 = aBox("Box10.jpg",70,-1,0 ,'c10');
let a11 = aBox("Box11.jpg",60,-1,0 ,'c11');
let a12 = aBox("Box12.jpg",50,-1,0, 'c12');